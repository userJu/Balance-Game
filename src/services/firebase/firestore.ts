import { doc, getDoc, setDoc } from "firebase/firestore";
import { FIRESTORE_COLLECTIONS } from "../../constants/firestore";
import { Gamer } from "../../entities/gamer";
import { db } from "./initializer";

export const setNewUser = async (uid: string, gamer: Gamer) => {
  console.log(uid, gamer);
  await setDoc(doc(db, FIRESTORE_COLLECTIONS.users, uid), gamer);
};

export const getUserObject = async (uid: string) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};
