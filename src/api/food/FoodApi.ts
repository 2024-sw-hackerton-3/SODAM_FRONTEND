import axios from "axios";
import customAxios, { REACT_APP_BASE_URL } from "../customAxios";
import { FoodRecipeResponse } from "./FoodRecipeResponse";
import FoodSuggestionFoodResponse from "./FoodSuggestionFoodResponse";
import { FoodRecipeState } from "../../state/state";
import FoodOrderResponse from "./FoodOrderResponse";

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

  static getOrderById(id: number): FoodOrderResponse {
    return {
      id: id,
      title: '피자',
      price: "12000",
      src: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
      brand: '피자헛',
      enTitle: 'Pizza',
      productNumber: '123456',
      company: '피자헛',
      state: 'A등급',
      madeIn: '한국',
    }
  }
}

export default FoodApi;