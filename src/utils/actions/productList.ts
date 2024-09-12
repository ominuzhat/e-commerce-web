import envConfig from "@/lib/config/envConfig";

export const getProductList = async () => {
  const response = await fetch(`${envConfig.baseApi}/api`);
  const data = await response.json();
  return data;
};
