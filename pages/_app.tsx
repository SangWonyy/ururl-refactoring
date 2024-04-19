import type { AppProps } from "next/app";
import React, { lazy, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import "react-responsive-modal/styles.css";

import PageFrame from "@src/component/common/pageFrame/PageFrame";
import { Toaster } from "react-hot-toast";
import { initMSW } from "@src/mocks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

initMSW();

const ReactQueryDevtoolsProduction = lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    // @ts-expect-error
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PageFrame>
        <Component {...pageProps} />
      </PageFrame>
      <ReactQueryDevtools initialIsOpen={true} />
      <Toaster position="bottom-center" reverseOrder={false} />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
}

export default observer(MyApp);
