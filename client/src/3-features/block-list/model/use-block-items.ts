import { useBlockListQuery } from "@/4-entities/block-list";
import { useDebauncedValue } from "@/5-shared/lib/react-std";
import { useState } from "react";

export function useBlockItems() {
    const [q, setQ] = useState<string>('');

    const blockListQuery = useBlockListQuery({q: useDebauncedValue(q, 400)});

    const items = blockListQuery.data?.items ?? [];

    return {
        items,
        isLoading: blockListQuery.isPending,
        q,
        setQ,
    }
}