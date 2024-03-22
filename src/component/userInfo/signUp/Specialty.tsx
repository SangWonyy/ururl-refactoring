import {
  InfoWrapper,
  ReadyTagWrapper,
  UrUrlInput,
  SignUpTag,
  SignUpTagWrapper,
  SubTitleText,
  SubTitleTextWrapper,
  TagIcon,
  WarningIcon,
  WarningText,
  SubInfoWrapper,
  WarningWrapper,
} from "./signUp.style";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { observer } from "mobx-react";
import { UserInfoType } from "@src/type/user/userType";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

const tagList = [
  { id: 1, name: "PM" },
  { id: 2, name: "PO" },
  { id: 3, name: "기획" },
  { id: 4, name: "기타" },
];

const Specialty = function Specialty(props: { checkValidation: boolean }): JSX.Element {
  const { profileUserInfo, setProfileUserInfo } = ProfileUserInfoStore;
  const inputRef = useRef<HTMLInputElement>(null);
  const { checkValidation } = props;
  const etcTagIndex = 3;
  const majorTag = useMemo<number>(() => {
    return getMajorTagIndex(profileUserInfo);
  }, [profileUserInfo]);
  const [selectedIndex, setSelectedIndex] = useState<number>(majorTag);

  const clickTagCallback = useCallback(
    (isEtc: boolean, tagName: string, index: number) => {
      setSpeciality(isEtc, inputRef, tagName, profileUserInfo, setSelectedIndex, index);
    },
    [profileUserInfo],
  );

  useEffect(() => {
    setSelectedIndex(majorTag);
  }, [majorTag]);

  useEffect(() => {
    if (!inputRef.current || majorTag !== etcTagIndex) return;
    inputRef.current.disabled = false;
    inputRef.current.value = profileUserInfo.major;
  }, [profileUserInfo.nickName]);

  return (
    <InfoWrapper>
      <SubTitleTextWrapper>
        <SubTitleText id={"major"}>전문 분야</SubTitleText>
        <SubInfoWrapper>
          {checkValidation && profileUserInfo.major === "notMajorURURL" ? (
            <WarningWrapper>
              <WarningIcon src={"./common/warningIcon.svg"} alt={"Image not found"} />
              <WarningText>지금 무슨 일을 하고 계신가요?</WarningText>
            </WarningWrapper>
          ) : (
            <ReadyTagWrapper>
              <TagIcon src={"./common/personIcon.svg"} alt={"Image not found"} />
              지금 무슨 일을 하고 계신가요?
            </ReadyTagWrapper>
          )}
        </SubInfoWrapper>
      </SubTitleTextWrapper>
      <SignUpTagWrapper>
        {tagList.map((tag, index) => {
          const isSelected = selectedIndex === index;
          const isEtc = tag.id === 4;

          return (
            <SignUpTag
              key={tag.id}
              onClick={() => {
                if (!inputRef.current) return;

                clickTagCallback(isEtc, tag.name, index);
              }}
              isSelected={isSelected}
            >
              {tag.name}
            </SignUpTag>
          );
        })}
        <UrUrlInput
          width={50}
          ref={inputRef}
          disabled={true}
          onChange={(event) => {
            setProfileUserInfo({ ...profileUserInfo, major: event.target.value });
          }}
        />
      </SignUpTagWrapper>
    </InfoWrapper>
  );
};

const setSpeciality = (
  isEtc: boolean,
  inputRef: RefObject<HTMLInputElement>,
  tagName: string,
  userInfo: UserInfoType,
  setSelectedIndex: Dispatch<SetStateAction<number>>,
  index: number,
) => {
  const current = inputRef.current!;
  let majorName = "";

  if (isEtc) {
    current.disabled = false;
    current.focus();
  } else {
    current.value = "";
    majorName = tagName;
  }
  ProfileUserInfoStore.setProfileUserInfo({ ...userInfo, major: majorName });
  setSelectedIndex(index);
};

const getMajorTagIndex = (userInfo: UserInfoType): number => {
  const findTag = tagList.findIndex((tag) => tag.name === userInfo.major);
  const etcTagIndex = 3;
  const unSelected = 5;
  return findTag > -1 ? findTag : userInfo.major === "notMajorURURL" ? unSelected : etcTagIndex;
};

export default observer(Specialty);
