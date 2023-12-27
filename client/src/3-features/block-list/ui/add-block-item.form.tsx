import { UISelectField } from "@/5-shared/ui/ui-select-field";
import { useBlockItemForm } from "../model/use-block-item-form";
import { UITextField } from "@/5-shared/ui/ui-text-field";
import { UIButton } from "@/5-shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/5-shared/api/generated";

const typeOptions = [
    {label: 'WebSite', value: AddBlockItemDtoType.Website},
    {label: 'Keyword', value: AddBlockItemDtoType.KeyWord},
]

export function AddBlockItemForm() {
    const {handleSubmit, isLoading, register, type} = useBlockItemForm();
    console.log('type', type)
    console.log('type', type)
    console.log('type', type)
    const typeHandler = type === 'KeyWord' ? 'Enter Key word...' : 'Enter Website'

    return (
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <UISelectField className="grow min-w-[200px]" selectProps={{ ...register('type') }} options={typeOptions} />
            <UITextField 
                className="grow"
                inputProps={{
                    ...register("data"),
                    placeholder: typeHandler,
                }}
            />
            <UIButton disabled={isLoading}>Add block item</UIButton>
        </form>
    )
}