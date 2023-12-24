import { SignOutButton } from '@/3-features/auth'
import { useSessionQuery } from '@/4-entities/session/queries'
import { authControllerGetSessionInfo } from '@/5-shared/api/generated'
import { UIButton } from '@/5-shared/ui/ui-button'
import { UIHeader } from '@/5-shared/ui/ui-header'
import { UILink } from '@/5-shared/ui/ui-link'
import { UISelectField } from '@/5-shared/ui/ui-select-field'
import { UISpinner } from '@/5-shared/ui/ui-spinner'
import { UITextField } from '@/5-shared/ui/ui-text-field'
import { useQuery } from '@tanstack/react-query'

export function HomePage () {
    const { data } = useSessionQuery();

    return (
        <main
            className={`min-h-screen`}
        >
            <UIHeader 
                right={
                    <div className='flex gap-4 items-center justify-center'>
                        {data?.email}
                        <SignOutButton />
                    </div>
                }
            />
            <UIButton variant="primary">Primary</UIButton>
            <UIButton variant="secondary">Secondary</UIButton>
            <UIButton variant="outlined">Outlined</UIButton>
            <UIButton disabled variant="primary">Disabled primary</UIButton>
            <UITextField label='Text field' inputProps={{placeholder: 'Enter email...'}} />
            <UITextField error='Error in text field' inputProps={{placeholder: 'Enter email...'}} />
            <UITextField inputProps={{placeholder: 'Enter email...'}} />
            <UISelectField
                options={[{value: 'val1', label: 'lab1'}, {value: 'val2', label: 'lab2'}]}
            />
            <UILink href={'/'}>Hello world</UILink>
            <UISpinner className='text-teal-600 w-20 h-20' />
            {/* <UIPageSpinner /> */}
        </main>
    )
}
