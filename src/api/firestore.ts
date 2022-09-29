import type { HobbyCategory } from "@/types";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { app } from "./firebase-setup";

const db = getFirestore(app);

export const getHobbyCategories = async () => {
  const categoryCol = collection(db, "hobbyCategory");
  const categorySnapshot = await getDocs(categoryCol);
  return categorySnapshot.docs.map((e) => e.data()) as HobbyCategory[];
};
