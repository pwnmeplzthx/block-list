import { authControllerGetSessionInfo } from "@/5-shared/api/generated";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const sessionKey = ['session'];

export function useSessionQuery() {
    return useQuery({
        queryKey: sessionKey,
        queryFn: authControllerGetSessionInfo,
        retry: false,
        staleTime: 5 * 60 * 100
    });
};

export function useResetSession() {
    const queryClient = useQueryClient();
    return () => queryClient.removeQueries({ queryKey: sessionKey });
};