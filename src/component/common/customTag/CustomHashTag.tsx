import {
  CustomHashTagInput,
  CustomHashTagWrapper,
  PlusIcon,
  PlusButton,
  InputWrppaer,
} from "./customHashTag.style";
import { Dispatch, RefObject, SetStateAction, useCallback, useRef, useState } from "react";
import { tagType } from "@src/type/login/loginType";
import { hashTagType } from "@src/type/tag/tagType";
import { observer } from "mobx-react";
import TagListStore from "@src/store/common/TagListStore";
import { UseMutationResult } from "react-query";
import { tagParam } from "@pages/api/tag/addCustomTag";
import { AddCustomTagType } from "@src/type/mainBody/mainBodyType";
import RecommandTagDropDown from "@src/component/common/customTag/RecommandTagDropDown";
import useAddCustomTagMutation from "@src/queries/tag/useAddCustomTagMutation";
import useGetRecommendTagQuery from "@src/queries/tag/useGetRecommendTagQuery";
import ModalStore from "@src/store/common/modalStore";
import { debounce } from "lodash";

const CustomHashTag = function CustomHashTag(props: {
  setNameMaxLength: Dispatch<SetStateAction<boolean>>;
  nameMaxLength: boolean;
}): JSX.Element {
  const { setNameMaxLength, nameMaxLength } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { tagList } = TagListStore;
  const [openClick, setOpenClick] = useState<boolean>(true);
  const [tagKeyWord, setTagKeyWord] = useState<string>("");
  const [activeTagDrop, setActiveTagDrop] = useState<boolean>(false);
  const addTagMutation = useAddCustomTagMutation(tagList);

  const debounceTag = debounce((tagValue: string) => {
    setTagKeyWord(tagValue);
  }, 500);

  const tagInputCallback = useCallback(
    (addTag, nameMaxLength, setNameMaxLength) => {
      debounceTag(addTag);
      inputEvent(addTag, nameMaxLength, setNameMaxLength);
    },
    [tagKeyWord],
  );

  const keyEnterCallback = useCallback(
    (event) => {
      if (event.key !== "Enter" || !inputRef.current) return;
      if (!checkValidation(inputRef, tagList)) return;

      mutationTag(inputRef, addTagMutation, setTagKeyWord);
    },
    [tagList],
  );

  const { data: recommandList } = useGetRecommendTagQuery(tagKeyWord);

  return (
    <>
      <CustomHashTagWrapper
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
      >
        <InputWrppaer>
          <CustomHashTagInput
            onBlur={() => {
              setTimeout(() => {
                setActiveTagDrop(false);
              }, 130);
            }}
            onClick={() => setActiveTagDrop(true)}
            disabled={tagMaxLength(tagList)}
            maxLength={17}
            placeholder={
              tagMaxLength(tagList)
                ? "내가 만든 해시태그는 최대 10개까지 저장할 수 있어요."
                : "해시태그 이름을 입력해주세요."
            }
            ref={inputRef}
            onKeyPress={(event) => {
              keyEnterCallback(event);
            }}
            onChange={(event) => {
              if (!inputRef.current) return;

              const addTag = inputRef.current.value;
              tagInputCallback(addTag, nameMaxLength, setNameMaxLength);
            }}
          />
          {activeTagDrop && (
            <RecommandTagDropDown
              inputRef={inputRef}
              setActiveTagDrop={setActiveTagDrop}
              recommandList={recommandList}
              tagKeyWord={tagKeyWord}
              setTagKeyWord={setTagKeyWord}
            />
          )}
        </InputWrppaer>
        <PlusButton
          openClick={openClick}
          activeBtn={!tagMaxLength(tagList) && !nameMaxLength}
          onClick={async (event) => {
            event.stopPropagation();
            event.preventDefault();

            setOpenClick(false);
            const isFitCondition = checkValidation(inputRef, tagList);
            setOpenClick(true);
            if (!isFitCondition) return;

            mutationTag(inputRef, addTagMutation, setTagKeyWord);
          }}
        >
          <PlusIcon src={"./common/plusIcon.svg"} alt={"Image not found"} />
        </PlusButton>
      </CustomHashTagWrapper>
    </>
  );
};

const checkValidation = (inputRef: RefObject<HTMLInputElement>, tagList: hashTagType[]): boolean => {
  try {
    let isFitCondition = true;
    const addTag = inputRef.current!.value;

    if (tagMaxLength(tagList)) {
      ModalStore.setOpenModal({
        isOpen: true,
        text: "내가 만든 해시태그는 최대 10개까지 저장할 수 있어요.",
        completeBtnText: "확인",
        closeIcon: false,
        onSuccess: () => {},
      });
      isFitCondition = false;
    }
    const tagLength = addTag.length;
    const isMaxLength = tagLength > 16;
    if (isMaxLength) {
      ModalStore.setOpenModal({
        isOpen: true,
        text: "태그는 16글자 이하로 부탁드려요!",
        completeBtnText: "확인",
        closeIcon: false,
        onSuccess: () => {},
      });
      isFitCondition = false;
    }
    if (addTag === "") {
      ModalStore.setOpenModal({
        isOpen: true,
        text: "태그를 입력해주세요.",
        completeBtnText: "확인",
        closeIcon: false,
        onSuccess: () => {},
      });
      isFitCondition = false;
    }

    const duplication = tagList.find((tag) => tag.name === addTag);
    if (duplication) {
      ModalStore.setOpenModal({
        isOpen: true,
        text: "중복된 태그입니다.",
        completeBtnText: "확인",
        closeIcon: false,
        onSuccess: () => {},
      });
      isFitCondition = false;
    }

    return isFitCondition;
  } catch (e) {
    throw new Error(`addTagList : ${e}`);
  }
};

const mutationTag = (
  inputRef: RefObject<HTMLInputElement>,
  addTagMutation: UseMutationResult<AddCustomTagType, Error, tagParam, unknown>,
  setTagKeyWord: Dispatch<SetStateAction<string>>,
) => {
  try {
    const tagValue = inputRef.current!.value;
    const tag: tagType = {
      name: tagValue,
    };

    addTagMutation.mutate(tag);

    setTagKeyWord("");
    inputRef.current!.focus();
    inputRef.current!.value = "";
  } catch (e) {
    throw new Error(`mutationTag : ${e}`);
  }
};

const tagMaxLength = (tagList: hashTagType[]) => {
  try {
    const customTag = tagList.filter((tag) => tag.isCustom);
    if (customTag.length === 10) return true;

    return false;
  } catch (e) {
    throw new Error(`checkLength : ${e}`);
  }
};

const inputEvent = (
  addTag: string,
  nameMaxLength: boolean,
  setNameMaxLength: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    // const tagByte = new Blob([addTag]).size;
    const tagLength = addTag.length;

    const isMaxLength = tagLength > 16;
    setNameMaxLength(isMaxLength);
  } catch (e) {
    throw new Error(`inputEvent : ${e}`);
  }
};

export default observer(CustomHashTag);
