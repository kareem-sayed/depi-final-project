import Prophet from './prophet.model.js';



export const getAllProphets = async () => {
  return await Prophet.find().sort({ order: 1 });
};


export const getProphetBySlug = async (slug: string) => {
  const prophet = await Prophet.findOne({ slug });
  if (!prophet) {
    throw new Error(`Prophet with slug '${slug}' not found`);
  }

  return prophet;
};
export const prophetService = {
  getAllProphets,
  getProphetBySlug,
};