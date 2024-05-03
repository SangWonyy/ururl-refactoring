import {
  MyContentType,
  TAllUrlTabData,
  urlTag,
} from "@src/type/mainBody/mainBodyType";

export const allUrlResponse: TAllUrlTabData = {
  unreadSubscriptions: [],
  recentUrls: [
    {
      id: 1,
      subscribed: true,
      title: "URL TITLE",
      thumbnail: "thumnal.jpg",
      siteName: "notion",
      subscriptionCount: 3,
      tags: [
        {
          id: 1,
          name: "tag name",
        },
      ],
      url: "URL",
    },
  ],
  lovedUrls: [
    {
      id: 2,
      subscribed: true,
      title: "LOVE URL TITLE",
      thumbnail: "love thumnal.jpg",
      siteName: "love notion",
      subscriptionCount: 5,
      tags: [
        {
          id: 2,
          name: "love tag name",
        },
      ],
      url: "URL",
    },
  ],
  hashtags: [
    {
      id: 3,
      name: "hash tags",
      size: 3,
    },
  ],
  allUrls: {
    page: 1,
    hasNext: false,
    urls: [
      {
        id: 3,
        subscribed: true,
        title: "ALL URL TITLE",
        thumbnail: "all thumnal.jpg",
        siteName: "all notion",
        subscriptionCount: 3,
        tags: [
          {
            id: 3,
            name: "all tag name",
          },
        ],
        url: "ALL URL",
      },
    ],
  },
};

export const myContentResponse: MyContentType = {
  id: 1,
  createOn: "2024-03-02",
  estimatedTime: 20,
  hits: 30,
  isRead: false,
  reads: 3,
  isPublic: true,
  thumbnail: "thumbnail.jpg",
  url: "url",
  tags: [{ id: 1, name: "tag" }],
  siteName: "notion",
  title: "url title",
};
