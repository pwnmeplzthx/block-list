import { SignOutButton } from "@/3-features/auth";
import { useSessionQuery } from "@/4-entities/session";

export function Profile() {
    const { data:session } = useSessionQuery();
    if (!session) {
        return null;
    }
    
    return (
        <div className='flex gap-4 items-center justify-center'>
            {session?.email}
            <SignOutButton />
        </div>
    )
}