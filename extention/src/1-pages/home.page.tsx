import { useSessionQuery } from "@/4-entities/session"

export function HopmePage() {
    const {data:session} = useSessionQuery();
    console.log('session', session);
    return <div>Home page {session?.email}</div>
}