import React, { useEffect, useState } from "react";
import { database } from "../firebase";

function Firebase() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const createUserInDatabase = async () => {
    // const res = await database.users.doc('111111').set({ name, age }); -----> CREATE COMMANDS
    const res = await database.users.add({ name, age });
    console.log(res);
  };

  useEffect(async () => {
    const uid = "6x8P40MMNJy0jk1ru7yM";
    // let data = await database.users.doc(uid).get(); &&& onSnapshot ------> READ COMMANDS
    // let data = await database.users.get();
    let data = await database.users.orderBy("age", "asc").get();
    data.forEach((obj) => {
      console.log(obj.data());
    });
  }, []);

  const update = async () => {
    const uid = "6x8P40MMNJy0jk1ru7yM";
    await database.users.doc(uid).update({ name, age }); // ---> UPDATE COMMAND
  };

  const deleteUser = async () => {
    const uid = "6x8P40MMNJy0jk1ru7yM";
    await database.users.doc(uid).delete(); // ---> DELETE COMMAND
  };

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {/* <button onClick={createUserInDatabase} type="submit"> */}
      <button onClick={update} type="submit">
        Create
      </button>
      <button onClick={deleteUser} type="submit">
        Delete
      </button>
    </div>
  );
}

export default Firebase;
