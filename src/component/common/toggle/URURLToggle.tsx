import React, { useCallback, useEffect, useState } from "react";
import { Circle, ToggleBtn } from "./toggle.style";
import ModalStore from "@src/store/common/modalStore";

const URURLToggle: React.FC<{
  width: number;
  height: number;
  onToggle: (toggleState: boolean) => void;
  initialToggle?: boolean;
  isExtensionInstalled?: boolean;
}> = ({ width, height, onToggle, isExtensionInstalled, initialToggle = true }) => {
  const [toggle, setToggle] = useState<boolean>(initialToggle);
  const handleClickToggle = useCallback(() => {
    if (!isExtensionInstalled) {
      ModalStore.setOpenModal({
        isOpen: true,
        text: "크롬 확장프로그램을 설치해보세요",
        closeIcon: true,
        completeBtnText: "설치하기",
        onSuccess: () => {},
      });
      return;
    }

    setToggle((prev) => !prev);
    onToggle(!toggle);
  }, [onToggle, toggle, isExtensionInstalled]);

  return (
    <ToggleBtn
      onClick={handleClickToggle}
      toggle={toggle}
      width={width}
      height={height}
      id="ururlToggle"
      value={String(toggle)}
    >
      <Circle toggle={toggle} height={height} />
    </ToggleBtn>
  );
};

export default URURLToggle;
