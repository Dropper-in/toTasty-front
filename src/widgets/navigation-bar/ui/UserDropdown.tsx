'use client';

import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@/shared';
import { useUserStore } from '@/entities/user';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UserDropdown() {
  // TODO : 마이페이지 url 수정
  const { logOut } = useUserStore();
  const router = useRouter();
  const logout = () => {
    logOut();
    router.push('/');
  };
  return (
    <DropdownMenuContent className="w-30">
      <DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <Link href="/my-page">마이페이지</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>로그아웃</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
}
