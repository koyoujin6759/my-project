"use server";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function signup(prevState: any, formData: FormData) {
  // console.log(formData);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: "post",
      body: formData,
      credentials: "include",
    });
    console.log(response.status);
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    console.log(await response.json());
    await signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    }); //회원가입 후 로그인까지 진행
  } catch (err) {
    console.error(err);
    return { message: null };
  }
}
