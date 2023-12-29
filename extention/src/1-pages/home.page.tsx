import { useSessionQuery } from "@/4-entities/session"

export function HopmePage() {
    const {data:session} = useSessionQuery();
    return <div>Home page {session?.email}</div>
}