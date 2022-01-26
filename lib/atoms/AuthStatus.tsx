import { useEffect } from 'react';
import { atom, SetterOrUpdater, useRecoilState } from 'recoil';

const peachTokenState = atom<string | null>({
  key: 'peachTokenState',
  default: null,
});

export function usePeachTokenState(): [string | null, SetterOrUpdater<string | null>] {
  const [peachToken, setPeachToken] = useRecoilState(peachTokenState);
  useEffect(() => {
    setPeachToken(localStorage.getItem('accessToken'));
  }, [])
  return [peachToken, setPeachToken];
}

const userTypeState = atom<string | null>({
  key: 'userType',
  default: 'USER'
});

export function useUserTypeState() {
  return useRecoilState(userTypeState);
}