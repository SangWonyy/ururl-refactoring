"use client";

import { PropsWithChildren, useEffect, useState } from "react";

const MSWInit = ({ children }: PropsWithChildren) => {
  const [mswReady, setMswReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      const initMsw = await import("../../mocks/index").then(
        (res) => res.initMSW
      );
      await initMsw();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  return <>{children}</>;
};

export default MSWInit;
