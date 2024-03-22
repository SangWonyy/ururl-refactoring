import { NextPage } from "next";
import styled from "styled-components";
import Title from "@src/component/userInfo/common/Title";
import EditProfileTab from "@src/component/userInfo/editProfile/EditProfileTab";
import { UserInfoWrapper, UserInfoInner, TitleWrapper } from "@src/component/userInfo/userInfo.style";
import useGetTagListQuery from "@src/queries/tag/useGetTagListQuery";

const EditMyInfo: NextPage = () => {
  useGetTagListQuery();
  return (
    <EditMyInfoContainerWrapper>
      <UserInfoWrapper>
        <UserInfoInner>
          <TitleWrapper>
            <Title title={"프로필 설정"} color="#333333" />
          </TitleWrapper>
          <EditProfileTab />
        </UserInfoInner>
      </UserInfoWrapper>
    </EditMyInfoContainerWrapper>
  );
};

const EditMyInfoContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default EditMyInfo;
