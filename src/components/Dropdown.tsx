import React, { useState, useEffect } from "react";
import CaretDown from "@/components/icons/CaretDown";
import OutsideClickHandler from "react-outside-click-handler";
import { ItemType } from "@/type";
interface DropdownProps {
  list?: ItemType[];
  placeHolder?: string;
  getSelectedItem?: (item: ItemType) => void;
  selected?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  list,
  placeHolder,
  getSelectedItem,
  selected,
}) => {
  const [internalSelected, setInternalSelected] = useState<ItemType | null>(
    null
  );
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (selected) {
      const selectedItem = list?.find(
        (item: ItemType) => item.content === selected
      );
      selectedItem && setInternalSelected(selectedItem);
    }
  }, [list, setInternalSelected, selected]);

  const onHandleToggle = () => {
    setToggle(!toggle);
  };

  const onHandleClickItem = (item: ItemType) => {
    setInternalSelected(item);
    setToggle(false);
    getSelectedItem && getSelectedItem(item);
  };

  return (
    <div className="relative">
      <div className="relative" onClick={onHandleToggle}>
        <input
          defaultValue={internalSelected ? internalSelected.content : ""}
          value={internalSelected ? internalSelected.content : ""}
          placeholder={placeHolder}
          type="text"
          className="w-full pl-[16px] pr-[16px] outline-none rounded-[4px] h-[45px] border"
        />
        <div className="absolute right-[8px] top-[12px]">
          <CaretDown />
        </div>
      </div>
      {toggle && (
        <OutsideClickHandler onOutsideClick={() => setToggle(false)}>
          {list && (
            <ul className="absolute bg-white border w-full rounded-[2px] top-[48px] max-h-[300px] overflow-auto z-20">
              {list.map((item: ItemType) => (
                <li key={item.id}>
                  <div
                    onClick={() => onHandleClickItem(item)}
                    className="border-b pl-[16px] pt-[8px] pb-[8px] hover:bg-gray-100"
                  >
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Dropdown;
