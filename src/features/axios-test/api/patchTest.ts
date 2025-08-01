import { patchApi } from '@/shared/api/axiosApis';
import TestPost from '../model/types';

export async function patchTest(postId: number): Promise<TestPost | null> {
  const post: TestPost = {
    title: '일부만 변경할거야, 바뀐 값이겠지?',
  };

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  return patchApi<TestPost>(
    `/posts/${postId}`,
    post,
    headers,
    'https://jsonplaceholder.typicode.com/',
  );
}
