import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

export interface ChatRoom {
    id: number;
    lastMessage: string;
    lastMessageDateTime: string;
    profileImage: string;
    roomName: string;
}

export const fetchChatRooms = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<ChatRoom[]>('/chat/rooms', {
      headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjI4OTUwNTY0LCJleHAiOjE2MjkwMzY5NjR9.bpO_7JEt7YGGdihEJCHbj5Atmpb3NKGGfPJHSvuWCaVZn_FermxVyDOifVr7WCNM',
      }
  });
  return data;
};