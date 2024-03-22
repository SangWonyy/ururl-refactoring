export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_GTAG_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  console.log("pageView", url);
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const GtagEvent = ({ action, category, label }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};

export const ClickGtagEvent = ({ category, label }) => {
  window.gtag("event", "click", {
    event_category: category,
    event_label: label,
  });
};
