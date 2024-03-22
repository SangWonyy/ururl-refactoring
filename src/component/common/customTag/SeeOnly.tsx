import {
  Checkbox,
  CheckIcon,
  LockIcon,
  SeeOnlyText,
  SeeOnlyWrapper,
} from "@src/component/common/customTag/customHashTag.style";
import SeeOnlyMePopUp from "@src/component/popup/SeeOnlyMePopUp";
import urlStore from "@src/store/url/urlStore";
import { observer } from "mobx-react";

const SeeOnly = (): JSX.Element => {
  const { isPublic } = urlStore;

  return (
    <SeeOnlyWrapper>
      <Checkbox
        isPublic={isPublic}
        onClick={(e) => {
          e.preventDefault();
          e.preventDefault();

          urlStore.setIsPublic(!isPublic);
        }}
      >
        {!isPublic && <CheckIcon src={"./common/checkIcon.svg"} alt={"Image not found"} />}
      </Checkbox>
      <LockIcon src={"./common/lockIcon.svg"} alt={"Image not found"} />
      <SeeOnlyText> 이 URL은 혼자 볼게요</SeeOnlyText>
      <SeeOnlyMePopUp />
    </SeeOnlyWrapper>
  );
};

export default observer(SeeOnly);
