import { blockListControllerAddBlockListItem, blockListControllerGetList, blockListControllerRemoveBlockListItem } from "@/5-shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const blockListKey = ['block-list'] as unknown[];

export function useBlockListQuery({
    q
}: {
    q?: string
}) {
    return useQuery({
        queryKey: blockListKey.concat([{ q }]),
        queryFn: () => blockListControllerGetList({q}),
    });
};

export function useAddBlockItemMudation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: blockListControllerAddBlockListItem,
        async onSettled() {
            await queryClient.invalidateQueries({queryKey: blockListKey});
        },
    });
};

export function useRemoveBlockItemMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: blockListControllerRemoveBlockListItem,
        async onSettled() {
            await queryClient.invalidateQueries({queryKey: blockListKey});
        }
    });
};