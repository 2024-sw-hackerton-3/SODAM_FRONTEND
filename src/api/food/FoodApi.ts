import axios from "axios";
import customAxios, { REACT_APP_BASE_URL } from "../customAxios";
import { FoodRecipeResponse } from "./FoodRecipeResponse";
import FoodSuggestionFoodResponse from "./FoodSuggestionFoodResponse";

class FoodApi {
  static async getFoodQueryImage(file: Blob): Promise<FoodRecipeResponse> {
    const formData = new FormData();  // formData 생성
    formData.append('file', file, "test.jpeg");  // 이미지 파일 값 할당

    const customAxios = axios.create({
      baseURL: REACT_APP_BASE_URL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })


    return (await customAxios.post<FoodRecipeResponse>('/food/query/image', formData)).data
  }

  static async getFoodQueryFile(file: File): Promise<FoodRecipeResponse> {
    const formData = new FormData();  // formData 생성
    formData.append('file', file, file.name);  // 이미지 파일 값 할당

    const customAxios = axios.create({
      baseURL: REACT_APP_BASE_URL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })

    return (await customAxios.post<FoodRecipeResponse>('/food/query/image', formData)).data
  }

  static async getFoodQueryText(text: string): Promise<FoodSuggestionFoodResponse[]> {
    
    return (await customAxios.get<FoodSuggestionFoodResponse[]>(`/food/query/list?name=${text}`)).data
  }

  static async getFoodDetail(name: string, cooking_time: string, qnt: string): Promise<FoodRecipeResponse> {
    
    return (await customAxios.get<FoodRecipeResponse>(`/food/query/recipe?name=${name}&cooking_time=${cooking_time}&qnt=${qnt}`)).data
  }
}

export default FoodApi;