import { useSessionQuery } from "@/4-entities/session/queries";
import { ROUTES } from "@/5-shared/consts/routes";
import { UIPageSpinner } from "@/5-shared/ui/ui-page-spinner";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

// Хок компонент для защиты траниц, требующих авторизации
export function protectedPage<P>(Component: (props: P) => ReactElement) {
    return function ProtectedPage(props: PropsWithChildren<P>) {
        const router = useRouter();

        const { isLoading, isError } = useSessionQuery();

        if (isLoading) {
            return <UIPageSpinner />
        };

        if (isError) {
            router.replace(ROUTES.SIGN_IN);
        };

        return <Component {...props} />
    };
}