import mainClient from "../clients/mainClient";

export const getAllProphets = async () => {
  try {
    const response = await mainClient.get("/prophets");
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "حدث خطأ أثناء جلب بيانات الأنبياء";
    throw new Error(message);
  }
};

export const getProphetBySlug = async (slug: string) => {
  try {
    const response = await mainClient.get(`/prophets/${slug}`);
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "حدث خطأ أثناء جلب بيانات النبي";
    throw new Error(message);
  }
};
