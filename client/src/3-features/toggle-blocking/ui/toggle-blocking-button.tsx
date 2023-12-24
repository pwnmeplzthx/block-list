import { UIButton } from "@/5-shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export function ToggleBlockingButton({

}: {

}) {
    const {isBlockingEnabled, isLoading, toggleBlocking, isReady} = useToggleBlocking(); 

    if (!isReady) {
        return null;
    }

    return <UIButton
        variant={!isBlockingEnabled ? "primary" : "secondary"}
        disabled={isLoading}
        onClick={toggleBlocking}
    >
        {isBlockingEnabled ? "Disable blocking" : "Enable blocking"}
    </UIButton>
}