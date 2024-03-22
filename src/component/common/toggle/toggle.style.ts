import styled, { css } from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const ToggleBtn = styled.button<{ toggle: boolean; width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? UrUrlColor.gray5 : UrUrlColor.main)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
export const Circle = styled.div<{ toggle: boolean; height: number }>`
  background-color: white;
  width: ${(props) => props.height * 0.85}px;
  height: 85%;
  border-radius: 500px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(${props.height * 0.95}px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
