import { HopmePage } from "@/1-pages";
import { AppProvider } from "./app-provider";

export function App () {

    return (
        <AppProvider>
            <HopmePage />
        </AppProvider>
    )
}
