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
export interface AuthType {
  displayName?: string;
  email: string;
  password: string;
}

export const signup = async ({ email, password, displayName }: AuthType) => {
  setPersistence(auth, browserSessionPersistence);

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      console.log(displayName);
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

export const updateUserProfile = async (displayName: string) => {
  auth.currentUser &&
    (await updateProfile(auth.currentUser, {
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
      }));
};

export const checkAuthState = (getUserInfo: (user: User) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
      getUserInfo(user);
      // ...
    } else {
      console.log("유저 없음");
      // User is signed out
      // ...
    }
  });
};

export const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("succesfully logout");
    })
    .catch((error) => {
      console.log("로그아웃에 실패했습니다");
    });
};

export const checkCurrentUser = async () => {
  return await auth.currentUser;
};
