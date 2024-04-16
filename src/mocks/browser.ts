import { setupWorker } from "msw/browser";
import { handlers } from "@src/mocks/handler";

export const worker = setupWorker(...handlers);
