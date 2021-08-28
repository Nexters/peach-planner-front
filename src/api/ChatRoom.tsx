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
  const [key, params] = queryKey;
  const { data } = await axios.get<ChatRoom[]>('/chat/rooms', {
      headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjI5NDgxMTg5LCJleHAiOjE2Mjk1Njc1ODl9.SxLi9ez2oFuZYRn_y_mC2iM8KoLnvLBt6jWLpR3FmZalCBKVfgSnAn-xoTUx1SVf',
      }
  });
  return data;
};

export interface ChatRoomParticipant {
    participantId: number;
    participantType: "USER"|"PLANNER";
    name: string;
    profileImage: string; 
}

export const fetchChatRoomParticipant = async (roomId: number) => {
    const { data } = await axios.get<ChatRoomParticipant[]>(`/chat/rooms/${roomId}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjI5NDgxMTg5LCJleHAiOjE2Mjk1Njc1ODl9.SxLi9ez2oFuZYRn_y_mC2iM8KoLnvLBt6jWLpR3FmZalCBKVfgSnAn-xoTUx1SVf',
        }
    });
    return data;
  };