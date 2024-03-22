import { GtagCategory, OrderType } from "@src/enum/appEnum";
import { observer } from "mobx-react";
import { SortBoxWrapper, TextWrapper, CheckIcon } from "./sortBox.style";
import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useRef } from "react";
import OrderStore from "@src/store/main/body/OrderStore";
import { ClickGtagEvent } from "../../../../lib/gtag";
const sortKindList = [
  { id: 1, title: "최신 저장 순", type: OrderType.LatestSave },
  { id: 2, title: "많이 읽은 순", type: OrderType.MostRead },
];

const SortBox = function SortBox(props: { setIsOpen: Dispatch<SetStateAction<boolean>> }): JSX.Element {
  const { orderType } = OrderStore;
  const { setIsOpen } = props;
  const sortRef = useRef<HTMLDivElement>(null);

  const clickOutsideCallback = useCallback(
    (event) => {
      handleClickOutside(event, sortRef, setIsOpen);
    },
    [sortRef],
  );

  useEffect(() => {
    document.addEventListener("mousedown", (event) => clickOutsideCallback(event));

    return () => {
      document.removeEventListener("mousedown", (event) => clickOutsideCallback(event));
    };
  }, [sortRef]);

  return (
    <SortBoxWrapper ref={sortRef}>
      {sortKindList.map((sort, index) => {
        const { type, id, title } = sort;
        const isSelected = orderType === type;
        return (
          <TextWrapper
            key={id}
            isSelected={isSelected}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              ClickGtagEvent({
                category: GtagCategory.MyUrlTab,
                label: `${title}`,
              });

              OrderStore.setOrderType(type);
            }}
          >
            {isSelected && (
              <CheckIcon viewBox="0 0 32 32">
                <path
                  d="M11.7568 26.3718L3.27148 17.8865L7.04482 14.1132L11.7568 18.8385L24.954 5.62793L28.7273 9.40126L11.7568 26.3718Z"
                  fill="#40403F"
                />
              </CheckIcon>
            )}
            {title}
          </TextWrapper>
        );
      })}
    </SortBoxWrapper>
  );
};

const handleClickOutside = (
  e: MouseEvent,
  sortRef: RefObject<HTMLDivElement>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
): void => {
  if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
    setIsOpen(false);
  }
};

export default observer(SortBox);
