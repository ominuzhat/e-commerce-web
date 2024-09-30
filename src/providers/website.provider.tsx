"use client";
import { createContext, useContext, useState, useEffect } from "react";
import envConfig from "@/lib/config/envConfig";

const WebsiteInfoContext = createContext(null);

export const WebsiteInfoProvider = ({ children }: any) => {
  const [websiteInfo, setWebsiteInfo] = useState(null);

  useEffect(() => {
    const fetchWebsiteInfo = async () => {
      if (!websiteInfo) {
        const response = await fetch(
          `${envConfig.baseApi}/core/main-website-page`
        );
        const data = await response.json();
        setWebsiteInfo(data.data);
      }
    };
    fetchWebsiteInfo();
  }, [websiteInfo]);

  return (
    <WebsiteInfoContext.Provider value={websiteInfo}>
      {children}
    </WebsiteInfoContext.Provider>
  );
};

export const useWebsiteInfo = () => {
  return useContext(WebsiteInfoContext);
};
