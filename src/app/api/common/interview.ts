import { instance } from "@src/app/api";

const interview = async (email: string) => {
  const { data } = await instance.post(`api/user/interview`, { email });
  return data;
};

export default interview;
