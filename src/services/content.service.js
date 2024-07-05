import { doc, getDocs, updateDoc, collection, query } from "firebase/firestore";
import { db } from "../config/fb";

const getContent = async () => {
  try {
    const q = query(collection(db, "content"));

    const querySnapshot = await getDocs(q);

    const content = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return content;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateContent = async (page, section, field, value) => {
  try {
    const docRef = doc(db, "content", page);
    const updates = {
      [`${section}.${field}`]: value,
    };
    await updateDoc(docRef, updates);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getContent, updateContent };
