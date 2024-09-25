import { TRegistration } from "@/app/(auth)/registration/page";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/utils/actions/registerUser";
import { toast } from "@/hooks/use-toast";

export const useRegistration = () => {
  return useMutation({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (data: TRegistration) => await registerUser(data),
    onSuccess: (data) => {
      console.log(data, "muu");
      toast({
        title: `Hi, ${data?.data?.firstName}!`,
        description: "Check your mail for validation",
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    },
    onError: (data) => {
      toast({
        title: "Registration Failed",
        description: data?.message || "An unknown error occurred.",
      });
    },
  });
};
