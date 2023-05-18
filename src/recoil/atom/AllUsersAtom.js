import {
  atom,
  useRecoilState,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

const allusersAtom = atom({
  key: "allusers",
  default:[],
});
export { allusersAtom };


