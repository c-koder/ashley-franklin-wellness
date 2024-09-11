import {
  collection,
  orderBy,
  query,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  where,
  limit,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../config/fb";
import { uploadFile } from "./storage.service";

const getAllArticles = async () => {
  try {
    const q = query(collection(db, "articles"), orderBy("publishDate", "desc"));

    const querySnapshot = await getDocs(q);

    const articles = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return articles;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getArticle = async (slug) => {
  try {
    const q = query(
      collection(db, "articles"),
      where("slug", "==", slug),
      limit(1)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const createArticle = async (data) => {
  try {
    const slugExists = await isSlugExists(data.slug);

    if (slugExists) {
      throw new Error("Slug already exists.");
    }

    const url = await uploadFile(data.image, data.slug);
    data.image = url;

    await addDoc(collection(db, "articles"), data);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateArticle = async (id, oldValues, newValues) => {
  try {
    const updates = Object.fromEntries(
      Object.entries(newValues).filter(
        ([key, value]) => oldValues[key] !== value
      )
    );

    if (updates.slug && (await isSlugExists(updates.slug))) {
      throw new Error("Slug already exists.");
    }

    if (typeof newValues.image !== "string") {
      const url = await uploadFile(updates.image, newValues.slug);
      updates.image = url;
    }

    await updateDoc(doc(db, "articles", id), updates);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateFeaturedArticle = async (id, featured) => {
  try {
    const articlesSnapshot = await getDocs(collection(db, "articles"));

    const updates = articlesSnapshot.docs
      .map((doc) => {
        if (featured && doc.id !== id) {
          return updateDoc(doc.ref, { featured: false });
        }
        if (!featured && doc.id === id) {
          return updateDoc(doc.ref, { featured: false });
        }
        if (featured && doc.id === id) {
          return updateDoc(doc.ref, { featured: true });
        }
        return null;
      })
      .filter((update) => update !== null);

    await Promise.all(updates);

    return true;
  } catch (error) {
    console.error("Error updating featured articles:", error);
    throw new Error(error.message);
  }
};

const isSlugExists = async (slug) => {
  try {
    const slugQuery = query(
      collection(db, "articles"),
      where("slug", "==", slug)
    );

    const querySnapshot = await getDocs(slugQuery);

    return !querySnapshot.empty;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteArticle = async (id) => {
  try {
    await deleteDoc(doc(db, "articles", id));

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  updateFeaturedArticle,
  deleteArticle,
};
