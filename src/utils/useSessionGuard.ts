import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useSessionGuard = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!sessionData) {
      void router.replace("/login");
    }
  }, [sessionData, router]);
};
