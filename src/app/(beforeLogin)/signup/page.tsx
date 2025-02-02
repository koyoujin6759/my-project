"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import onSubmit from "@/app/(beforeLogin)/_lib/signup";

export default function Signup() {
  const [state, formAction] = useActionState(onSubmit, { message: null });
  const { pending } = useFormStatus();

  return (
    <div>
      <h1>회원가입</h1>
      <form action={formAction}>
        <div>
          <div>
            <label htmlFor="id">아이디</label>
            <input id="id" name="id" type="text" placeholder="" required />
          </div>
          <div>
            <label htmlFor="name">닉네임</label>
            <input id="name" name="name" type="text" placeholder="" required />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input id="password" name="password" type="password" placeholder="" required />
          </div>
          <div>
            <label htmlFor="image">프로필</label>
            <input id="image" name="image" required type="file" accept="image/*" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pending}>
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}
