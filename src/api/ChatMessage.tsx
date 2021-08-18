import axios from 'axios';

export interface ChatMessage {
    id: number;
    senderId: number;
    messageType: "SYSTEM_START" | "NORMAL" | "SYSTEM_END";
    senderType: "SYSTEM" | "USER" | "PLANNER";
    message: string;
    dateTime: string;
}

export const fetchChatMessages = async (roomId: number) => {
    console.log(roomId);
  const { data } = await axios.get<[]>(`/chat/rooms/${roomId}/messages`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjI4OTUwNTY0LCJleHAiOjE2MjkwMzY5NjR9.bpO_7JEt7YGGdihEJCHbj5Atmpb3NKGGfPJHSvuWCaVZn_FermxVyDOifVr7WCNM',
      }
  });
  return data;
};