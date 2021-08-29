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
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    });
    return data.reduce((map: {[key: string]: string}, participant: ChatRoomParticipant) => {
        map[`${participant.participantId}`] = participant.name;
        return map
      }, {}) ?? {};
  };