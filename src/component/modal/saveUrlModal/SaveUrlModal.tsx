import UrlModalHeader from "../commonTagComponent/header/UrlModalHeader";
import UrlModalBody from "../commonTagComponent/body/UrlModalBody";
import UrlModalFooter from "../commonTagComponent/footer/UrlModalFooter";
import { Modal } from "react-responsive-modal";
import { UrlWrapper } from "@src/component/modal/commonTagComponent/header/urlModal.style";
import { UrlModalEnum } from "@src/enum/appEnum";
import { observer } from "mobx-react";
import { Dispatch, SetStateAction, useEffect } from "react";
import UrlStore from "@src/store/url/urlStore";
import TagListStore from "@src/store/common/TagListStore";

const SaveUrlModal = (props: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  const { isOpen, setIsOpen } = props;
  useEffect(() => {
    return () => {
      UrlStore.setUrl("");
      // UrlStore.setTitle(undefined);
      UrlStore.setIsPublic(true);
      TagListStore.setSelectedTagIdList([]);
    };
  }, [SaveUrlModal]);

  return (
    <Modal
      center={true}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      closeOnOverlayClick={true}
      onOverlayClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
      showCloseIcon={false}
      styles={{
        modalContainer: {
          padding: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        modal: {
          padding: 30,
          minWidth: 600,
          maxWidth: 600,
          minHeight: 663,
          borderRadius: 6,
          outline: "none",
        },
      }}
    >
      <UrlWrapper
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
      >
        <UrlModalHeader setIsOpen={setIsOpen} headerText={"URURL에 저장해둘게요! "} />
        <UrlModalBody urlModalType={UrlModalEnum.Save} />
        <UrlModalFooter urlModalType={UrlModalEnum.Save} setIsOpen={setIsOpen} />
      </UrlWrapper>
    </Modal>
  );
};

export default observer(SaveUrlModal);
