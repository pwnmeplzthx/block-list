import { ADMIN_SIGN_IN } from "@/5-shared/consts";
import { createTab } from "@/5-shared/lib/browser";
import { UIButton } from "@/5-shared/ui/ui-button";
import { UILogo } from "@/5-shared/ui/ui-logo";

export function NotAuthPage() {
    return <div className="p-8 flex flex-col gap-3">
        <UILogo />
        <h2 className="text-2xl">You not authorized!</h2>
        <UIButton onClick={() => createTab(ADMIN_SIGN_IN)}>Sign In</UIButton>
    </div>
}