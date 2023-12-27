import { Profile } from '@/2-widgets'
import { AddBlockItemForm, BlockList } from '@/3-features/block-list'
import { ToggleBlockingButton } from '@/3-features/toggle-blocking/ui/toggle-blocking-button'
import { useBlockListQuery } from '@/4-entities/block-list'
import { UIHeader } from '@/5-shared/ui/ui-header'

export function HomePage () {
    const {data} = useBlockListQuery({})
    return (
        <div
            className={`min-h-screen flex flex-col`}
        >
            <UIHeader 
                right={
                    <Profile />
                }
            />
            <div className='grid grid-cols-[200px_1fr]'>
                <aside className='px-5 pt-10'>
                    <ToggleBlockingButton />
                </aside>
                <main className='pt-10 px-5'>
                    <h1 className='text-2xl mb-8'>
                        Block list
                    </h1>
                    <AddBlockItemForm />
                    <BlockList className='mt-3' />
                </main>
            </div>
        </div>
    )
}
