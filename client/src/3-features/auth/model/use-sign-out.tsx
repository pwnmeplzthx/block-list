import { useResetSession } from "@/4-entities/session/queries";
import { authControllerSignOut } from "@/5-shared/api/generated";
import { ROUTES } from "@/5-shared/consts/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOut() {
    const resetSession = useResetSession();
    const router = useRouter();
    const signOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        onSuccess() {
            router.push(ROUTES.SIGN_IN);
            // При установке staleTime необходимо его сбрасывать
            resetSession();
        }
    })

    return {
        isPending: signOutMutation.isPending,
        signOut: signOutMutation.mutate
    }
}