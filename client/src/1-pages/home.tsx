import { Profile } from '@/2-widgets'
import { ToggleBlockingButton } from '@/3-features/toggle-blocking/ui/toggle-blocking-button'
import { UIHeader } from '@/5-shared/ui/ui-header'

export function HomePage () {
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
                <main>
                    Blocklist
                </main>
            </div>
        </div>
    )
}
