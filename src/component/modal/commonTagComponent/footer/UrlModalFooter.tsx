import { Dispatch, SetStateAction, useCallback, useState } from "react";

import {
  SaveUrlButton,
  BtnWrapper,
  BookmarkIcon,
} from "@src/component/modal/commonTagComponent/header/urlModal.style";
import { CircularProgress } from "@material-ui/core";
import useAddUrlMutation from "@src/queries/contentBox/useAddUrlMutation";
import { UrlModalEnum } from "@src/enum/appEnum";
import urlStore from "@src/store/url/urlStore";
import { observer } from "mobx-react";
import ModalStore from "@src/store/common/modalStore";
import { useModifySubscriptionMutate } from "@src/queries/contentBox/useSubscriptionMutation";
import TagListStore from "@src/store/common/TagListStore";

const UrlModalFooter = function SaveUrlFooter(props: {
  urlModalType: UrlModalEnum;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  urlId?: number;
}): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { urlModalType, setIsOpen, urlId } = props;
  const { mutate: addUrlMutation } = useAddUrlMutation(setIsLoading, setIsOpen);
  const { mutate: editUrlMutation } = useModifySubscriptionMutate(setIsLoading, setIsOpen);

  const isSaveUrl = urlModalType === UrlModalEnum.Save;
  const { title, url, isPublic } = urlStore;

  const { selectedTagIdList } = TagListStore;
  const saveUrl = useCallback(() => {
    try {
      if (!url) {
        ModalStore.setOpenModal({
          isOpen: true,
          text: "URL을 입력해주세요.",
          completeBtnText: "확인",
          closeIcon: false,
          onSuccess: () => {},
        });
        return;
      }

      setIsLoading(true);
      addUrlMutation({ url, isPublic, sourceMedium: "WEB", title, hashtags: selectedTagIdList });
    } catch (e) {
      throw new Error(`saveUrl : ${e}`);
    }
  }, [isPublic, selectedTagIdList, title, url]);

  const editUrl = useCallback(() => {
    try {
      if (!urlId) {
        alert("URL ID가 없습니다");
        return;
      }
      setIsLoading(true);
      editUrlMutation({
        urlId,
        subscriptionInfo: {
          isPublic,
          customTitle: title,
          sourceMedium: "WEB",
          hashtagIds: selectedTagIdList,
        },
      });
    } catch (e) {
      throw new Error(`saveTag: ${e}`);
    }
  }, [isPublic, selectedTagIdList, title]);

  return (
    <SaveUrlButton
      onClick={() => {
        if (isLoading) return;
        isSaveUrl ? saveUrl() : editUrl();
      }}
    >
      <BtnWrapper>
        {isLoading ? <CircularProgress style={{ margin: "auto" }} size={20} color="inherit" /> : "저장하기"}
        <BookmarkIcon src={"./mainBody/bookmark.svg"} alt={"Image not found"} />
      </BtnWrapper>
    </SaveUrlButton>
  );
};

export default observer(UrlModalFooter);
