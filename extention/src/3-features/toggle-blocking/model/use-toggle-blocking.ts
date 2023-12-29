import { useAccountQuery, useUpdateAccountMutation } from "@/4-entities/account"

export function useToggleBlocking() {
    const accountQuery = useAccountQuery();
    const updateAccountMutation = useUpdateAccountMutation();

    const toggleBlocking = () => {

        if (accountQuery.data) {
            updateAccountMutation.mutate({
                isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
            })
        }
    }

    return {
        isLoading: updateAccountMutation.isPending,
        toggleBlocking,
        isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
        isReady: accountQuery.isSuccess,
    };
}