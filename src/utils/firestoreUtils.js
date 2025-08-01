// src/utils/firestoreUtils.js
import { db } from "./firebase";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  deleteDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

const getLikeDocId = (userId, movieId) => `${userId}_${movieId}`;

export const toggleMovieLike = async (userId, movieId, isLiked) => {
  if (!userId || !movieId) {
    console.error("User ID or Movie ID is missing for like toggle.");
    return;
  }

  const likeDocRef = doc(db, "likes", getLikeDocId(userId, movieId));

  try {
    if (isLiked) {
      await deleteDoc(likeDocRef);
      console.log(`Movie ${movieId} unliked by user ${userId}`);
    } else {
      await setDoc(likeDocRef, {
        userId: userId,
        movieId: movieId,
        timestamp: serverTimestamp(),
      });
      console.log(`Movie ${movieId} liked by user ${userId}`);
    }
  } catch (error) {
    console.error("Error toggling movie like:", error);
    throw error;
  }
};

export const checkIfMovieLiked = async (userId, movieId) => {
  if (!userId || !movieId) {
    return false;
  }

  const likeDocRef = doc(db, "likes", getLikeDocId(userId, movieId));
  try {
    const docSnap = await getDoc(likeDocRef);
    return docSnap.exists();
  } catch (error) {
    console.error("Error checking movie like status:", error);
    return false;
  }
};

export const getLikedMovies = async (userId) => {
    if (!userId) return [];
    const likesRef = collection(db, "likes");
    const q = query(likesRef, where("userId", "==", userId));

    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data().movieId);
    } catch (error) {
        console.error("Error fetching liked movies:", error);
        return [];
    }
};