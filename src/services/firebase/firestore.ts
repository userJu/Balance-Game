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

export const setNewTopic = async (topicName: string, topic: Topic) => {
  await setDoc(doc(db, FIRESTORE_COLLECTIONS.topics, topicName), topic);
};

export const setNewGame = async (game: Game) => {
  const docRef = await addDoc(
    collection(db, FIRESTORE_COLLECTIONS.games),
    game
  );
  return docRef.id;
};

export const getAllDocsOnCollections = async (collecionName: string) => {
  const querySnapshot = await getDocs(
    collection(db, collecionName) as CollectionReference<Topic>
  );
  return querySnapshot;
};

export const getSpecificGameDocs = async (docsId: string) => {
  const docRef = doc(db, FIRESTORE_COLLECTIONS.games, docsId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return docSnap.data() as Game;
};
