import type { Hobby, HobbyCategory } from "@/types";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
import { app } from "./firebase-setup";

const db = getFirestore(app);

export const getHobbyCategories = async () => {
  const categoryCol = collection(db, "hobbyCategory");
  const categorySnapshot = await getDocs(categoryCol);
  return categorySnapshot.docs.map((e) => e.data()) as HobbyCategory[];
};

const getHobbyCollection = () => collection(db, "hobby");

export const addHobby = async (data: Hobby) => {
  const hobbyCol = getHobbyCollection();
  await addDoc(hobbyCol, data);
};

export const getHobbies = async () => {
  const hobbyCol = getHobbyCollection();
  const hobbySnapshot = await getDocs(hobbyCol);
  return hobbySnapshot.docs.map((e) => e.data()) as Hobby[];
};
