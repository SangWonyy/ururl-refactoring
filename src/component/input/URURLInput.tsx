"use client";

import { input, inputMessage } from "@src/component/input/input.css";
import { ChangeEvent } from "react";

type TMessage = {
  type: "error" | "success";
  message: string;
};

type TInput = {
  placeHolder: string;
  messageProps?: TMessage;
  disabled?: boolean;
  changeText?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const URURLInput = ({
  placeHolder,
  messageProps,
  changeText,
  disabled = false,
}: TInput) => {
  return (
    <div>
      <input
        className={input}
        placeholder={placeHolder}
        onChange={changeText}
        disabled={disabled}
      />
      {messageProps && (
        <div className={inputMessage({ color: messageProps.type })}>
          {messageProps.message}
        </div>
      )}
    </div>
  );
};

export default URURLInput;
