import mainClient from "../clients/mainClient";

export const register = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await mainClient.post("/auth/register", userData);

    const data = response.data.data;

    localStorage.setItem("auth_token", data.token);
    localStorage.setItem("userId", data.user._id);
    localStorage.setItem(`userName_${data.user._id}`, data.user.name);
    window.dispatchEvent(new Event("authChange"));

    return data;
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

    const data = response.data.data;

    localStorage.setItem("auth_token", data.token);
    localStorage.setItem("userId", data.user._id);
    localStorage.setItem(`userName_${data.user._id}`, data.user.name);
    window.dispatchEvent(new Event("authChange"));

    return data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول";
    throw new Error(message);
  }
};
