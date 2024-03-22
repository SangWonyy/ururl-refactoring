import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";
import Link from "next/link";
const Error404 = function Error404(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Inner>
          <NotFoundImg src={"./common/404Icon.svg"} alt={"Image not found"} />
          <Icon>😥</Icon>
          <CommentBold>페이지를 찾을 수 없습니다.</CommentBold>
          <Comment>
            주소가 잘못 입력되었거나, 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다. <br />
            입력하신 주소를 다시 확인해주세요.😢
          </Comment>
          <Link href={"/"}>
            <BackButton>
              <HomeIcon src={"./common/homeIcon.svg"} alt={"Image not found"} />
              메인으로 가기
            </BackButton>
          </Link>
        </Inner>
      </Wrapper>
    </>
  );
};

const NotFoundImg = styled.img``;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 110px;
`;

const Title404 = styled.div`
  font-size: 100px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Icon = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 40px;
  margin-top: 20px;
  text-align: center;
  font-size: 50px;
`;

const CommentBold = styled.div`
  font-size: 20px;
  margin-bottom: 23px;
`;

const Comment = styled.div`
  text-align: center;
  font-size: 15px;
  margin-bottom: 23px;
`;

const BackButton = styled.div`
  cursor: pointer;
  width: 180px;
  height: 40px;
  background-color: ${UrUrlColor.main};
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;

const HomeIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
`;
export default Error404;
