import { atom } from "recoil";
import { FoodRecipeResponse } from "../api/food/FoodRecipeResponse";

//recoil state 생성
export const FoodRecipeState = atom<FoodRecipeResponse>({
  key: 'content',
  default: {
    danger: false,
    name: '',
    substanList: [],
    substan: [],
    sauce: [],
    step: [],
    cookingTime: '',
    qnt: '',
  }
});