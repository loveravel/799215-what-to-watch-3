import NameSpace from "../name-space.js";

export const getNetworkFailed = (state) => {
  return state[NameSpace.APP].networkFailed;
};
