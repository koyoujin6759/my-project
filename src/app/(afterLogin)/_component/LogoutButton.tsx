"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const onLogout = () => {
    signOut({
      redirect: false,
    }).then(() => {
      router.replace("/");
    });
  };
  return <button onClick={onLogout}>로그아웃</button>;
}
