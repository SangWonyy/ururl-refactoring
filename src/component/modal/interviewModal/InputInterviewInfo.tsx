import {
  Button,
  ButtonWrapper,
  GuideText,
  InterviewWrapper,
  PresentText,
} from "@src/component/modal/interviewModal/interview.style";
import { InputWrapper, UrUrlInput } from "@src/component/userInfo/signUp/signUp.style";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import useInterviewMutation from "@src/queries/userInfo/useInterviewMutation";

const EMAIL_REGEX = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const InputInterviewInfo = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const { mutate } = useInterviewMutation();

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!inputValue) return;

    const isVaildUrl = EMAIL_REGEX.test(inputValue);
    setActive(isVaildUrl);
  }, []);

  const keyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      const key = event.code;
      const emailValue = inputRef.current?.value;

      if (key !== "Enter" || !emailValue || !active) return;
      mutate(emailValue);
    },
    [active],
  );

  const clickHandler = useCallback(() => {
    const emailValue = inputRef.current?.value;
    if (!active || !emailValue) return;

    mutate(emailValue);
  }, [active]);

  return (
    <InterviewWrapper>
      <GuideText>더 좋은 ururl이 될 수 있게 사용자 인터뷰를 진행 중입니다!</GuideText>
      <GuideText>원활한 인터뷰 진행을 위해 이메일을 입력해 주시겠어요?</GuideText>
      <PresentText>( 인터뷰를 위해 작은 선물도 준비했어요🎁 )</PresentText>
      <InputWrapper>
        <UrUrlInput
          ref={inputRef}
          placeholder="이메일 입력"
          width={444}
          onChange={onChange}
          onKeyDown={keyDown}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button active={active} onClick={clickHandler}>
          확인
        </Button>
      </ButtonWrapper>
    </InterviewWrapper>
  );
};

export default InputInterviewInfo;
