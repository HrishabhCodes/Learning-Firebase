import React, { useState } from "react";
import { storage } from "../firebase";

const FireStorage = () => {
  const [file, setFile] = useState("");

  const upload = () => {
    const fn1 = (snapshot) => {
      // snapshot ---> How much work has been done till that point of time
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done!`);
    };

    const fn2 = (error) => {
      console.log("Error");
    };

    const fn3 = () => {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        console.log(url);
      });
    };
    const uploadTask = storage.ref(`/data/${file.name}`).put(file);
    uploadTask.on("state_changed", fn1, fn2, fn3); // fn1 - Progress , fn2 - Error , fn3 - Success
  };

  return (
    <div>
      <label htmlFor="file">File</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={upload}>Upload</button>
    </div>
  );
};

export default FireStorage;
