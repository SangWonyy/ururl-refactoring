import { useState } from "react";
import styled from "styled-components";

import { Label, SaveUrlInput } from "./urlModalBody.style";
import urlStore from "@src/store/url/urlStore";

// TODO: URL util 추가 후 이동
const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

const InputUrl = () => {
  const [error, setError] = useState(false);

  return (
    <Container>
      <Label style={{ marginTop: 0 }}>URL 정보를 입력해주세요.</Label>
      <SaveUrlInput
        placeholder="URL 주소를 입력해주세요."
        onBlur={(e) => {
          const inputValue = e.target.value;
          if (!inputValue) return;

          const isVaildUrl = inputValue.match(URL_REGEX);
          if (isVaildUrl === null) {
            setError(true);
            urlStore.setTitle("");
            urlStore.setUrl("");
          } else {
            setError(false);
            urlStore.setUrl(inputValue);
          }
        }}
      />
      {error && <div style={{ color: "#ff3333" }}>올바르지 않은 url 입니다.</div>}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 0;
`;

export default InputUrl;
