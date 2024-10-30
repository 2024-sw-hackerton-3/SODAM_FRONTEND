import axios from "axios";
import customAxios, { REACT_APP_BASE_URL } from "../customAxios";
import { UserSignInResponse } from "./UserApiResponse";

class UserApi {
  public static async postSignIn(
    account_id: string,
    password: string
  ): Promise<UserSignInResponse> {
    const response = await axios.post<UserSignInResponse>(
      `${REACT_APP_BASE_URL}/user/signin`,
      {
        "accountId": account_id,
        "password": password,
      }
    )
    return response.data;
  }

  public static async postSignUp(
    account_id: string,
    password: string,
    name: string
  ): Promise<UserSignInResponse> {
    return await axios.post(
      `${REACT_APP_BASE_URL}/user/signup`,
      {
        "accountId": account_id,
        "password": password,
        "name": name,
        "foods": []
      }
    )
  }

  public static async patchAllergy(
    allergies: string[]
  ): Promise<void> {
    return await customAxios.patch(
      `${REACT_APP_BASE_URL}/user/allergy`,
      {
        "allergies": allergies
      }
    )
  }
}

export default UserApi;