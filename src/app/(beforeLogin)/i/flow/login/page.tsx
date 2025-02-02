"use client";

import { signIn } from "next-auth/react";
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await signIn("credentials", {
        username: id,
        password,
        redirect: false,
      });
      router.replace("/home");
    } catch (err) {
      console.error(err);
      setMessage("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={id} onChange={onChangeId} placeholder="아이디" />
        <input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
        {message && <p>{message}</p>}
        <button disabled={!id || !password}>로그인</button>
      </form>
    </div>
  );
}
