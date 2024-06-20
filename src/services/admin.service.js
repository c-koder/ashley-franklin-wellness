import { collection, query, where, getDocs, limit } from "firebase/firestore";

import { db } from "../config/fb";

const cache = new Map();

const isUserWhitelisted = async (email) => {
  if (cache.has(email)) {
    return cache.get(email);
  }

  try {
    const q = query(
      collection(db, "whitelists"),
      where("email", "==", email),
      limit(1)
    );

    const querySnapshot = await getDocs(q);

    const isWhitelisted = !querySnapshot.empty;
    cache.set(email, isWhitelisted);

    return isWhitelisted;
  } catch (error) {
    console.error("Error checking whitelist status:", error);
    return false;
  }
};

export { isUserWhitelisted };
