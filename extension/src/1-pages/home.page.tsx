import { ToggleBlockingButton } from "@/3-features/toggle-blocking/ui/toggle-blocking-button";
import { useSessionQuery } from "@/4-entities/session"
import { ADMIN_SIGN_IN, ADMIN_URL } from "@/5-shared/consts";
import { createTab } from "@/5-shared/lib/browser";
import { UIButton } from "@/5-shared/ui/ui-button";
import { UILogo } from "@/5-shared/ui/ui-logo";

export function HomePage() {
    const {data:session} = useSessionQuery();
    
    return <div className="p-8 flex flex-col gap-3">
        <UILogo />
        <ToggleBlockingButton />
        <UIButton variant="outlined" onClick={() => createTab(ADMIN_URL)}>Manage extension</UIButton>
    </div>
}