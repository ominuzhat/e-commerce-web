import MainLayout from "@/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BreadCrumb from "@/common/BreadCrumb";
import EngPrivatePolicy from "./EngPrivacyPolicy";
import BangPrivacyPolicy from "./BangPrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <BreadCrumb />
      <div className="max-w-screen-xl mx-auto my-10 px-2">
        <Tabs defaultValue="english" className=" w-full">
          <div className="flex justify-end">
            <TabsList className="grid grid-cols-2 w-[200px]">
              <TabsTrigger value="english">English</TabsTrigger>
              <TabsTrigger value="password">Bangla</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="english">
            <EngPrivatePolicy />
          </TabsContent>
          <TabsContent value="password">
            <BangPrivacyPolicy />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
