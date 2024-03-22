import { captureException, captureMessage, withScope } from "@sentry/browser";

export const sentryMessage = (message: string, messageTitle: string, position: string) => {
  withScope((scope) => {
    scope.setExtra("messageTitle", messageTitle);
    scope.setExtra("position", position);
    scope.setExtra("message", message);

    scope.setLevel("info");
    captureMessage(message);
  });
};

export const sentryException = (err: any, errorTitle: string) => {
  withScope((scope) => {
    scope.setExtra("errorTitle", errorTitle);
    scope.setExtra("err", err.toString());

    scope.setLevel("error");
    captureException(`${errorTitle} :: ${err}`);
  });
};
