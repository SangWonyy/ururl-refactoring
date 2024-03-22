import { CopyRightInfo, CopyRightWrapper } from "./footer.style";

const CopyRight = function CopyRight(): JSX.Element {
  return (
    <CopyRightWrapper>
      <CopyRightInfo>Contact ururl.official@gmail.com</CopyRightInfo>
      <CopyRightInfo>Copyright ⒸURURL. All right reserved</CopyRightInfo>
    </CopyRightWrapper>
  );
};

export default CopyRight;
