import urlStore from "@src/store/url/urlStore";
import UrlStore from "@src/store/url/urlStore";
import { getUrlTitle } from "@src/app/api/url/saveUrl";
import { useQuery } from "@tanstack/react-query";

const useGetUrlTitle = (isSaveUrl: boolean) => {
  const { url } = UrlStore;
  const {
    data: urlTitle = null,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getUrlTitle"],
    queryFn: () => getUrlTitle(url as string),
    enabled: Boolean(url && url.length > 0) && isSaveUrl,
    refetchOnWindowFocus: false,
    select: (res) => res.data.response.title,
  });
  urlStore.setTitle(urlTitle ?? "");
  urlStore.setUrl(url);

  return { urlTitle, isLoading, isError };
};

export default useGetUrlTitle;
