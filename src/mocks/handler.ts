import { urlHandler } from "@src/mocks/url";
import { userHandler } from "@src/mocks/user";
import { tagHandler } from "@src/mocks/tag";

export const handlers = [...urlHandler, ...userHandler, ...tagHandler];
