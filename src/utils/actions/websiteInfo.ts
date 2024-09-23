import envConfig from "@/lib/config/envConfig";

export const getWebsiteInfo = async () => {
  const response = await fetch(`${envConfig.baseApi}/core/main-website-page`);
  const data = await response.json();
  return data;
};
