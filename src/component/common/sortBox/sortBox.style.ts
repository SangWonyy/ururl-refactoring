import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const SortBoxWrapper = styled.div`
  position: absolute;
  top: 32px;
  left: 5px;
  width: 120px;
  height: 100px;
  background-color: white;
  border-radius: 13px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 25px 10px 10px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.04), 0 3px 23px rgba(22, 34, 51, 0.03);
`;

export const TextWrapper = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 30%;
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  margin: auto;

  color: ${(props) => (props.isSelected ? "black" : `${UrUrlColor.gray3}`)};
`;

export const CheckIcon = styled.svg`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
