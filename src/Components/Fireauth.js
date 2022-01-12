import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

function Fireauth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const create = async () => {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    console.log(res);
  };

  useEffect(() => {
    const signout = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      signout(); // cleanup
    };
  }, []);

  const logout = async () => {
    await auth.signOut();
  };

  const signIn = async () => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      {user === null ? (
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn}>Sign In</button>
        </div>
      ) : (
        <>
          <div>{user.uid}</div>
          <button onClick={logout}>Log Out</button>
        </>
      )}
    </>
  );
}

export default Fireauth;
