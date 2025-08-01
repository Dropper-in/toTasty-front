'use client';

import { usePatchTestMutation } from '@/features/axios-test';
import { useEffect } from 'react';

export default function PatchTestView(): string | React.JSX.Element {
  const { mutate, data, isPending, isError, error } = usePatchTestMutation(1);

  useEffect(() => {
    mutate();
  }, []);
  // 간단한 테스트이니 zustand 사용하지 않고 useEffect로

  if (isPending) return 'Loading...';

  if (isError) return `An error has occurred: ${error.message}`;

  if (!data) return 'data not received already';

  return (
    <div>
      {' '}
      <h1>{data.userId}</h1>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
}
