import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./initializer";
interface SignupType {
  email: string;
  password: string;
}

export const signup = ({ email, password }: SignupType) => {
  // const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage);
    });
};
