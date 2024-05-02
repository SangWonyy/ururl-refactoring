import { instance } from "../index";

type ResponseType = {
  success: boolean;
  response: {
    success: boolean;
    title: string | null;
  };
  error: string | null;
};

export const getUrlTitle = (url: string) =>
  instance.get<ResponseType>("/api/urlpost/url/title", {
    params: {
      url,
    },
  });
