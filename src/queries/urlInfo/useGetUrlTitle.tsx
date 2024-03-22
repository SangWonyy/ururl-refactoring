import { useQuery } from "react-query";

import { getUrlTitle } from "@pages/api/url/saveUrl";
import urlStore from "@src/store/url/urlStore";
import UrlStore from "@src/store/url/urlStore";

const useGetUrlTitle = (isSaveUrl: boolean) => {
  const { url } = UrlStore;
  const {
    data: urlTitle = null,
    isLoading,
    isError,
  } = useQuery(["getUrlTitle"], () => getUrlTitle(url as string), {
    enabled: Boolean(url && url.length > 0) && isSaveUrl,
    refetchOnWindowFocus: false,
    select: (res) => res.data.response.title,
    onSuccess: (title) => {
      urlStore.setTitle(title ?? "");
      urlStore.setUrl(url);
    },
  });

  return { urlTitle, isLoading, isError };
};

export default useGetUrlTitle;
