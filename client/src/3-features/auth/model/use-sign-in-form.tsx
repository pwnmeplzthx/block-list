import { authControllerSingIn } from "@/5-shared/api/generated";
import { ROUTES } from "@/5-shared/consts/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type registerForm = {
    email: string;
    password: string;
}

export function useSignInForm() {
    const router = useRouter();
    const {register, handleSubmit} = useForm<registerForm>();

    const signInMutation = useMutation({
        mutationFn: authControllerSingIn,
        onSuccess(){
            router.push(ROUTES.HOME)
        }
    })

    const errorMessage = signInMutation.error ? 'Sign in failed' : undefined;

    return {
        register,
        handleSubmit: handleSubmit(data => signInMutation.mutate(data)),
        isPending: signInMutation.isPending,
        errorMessage,
    }
}