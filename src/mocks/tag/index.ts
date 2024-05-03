import { http, HttpResponse } from "msw";
import {
  addCustomTagResponse,
  hashtagResponse,
  recommendTagResponse,
} from "@src/mocks/tag/response";

export const tagHandler = [
  /**
   * GET
   */

  http.get("/api/hashtags", ({ request }) => {
    const url = new URL(request.url);
    const keyword = url.searchParams.get("keyword");
    if (keyword === null) {
      return HttpResponse.json(hashtagResponse);
    }
    return HttpResponse.json(recommendTagResponse);
  }),

  /**
   * POST
   */
  http.post("/api/hashtags", () => {
    return HttpResponse.json(addCustomTagResponse);
  }),

  /**
   * DELETE
   */
  http.delete<{ tagId: string }>("/api/hashtags/:tagId", (request) => {
    const { tagId } = request.params;
    if (!tagId) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(true);
  }),
];
