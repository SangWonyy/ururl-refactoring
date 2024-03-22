import { makeAutoObservable, observable } from "mobx";
import { bold } from "colorette";

type ModalStatusType = {
  isOpen: boolean;
  text: string;
  closeIcon: boolean;
  isTwoBtn?: boolean;
  cancelBtnText?: string;
  completeBtnText?: string;
  subtext?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
  needInfoIcon?: boolean;
};

class ModalClass {
  openModal = <ModalStatusType>{
    isOpen: false,
    text: "URURL",
    completeBtnText: "완료",
    isTwoBtn: false,
    needInfoIcon: false,
    closeIcon: false,
    onSuccess: () => {},
  };

  openInterviewModal = {
    nickname: "",
    isOpen: false,
  };

  openReportModal = {
    isOpen: false,
    urlId: -1,
  };

  isOpenLoginModal = false;

  totalUrlCnt = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setOpenModal = (modal: ModalStatusType) => {
    this.openModal = modal;
  };

  closeModal = () => {
    this.openModal.isOpen = false;
  };

  setOpenReportModal = (open: { isOpen: boolean; urlId: number }) => {
    this.openReportModal = open;
  };

  setTotalUrlCnt = (totalUrlCnt: number) => {
    this.totalUrlCnt = totalUrlCnt;
  };

  setOpenLoginModal = (isOpen: boolean) => {
    this.isOpenLoginModal = isOpen;
  };

  setOpenInterviewModal = (isOpen: boolean, nickname: string) => {
    this.openInterviewModal = { isOpen, nickname };
  };
}

const ModalStore = new ModalClass();
export default ModalStore;
