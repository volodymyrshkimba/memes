import { getMemesData } from "../backend";
import { LOCAL_KEY } from "../constants";

const memesData = getMemesData();

export const getMemesFromLs = () => {
  const storedMemes = localStorage.getItem(LOCAL_KEY);
  return storedMemes ? JSON.parse(storedMemes) : memesData;
};
