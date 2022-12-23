import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "./initializer";
interface AuthType {
  displayName?: string;
  email: string;
  password: string;
}

export const signup = ({ email, password, displayName }: AuthType) => {
  setPersistence(auth, browserSessionPersistence);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      console.log(displayName);

      displayName !== undefined && updateUserProfile(displayName);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage);
    });
};

export const login = ({ email, password }: AuthType) => {
  setPersistence(auth, browserSessionPersistence);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const updateUserProfile = (displayName: string) => {
  auth.currentUser &&
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: "",
    })
      .then(() => {
        console.log(auth.currentUser);
        // Profile updated!
        // ...
      })
      .catch((error) => {
        console.log(error);
        // An error occurred
        // ...
      });
};
