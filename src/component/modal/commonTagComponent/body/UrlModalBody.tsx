import InputUrl from "./InputUrl";
import HashTag from "./HashTag";
import { Wrapper, Label, SaveUrlBodyWrapper, LabelBodyWrapper, WarnningWrapper } from "./urlModalBody.style";
import { useState } from "react";
import { WarningIcon, WarningText } from "@src/component/userInfo/signUp/signUp.style";
import CustomHashTag from "@src/component/common/customTag/CustomHashTag";
import { UrlModalEnum } from "@src/enum/appEnum";
import urlStore from "@src/store/url/urlStore";
import { observer } from "mobx-react";
import useGetUrlTitle from "@src/queries/urlInfo/useGetUrlTitle";
import LoadingInput from "./LoadingInput";
import UrlTitleInput from "./UrlTitleInput";
import SeeOnly from "@src/component/common/customTag/SeeOnly";

const UrlModalBody = (props: { urlModalType: UrlModalEnum }): JSX.Element => {
  const { urlModalType } = props;
  const isSaveUrl = urlModalType === UrlModalEnum.Save;
  const [nameMaxLength, setNameMaxLength] = useState<boolean>(false);
  const { isLoading, isError } = useGetUrlTitle(isSaveUrl);
  const { title } = urlStore;

  return (
    <SaveUrlBodyWrapper>
      {isSaveUrl && <InputUrl />}
      {title !== undefined && !isLoading && <UrlTitleInput isSaveUrl={isSaveUrl} />}
      {isLoading && !isError && <LoadingInput />}

      <SeeOnly />

      <HashTag />
      <Wrapper>
        <LabelBodyWrapper>
          <Label style={{ marginTop: 0 }}>원하는 해시태그가 없으신가요?</Label>
          {nameMaxLength && (
            <WarnningWrapper>
              <WarningIcon src={"./common/warningIcon.svg"} alt={"Image not found"} />
              <WarningText>최대 16글자까지 가능해요</WarningText>
            </WarnningWrapper>
          )}
        </LabelBodyWrapper>
        <CustomHashTag setNameMaxLength={setNameMaxLength} nameMaxLength={nameMaxLength} />
      </Wrapper>
    </SaveUrlBodyWrapper>
  );
};

export default observer(UrlModalBody);
