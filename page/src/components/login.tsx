import { useState } from "react";
import {
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.js";

export default function Login(props: {setScreen: React.Dispatch<React.SetStateAction<number>>}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Firebase based function for checking if user w/ inserted email exists
   *
   * If exists:
   *    Tries to sign in
   * If not exists:
   *    Creates a user with inserted credentials
   */
  async function handleSubmit() {
    await fetchSignInMethodsForEmail(auth, email)
      .then(() => signIn())
      .catch(() => createUser());
  }

  /**
   * Firebase create user function
   */
  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password);
    signIn();
  }

  /**
   * Firebase sign in function
   */
  async function signIn() {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => props.setScreen(1))
        .catch(() => console.log("Wrong email or password"));
  }

  return (
    <div className="container">
      <div>
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}
