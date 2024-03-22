import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

const EmptyLine = function EmptyLine(): JSX.Element {
  return <Line />;
};

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${UrUrlColor.gray3};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default EmptyLine;
