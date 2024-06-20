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
    console.error("Error fetching articles:", error);
    return false;
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
    console.error("Error fetching article:", error);
    return false;
  }
};

const createArticle = async (data) => {
  try {
    await addDoc(collection(db, "articles"), data);
    return true;
  } catch (error) {
    console.error("Error creating article:", error);
    return false;
  }
};

const updateArticle = async (id, values) => {
  try {
    await updateDoc(doc(db, "articles", id), values);
    return true;
  } catch (error) {
    console.error("Error updating article:", error);
    return false;
  }
};

export { getAllArticles, getArticle, createArticle, updateArticle };
