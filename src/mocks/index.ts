import * as process from "process";

async function initMSW() {
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "development") return;
  if (typeof window === "undefined") {
    const { server } = await import("@src/mocks/server");
    server.listen();
  } else {
    const { worker } = await import("@src/mocks/browser");
    worker.start();
  }
}

export { initMSW };
