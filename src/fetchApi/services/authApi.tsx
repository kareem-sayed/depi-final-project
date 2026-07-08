import mainClient from "../clients/mainClient";

export const register = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await mainClient.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    const message = axiosError.response?.data?.message || "حدث خطأ أثناء إنشاء الحساب";
    throw new Error(message, { cause: error });
  }
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await mainClient.post("/auth/login", credentials);

    const token = response.data?.data?.token;
    if (token) {
      localStorage.setItem("auth_token", token);
      window.dispatchEvent(new Event("authChange"));
    }

    return response.data.data;
  } catch (error) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    const message = axiosError.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول";
    throw new Error(message, { cause: error });
  }
};