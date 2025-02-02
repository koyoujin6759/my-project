"use client";

import Link from "next/link";
import LogoutButton from "./LogoutButton";
export default function NavMenu() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/home">홈</Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}
