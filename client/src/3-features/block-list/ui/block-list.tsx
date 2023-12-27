import { UITextField } from "@/5-shared/ui/ui-text-field";
import { useBlockItems } from "../model/use-block-items";
import { UISpinner } from "@/5-shared/ui/ui-spinner";
import { BlockListItem } from "./block-list-item";

export function BlockList({
    className
}: {
    className?: string
}) {
    const {isLoading, items, q, setQ} = useBlockItems();

    const isLoader = isLoading;
    const isEmpryText = !isLoading && items.length === 0;
    const isItems = items.length > 0;

    return (
        <div className={className}>
            <UITextField
                className="mb-2"
                label="Search..."
                inputProps={{
                    value: q,
                    onChange: e => setQ(e.target.value)
                }} 
            />
            <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3">
                {isLoader && <UISpinner className="text-teal-600 w-10 h-10 mx-auto" /> }
                {isEmpryText && <div className="text-xl py-1 text-center">List is empty...</div>}
                {isItems && items.map((item) => (
                    <BlockListItem id={item.id} type={item.type} data={item.data} key={item.id} />
                ))}
            </div>
        </div>
    )
}