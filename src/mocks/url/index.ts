import { http, HttpResponse } from "msw";
import { allUrlResponse } from "@src/mocks/url/response";

export const urlHandler = [
  http.get("/api/urlpost/all-urls", ({ request }) => {
    const url = new URL(request.url);
    const selectedTagId = url.searchParams.get("selectedTagId");
    if (selectedTagId === null) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(allUrlResponse);
  }),

  http.get("/api/urlpost/count", () => {
    return HttpResponse.json(3);
  }),

  http.post<{ page: string }>("/api/urlpost/page/:page/report", (request) => {
    const { page } = request.params;
    if (!page) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(null);
  }),
];
