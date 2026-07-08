import mainClient from "../clients/mainClient";

export const register = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await mainClient.post("/auth/register", userData);
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "حدث خطأ أثناء إنشاء الحساب";
    throw new Error(message);
  }
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await mainClient.post("/auth/login", credentials);

    // Save the token to localStorage on successful login
    const token = response.data?.data?.token;
    if (token) {
      localStorage.setItem("auth_token", token);
    }

    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول";
    throw new Error(message);
  }
};
