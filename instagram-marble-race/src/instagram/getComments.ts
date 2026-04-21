import { instagramClient } from './client.js';
import { InstagramComment } from './types.js';

interface CommentPage {
  data: InstagramComment[];
  paging?: { next?: string };
}

export const getComments = async (mediaId: string): Promise<InstagramComment[]> => {
  const comments: InstagramComment[] = [];
  let nextUrl: string | undefined = `/${mediaId}/comments?fields=id,username,text,timestamp&limit=100`;

  while (nextUrl) {
    const response: { data: CommentPage } = await instagramClient.get(nextUrl);
    comments.push(...response.data.data);
    nextUrl = response.data.paging?.next;
  }

  return comments;
};
