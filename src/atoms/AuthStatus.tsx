import { atom, useRecoilState } from 'recoil';

const peachTokenState = atom<string | null>({
  key: 'peachTokenState',
  default: localStorage.getItem('accessToken')
});

export function usePeachTokenState() {
  return useRecoilState(peachTokenState);
}

const userTypeState = atom<string | null>({
  key: 'userType',
  default: 'USER'
});

export function useUserTypeState() {
  return useRecoilState(userTypeState);
}