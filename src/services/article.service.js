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
} from "firebase/firestore";

import { db } from "../config/fb";

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

    await updateDoc(doc(db, "articles", id), updates);
    return true;
  } catch (error) {
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

export { getAllArticles, getArticle, createArticle, updateArticle };
