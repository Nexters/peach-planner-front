import { atom, useRecoilState } from 'recoil';

const peachTokenState = atom<string | null>({
  key: 'peachTokenState',
  default: localStorage.getItem('accessToken')
});

export function usePeachTokenState() {
  return useRecoilState(peachTokenState);
}
