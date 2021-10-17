import { atom, useRecoilState } from "recoil";

const selectedSortingState = atom<string>({
  key: 'sorting',
  default: 'createdDate'
});

export function useSelectedSortingState() {
  return useRecoilState(selectedSortingState);
}
