import styled from "styled-components";

import { Label, TitleInput } from "./urlModalBody.style";
import urlStore from "@src/store/url/urlStore";

const UrlTitleInput = (props: { isSaveUrl: boolean }): JSX.Element => {
  const { isSaveUrl } = props;
  const { title } = urlStore;
  return (
    <>
      {!isSaveUrl && <Label style={{ marginTop: 0 }}>제목을 수정해주세요</Label>}
      <InputWrapper style={{ marginTop: isSaveUrl ? 10 : 0 }}>
        <TitleInput
          placeholder={isSaveUrl ? "제목을 입력해주세요" : "제목을 수정해주세요"}
          value={title}
          onChange={(e) => urlStore.setTitle(e.target.value)}
        />
        <StyledImg
          src="./common/closeGray.svg"
          alt="close"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            urlStore.setTitle("");
          }}
        />
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  position: absolute;
  right: 14px;
  top: 12px;
  cursor: pointer;
`;

export default UrlTitleInput;
