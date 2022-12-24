import { doc, setDoc } from "firebase/firestore";
import { FIRESTORE_COLLECTIONS } from "../../constants/firestore";
import { Gamer } from "../../entities/gamer";
import { db } from "./initializer";

export const setNewUser = async (uid: string, gamer: Gamer) => {
  console.log(uid, gamer);
  await setDoc(doc(db, FIRESTORE_COLLECTIONS.users, uid), gamer);
};
