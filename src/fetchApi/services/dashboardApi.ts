import mainClient from "../clients/mainClient";

export const getDashboardStats = async () => {
  try {
    const response = await mainClient.get("/dashboard");
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "حدث خطأ أثناء تحميل الإحصائيات";
    throw new Error(message);
  }
};

export const getAchievements = async () => {
  try {
    const response = await mainClient.get("/achievements");
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "حدث خطأ أثناء تحميل الإنجازات";
    throw new Error(message);
  }
};

export const getProgress = async () => {
  try {
    const response = await mainClient.get("/progress");
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "حدث خطأ أثناء تحميل تقدم القراءة";
    throw new Error(message);
  }
};