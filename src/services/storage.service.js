import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "../config/fb";

const uploadFile = (file, name = null) => {
  return new Promise((resolve, reject) => {
    const uploadTask = uploadBytesResumable(
      ref(storage, "content/" + (name || file.name)),
      file
    );

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        reject(new Error(error.message));
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(new Error(error.message));
        }
      }
    );
  });
};

export { uploadFile };
