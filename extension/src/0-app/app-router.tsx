import { useSessionQuery } from "@/4-entities/session";
import { UIPageSpinner } from "../5-shared/ui/ui-page-spinner";
import { HomePage, NotAuthPage } from "@/1-pages";

export function AppRouter() {
    const {isLoading, isSuccess} = useSessionQuery();

    if (isLoading) {
        return <UIPageSpinner />
    }

    if (isSuccess) {
        return <HomePage />
    }

    return <NotAuthPage />
}