import { atom } from "recoil";
import { FoodRecipeResponse } from "../api/food/FoodRecipeResponse";

//recoil state 생성
export const FoodRecipeState = atom<FoodRecipeResponse>({
  key: 'content',
  default: {
    danger: false,
    name: '',
    substan_list: [],
    substan: [],
    sauce: [],
    step: [],
    cooking_time: '',
    qnt: '',
  }
});