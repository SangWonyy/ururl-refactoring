import { http, HttpResponse } from "msw";

export const handlers = [
  // 할일 목록
  http.get("/todos", () => {
    return HttpResponse.json([]);
  }),
];
