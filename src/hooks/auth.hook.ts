import { TRegistration } from "@/app/(auth)/registration/page";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { LoginUser, registerUser } from "@/utils/actions/auth.user";
import { TLogin } from "@/app/(auth)/login/page";

export const useRegistration = () => {
  return useMutation({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (data: TRegistration) => await registerUser(data),
    onSuccess: (data) => {
      console.log(data, "register Mutations");
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
export const useLogin = () => {
  return useMutation({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (data: TLogin) => await LoginUser(data),
    onSuccess: (data) => {
      console.log(data, "LOgin Mutations");
      toast({
        title: `Hi, ${data?.data?.firstName}!`,
        description: "Login Successfully",
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
