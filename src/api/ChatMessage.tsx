import axios from 'axios';

export interface ChatMessage {
    id: number;
    senderId: number;
    messageType: "SYSTEM_START" | "NORMAL" | "SYSTEM_END";
    senderType: "SYSTEM" | "USER" | "PLANNER";
    message: string;
    dateTime: string;
};

export const fetchChatMessages = async (roomId: number) => {
  const { data } = await axios.get<ChatMessage[]>(`/chat/rooms/${roomId}/messages`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjMwMTMwMjE4LCJleHAiOjE2MzAyMTY2MTh9.CJS2lBWFYnGGbH0rGg4aJ7jETht4gcK7uaiDQ8_9sbvbDaaWAuvScYlOYNjly5Do',
      }
  });
  return data;
};


export interface ChatMessageReq {
    roomId: number;
    messageType: "NORMAL";
    message: string;
}

export const sendMessage = async (chatMessageReq: ChatMessageReq) => {
    await axios.post(`/chat/message`, chatMessageReq, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
}
