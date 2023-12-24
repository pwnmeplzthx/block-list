import { authControllerSignUp } from "@/5-shared/api/generated";
import { ROUTES } from "@/5-shared/consts/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type registerForm = {
    email: string;
    password: string;
}

export function useSignUpForm() {
    const router = useRouter();
    const {register, handleSubmit} = useForm<registerForm>();

    const signUpMutation = useMutation({
        mutationFn: authControllerSignUp,
        onSuccess(){
            router.push(ROUTES.HOME)
        }
    })

    const errorMessage = signUpMutation.error ? 'Sign up failed' : undefined;

    return {
        register,
        handleSubmit: handleSubmit(data => signUpMutation.mutate(data)),
        isPending: signUpMutation.isPending,
        errorMessage,
    }
}