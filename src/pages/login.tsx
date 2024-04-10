import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const { data: sessionData } = useSession();
  const router = useRouter();

  if (sessionData){
    void router.push('/');
  }

  return(
    <div className="flex h-screen items-center justify-center">
      <button className="cursor-pointer rounded w-full sm:max-w-[190px] border border-zinc-300 px-4 py-3 transition-all hover:border-zinc-400 hover:bg-zinc-50" onClick={() => signIn()}>Login</button>
    </div>
  )
}