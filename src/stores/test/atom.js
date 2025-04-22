import { atom } from 'recoil';

const testState = atom({
  key: 'testState',
  default: ['A', 'B', 'C', 'D', 'E'],
});

export default testState;
