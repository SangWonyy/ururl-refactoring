import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const Loadding = function (props: { loadding: boolean; size: number }): JSX.Element {
  const { loadding, size } = props;
  return (
    <>
      {loadding && (
        <LoaddingWrapper>
          <CircularProgress style={{ margin: "auto" }} size={size} />
        </LoaddingWrapper>
      )}
    </>
  );
};

const LoaddingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-bottom: 100px;
`;

export default Loadding;
