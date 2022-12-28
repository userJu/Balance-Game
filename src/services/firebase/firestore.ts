import { topics } from "./../mock/topics";
import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { FIRESTORE_COLLECTIONS } from "../../constants/firestore";
import { Gamer } from "../../entities/gamer";
import { db } from "./initializer";
import { Topic } from "../../entities/topics";
import { Game } from "../../entities/game";

export const setNewUser = async (uid: string, gamer: Gamer) => {
  await setDoc(doc(db, FIRESTORE_COLLECTIONS.users, uid), gamer);
};

export const getUserObject = async (uid: string) => {
  const docRef = doc(db, FIRESTORE_COLLECTIONS.users, uid);
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

export const getAllDocsOnCollections = async (collecionName: string) => {
  const querySnapshot = await getDocs(
    collection(db, collecionName) as CollectionReference<Topic>
  );
  return querySnapshot;
};
