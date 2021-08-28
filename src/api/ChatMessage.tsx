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
        Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjI5NDgxMTg5LCJleHAiOjE2Mjk1Njc1ODl9.SxLi9ez2oFuZYRn_y_mC2iM8KoLnvLBt6jWLpR3FmZalCBKVfgSnAn-xoTUx1SVf',
      }
  });
  return data;
};


