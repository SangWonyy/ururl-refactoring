import {
  CheckIcon,
  GrayBackground,
  ModalThumbnail,
  ModalThumbnailWrapper,
} from "../../userInfo/signUp/signUp.style";
import { Dispatch, SetStateAction } from "react";
import { ThumbnailList } from "@src/enum/appEnum";

const ThumbnailModalBody = function ModalBody(props: {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}): JSX.Element {
  const { selectedIndex, setSelectedIndex } = props;
  return (
    <ModalThumbnailWrapper>
      {ThumbnailList.map((thumbnail, index) => {
        return (
          <div style={{ position: "relative" }} key={thumbnail.id}>
            <ModalThumbnail
              src={thumbnail.img}
              onClick={() => {
                setSelectedIndex(index);
              }}
            />

            {index === selectedIndex && (
              <>
                <GrayBackground size={65} />
                <CheckIcon src={"./common/checkIcon.svg"} />
              </>
            )}
          </div>
        );
      })}
    </ModalThumbnailWrapper>
  );
};

export default ThumbnailModalBody;
