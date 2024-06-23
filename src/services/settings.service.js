import { collection, query, getDocs, doc, updateDoc } from "firebase/firestore";

import { db } from "../config/fb";

const getSettings = async () => {
  try {
    const q = query(collection(db, "settings"));

    const querySnapshot = await getDocs(q);

    const settings = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return settings;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateSettings = async (settings) => {
  try {
    const updates = [];

    const { contactInfo, metaDetails } = settings;

    updates.push({
      id: contactInfo.id,
      ...contactInfo,
    });

    updates.push({
      id: metaDetails.id,
      ...metaDetails,
    });

    await Promise.all(
      updates.map(async (update) => {
        const { id, ...data } = update;
        const docRef = doc(db, "settings", id);
        await updateDoc(docRef, data);
      })
    );

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getSettings, updateSettings };
