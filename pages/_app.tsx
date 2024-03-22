import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { observer } from "mobx-react";

import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import "react-responsive-modal/styles.css";

import PageFrame from "@src/component/common/pageFrame/PageFrame";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  // if (typeof window !== "undefined") {
  //   // test
  //   window.open("https://ururl-official.notion.site/6-21-2e31b3af48a2401680885ca0bebbdc86", "_self");
  // }
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 5, // 5 minute
            retry: 0,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <PageFrame>
          <Component {...pageProps} />
        </PageFrame>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={true} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </QueryClientProvider>
  );
}

export default observer(MyApp);
