async function initMSW() {
  if (typeof window === "undefined") {
    const { server } = await import("@src/mocks/server");
    server.listen();
  } else {
    const { worker } = await import("@src/mocks/browser");
    worker.start();
  }
}

export { initMSW };
