import { instance } from "../index";

const deleteCustomTag = async (id: number): Promise<boolean> => {
  try {
    const config = {
      params: {
        pk: id,
      },
    };
    const { data } = await instance.delete("/api/hashtags", config);
    return data.success;
  } catch (error) {
    throw new Error(`deleteCustomTag : ${error}`);
  }
};

export { deleteCustomTag };
