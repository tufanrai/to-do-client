import { jwtDecode } from "jwt-decode";

export const DecodeToken = (token: string) => {
  try {
    const tok: { exp: number } = jwtDecode(token);
    const validTime = Math.floor(tok.exp / 1000);

    if (validTime > Date.now() / 1000) {
      return {
        valid: true,
      };
    }
    return {
      valid: false,
    };
  } catch (error: any) {
    return {
      valid: false,
    };
  }
};
