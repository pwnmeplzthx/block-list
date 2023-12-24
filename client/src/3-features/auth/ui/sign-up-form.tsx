import { ROUTES } from "@/5-shared/consts/routes";
import { UIButton } from "@/5-shared/ui/ui-button";
import { UILink } from "@/5-shared/ui/ui-link";
import { UITextField } from "@/5-shared/ui/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";

export function SignUpForm() {
    const {
        handleSubmit,
        register,
        isPending,
        errorMessage,
    } = useSignUpForm();

    return (
        <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit}
        >
            <UITextField
                label="Email"
                inputProps={{
                    ...register("email", {required: true}),
                    type: 'email',
                    placeholder: 'Your email...',
                }}
            />
            <UITextField
                label="Password"
                inputProps={{
                    ...register("password", {required: true}),
                    type: 'password',
                    placeholder: 'Your password...',
                }}
            />
            <UIButton disabled={isPending} >Sign Up</UIButton>
            {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
            <UILink className="text-center" href={ROUTES.SIGN_IN}>Sign In</UILink>
        </form>
    );
}