import { Dispatch, SetStateAction, useState } from "react";
import {
  AgreeCommentsWrapper,
  AgreeCommentsInner,
  Comments,
  CheckWrapper,
  InfoIcon,
  CheckIcon,
  CheckBoxText,
  CheckBoxWrapper,
  CommentsWrapper,
  CheckBox,
  CommentWrapper,
} from "./withdrawalModal.style";

const AgreeComments = function AgreeComments(props: {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const { isChecked, setIsChecked } = props;
  return (
    <AgreeCommentsWrapper>
      <AgreeCommentsInner>
        <CommentWrapper>
          <InfoIcon src={"./common/infoIcon.svg"} alt={"Image not found"} />

          <div>
            <CommentsWrapper>
              <Comments>
                탈퇴 후에는 저장하신 URL과 코멘트를 수정 혹은 삭제하실 수 없어요. 탈퇴 신청 전에 꼭
                확인해주세요!
              </Comments>
            </CommentsWrapper>
            <CheckBoxWrapper>
              <CheckWrapper
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              >
                <CheckBox isSelected={isChecked}>
                  {isChecked && <CheckIcon src={"./common/checkIcon.svg"} alt={"Image not found"} />}
                </CheckBox>
                <CheckBoxText>확인하였으며, 동의합니다.</CheckBoxText>
              </CheckWrapper>
            </CheckBoxWrapper>
          </div>
        </CommentWrapper>
      </AgreeCommentsInner>
    </AgreeCommentsWrapper>
  );
};

export default AgreeComments;
