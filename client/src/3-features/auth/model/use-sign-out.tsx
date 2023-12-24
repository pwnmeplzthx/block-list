import { authControllerSignOut } from "@/5-shared/api/generated";
import { ROUTES } from "@/5-shared/consts/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOut() {
    const router = useRouter();
    const signOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        onSuccess() {
            router.push(ROUTES.SIGN_IN)
        }
    })

    return {
        isPending: signOutMutation.isPending,
        signOut: signOutMutation.mutate
    }
}