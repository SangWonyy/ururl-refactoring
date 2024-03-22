import { Popup } from "semantic-ui-react";
import styled from "styled-components";

const SeeOnlyMePopUp = function SeeOnlyMePopUp(): JSX.Element {
  return (
    <Popup
      style={{ textAlign: "center" }}
      content="저장되는 모든 URL은 All URL에서 공유될 예정이에요. 보안이 중요한 URL들은 체크해보세요."
      trigger={<GrayInfoIcon src={"./common/grayInfoIcon.svg"} alt={"Image not found"} />}
      position={"bottom center"}
      wide={true}
    />
  );
};

const GrayInfoIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 3px;
`;

export default SeeOnlyMePopUp;
