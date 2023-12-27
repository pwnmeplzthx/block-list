import { useAddBlockItemMudation } from "@/4-entities/block-list";
import { AddBlockItemDtoType } from "@/5-shared/api/generated";
import { useForm } from "react-hook-form";

export function useBlockItemForm() {
    const { handleSubmit, register, watch, reset } = useForm<{
        type: AddBlockItemDtoType;
        data: string;
    }>();

    const addBlockItemMutation = useAddBlockItemMudation();

    const type = watch("type");

    return {
        handleSubmit: handleSubmit((data) => {
            addBlockItemMutation.mutate(data, {
                onSuccess() {
                    reset();
                }
            });
        }),
        isLoading: addBlockItemMutation.isPending,
        register,
        type,
    };
};