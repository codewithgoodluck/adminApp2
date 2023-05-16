import {
  atom,
  useRecoilState,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

const allusersAtom = atom({
  key: "allusers",
  default: [],
});
export { allusersAtom };

export const SetallUsersAtom = () => useSetRecoilState(allusersAtom);
export const GetallUsersAtom = () => useRecoilState(allusersAtom);
export const ResetallUsersAtom = () => useResetRecoilState(allusersAtom);
