
import { SignInForm } from "@/3-features/auth";
import { UIFormPageLayout } from "@/5-shared/ui/layouts/ui-form-page-layout";
import { UIHeader } from "@/5-shared/ui/ui-header";

export function SignInPage() {
    return (
        <UIFormPageLayout
            title="Sign In"
            header={<UIHeader />}
            form={<SignInForm />}
        />
    );
}