import envConfig from "@/lib/config/envConfig";

export const getWebsiteInfo = async () => {
  let fetchOptions = {};
  fetchOptions = {
    cache: "no-store",
  };

  const response = await fetch(
    `${envConfig.baseApi}/core/main-website-page`,
    fetchOptions
  );

  // if (!response.ok) {
  //   throw new Error(`Websites HTTP error! status: ${response?.status}`);
  // }

  const data = await response.json();
  return data;
};
