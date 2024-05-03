import { http, HttpResponse } from "msw";
import { userInfoResponse } from "@src/mocks/user/response";

export const userHandler = [
  /**
   * GET
   */
  http.get("/api/user/profile", () => {
    return HttpResponse.json(userInfoResponse);
  }),

  http.get("/api/user/duplication", () => {
    return HttpResponse.json(false);
  }),

  /**
   * POST
   */
  http.post("/api/user/login", () => {
    return HttpResponse.json(true);
  }),

  http.post("/api/user/signup", () => {
    return HttpResponse.json(userInfoResponse);
  }),

  /**
   * PATCH
   */
  http.patch("/api/user/profile", () => {
    return HttpResponse.json(userInfoResponse);
  }),
];
