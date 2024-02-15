import Image from "next/image";
import * as action from '../actions'
import {auth} from '../auth'
import Profile from '@/src/components/page'
export default async function Home() {
  const session = await auth()
  return (
   <div>
    <form action={action.signIn}>
      <button type="submit">Sign In</button>
    </form>
    <form action={action.signOut}>
      <button type="submit">Sign Out</button>
    </form>
    {
      session ? <div>{`${JSON.stringify(session.user) ||""}`}</div>:<div>signed Out</div>
    }
    <Profile/>
   </div>

  );
}
