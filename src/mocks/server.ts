import { setupServer } from "msw/node";
import { handlers } from "@src/mocks/handler";

export const server = setupServer(...handlers);
