import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

import { Input } from "./urlModalBody.style";

const LoadingInput = () => {
  return (
    <Container>
      <StyledInput placeholder="제목을 불러오는 중.." style={{ paddingLeft: 36 }} />
      <CircularProgress
        style={{ margin: "auto", color: "#CECECE", position: "absolute", left: "16px", top: "13px" }}
        size={14}
        color="inherit"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-top: 12px;
`;

const StyledInput = styled(Input)`
  width: 100%;

  input::placeholder {
    font-size: 14px;
  }
`;

export default LoadingInput;
