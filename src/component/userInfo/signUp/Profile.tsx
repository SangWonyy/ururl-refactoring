import {
  GrayBackground,
  InfoWrapper,
  ProfileImg,
  SettingIcon,
  SubTitleText,
  ThumbnailWrapper,
} from "./signUp.style";
import { useState } from "react";
import { ThumbnailList } from "@src/enum/appEnum";
import ThumbnailModal from "@src/component/modal/thumbnailModal/ThumbnailModal";
import { observer } from "mobx-react";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

const Profile = function Profile(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { profileUserInfo } = ProfileUserInfoStore;

  return (
    <InfoWrapper>
      <SubTitleText>프로필 사진</SubTitleText>
      <ThumbnailWrapper
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <ProfileImg src={ThumbnailList[profileUserInfo.defaultPhotoIdx].img} alt={"Image not found"} />
        <GrayBackground size={60} />
        <SettingIcon src={"./signUp/settingIcon.svg"} alt={"Image not found"} />
      </ThumbnailWrapper>
      {isOpen && <ThumbnailModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </InfoWrapper>
  );
};

export default observer(Profile);
