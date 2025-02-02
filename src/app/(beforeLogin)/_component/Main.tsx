import Link from "next/link";

export default function Main() {
  return (
    <main>
      <h1>Main</h1>
      <Link href="/signup">회원가입</Link>
      <Link href="/login">로그인</Link>
    </main>
  );
}
