import axios from 'axios';

export interface ChatMessage {
    id: number;
    senderId: number;
    messageType: "SYSTEM_START" | "NORMAL" | "SYSTEM_END" | "FILE";
    senderType: "SYSTEM" | "USER" | "PLANNER";
    message: string;
    dateTime: string;
};

export const fetchChatMessages = async (roomId: number): Promise<ChatMessage[]> => {
  const { data } = await axios.get<ChatMessage[]>(`/chat/rooms/${roomId}/messages`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
  });
  return data;
};


export interface ChatMessageReq {
    roomId: number;
    messageType: "NORMAL" | "FILE";
    message: string;
}

export const sendMessage = async (chatMessageReq: ChatMessageReq) => {
    await axios.post(`/chat/message`, chatMessageReq, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
}

export const sendFile = async (roomId: number, file: any) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('roomId', roomId.toString());
  
    const { data } = await axios.post(`/chat/file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return data;
  };
  
