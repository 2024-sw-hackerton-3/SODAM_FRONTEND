
export const saveToken = (token: string) => {
  localStorage.setItem('accessToken', token);
}