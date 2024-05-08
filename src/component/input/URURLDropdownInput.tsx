"use client";

import { dropdownInput, dropList } from "@src/component/input/input.css";

type TDropItem = {
  id: number;
  value: string;
};

type TDropdown = {
  onClick?: () => void;
  itemList: TDropItem[];
};

const URURLDropdownInput = ({ onClick, itemList }: TDropdown) => {
  return (
    <div className={dropdownInput}>
      <div>test</div>
      <ul className={dropList}>
        {itemList.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default URURLDropdownInput;
