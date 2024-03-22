import axios from "axios";
import { ServerStatus } from "@src/enum/appEnum";
import { removeJWTToken } from "@src/store/localStorage/localStorage";
import UserInfoStore from "@src/store/user/UserInfoStore";
import ModalStore from "@src/store/common/modalStore";
import { sentryException } from "@src/service/sentryErrorHandler";
import { NextRouter } from "next/router";

const createInstance = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });
};

export const instance = createInstance();

export const applyTokenInHeader = (jwt: string | null | undefined) => {
  try {
    if (!jwt) return;

    instance.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  } catch (e) {
    throw new Error(`applyTokenInHeader : ${e}`);
  }
};

export const removeTokenInHeader = () => {
  instance.defaults.headers.common["Authorization"] = undefined;
};

export const axoisInterceptor = (router: NextRouter, setOpenLoginModal: (isOpen: boolean) => void) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;
      const { data, status } = response;
      const isReLogin = status === +ServerStatus.Refresh || status === +ServerStatus.ReLogin;
      if (isReLogin) {
        removeTokenInHeader();
        removeJWTToken();
        UserInfoStore.setInitUser();
        setOpenLoginModal(true);
        return;
      }

      sentryException(error, `ururl server error :\n status - ${status} \n message - ${data.detail} `);
      ModalStore.setOpenModal({
        isOpen: true,
        closeIcon: false,
        completeBtnText: "확인",
        text: error.response.data.error.message,
        onSuccess: () => {},
      });

      return Promise.reject(error);
    },
  );
};
