import { accountControllerGetAccount, authControllerGetSessionInfo } from "@/5-shared/api/generated";
import { setBrowserInterval, setIcon } from "@/5-shared/lib/browser";

export function startToggleExtensionIcon() {
    setBrowserInterval('update-block-rules', async () => {
        const isAuth = await authControllerGetSessionInfo().then(() => true, () => false);

        if (!isAuth) {
            setIcon('/hey.png')
            return;
        };

        const isBlockingEnabled = await accountControllerGetAccount().then(r => r.isBlockingEnabled)

        if (!isBlockingEnabled) {
            setIcon('/sleeping.png')
            return;
        };

        setIcon('/shield.png')
        return;
    }, 5 *1000);
}