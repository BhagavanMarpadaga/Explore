
'use client'

import { useSession } from "next-auth/react"
export default function Profile() {
    const session = useSession()

    if (session.data?.user) {
        return <div id="display-msg-sign-in">Returning user from client component</div>
    } else {
        return <div id="display-msg-sign-out"> User singed out from client component</div>
    }


}