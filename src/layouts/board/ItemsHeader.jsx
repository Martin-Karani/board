import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

function ItemsHeader(props) {
  const {
    row,
    col,
    editCell,
    handleEdit,
    activeCell,
    itemHeader,
    handleHover,
  } = props;
  return (
    <div
      className="flex justify-center h-full border-r align-center border-borderColor"
      onMouseEnter={() => handleHover(row, col)}
      onMouseLeave={() => handleHover(row, 0)}
    >
      {editCell.row === row && editCell.col === col ? (
        <input
          type="text"
          className="w-full px-1 text-sm border rounded ring-0 outline-0 border-borderColor"
          value={"Status"}
          onBlur={() => handleEdit(-1, 0)}
        />
      ) : (
        <>
          <span
            className="px-1 m-auto text-sm capitalize rounded align-center hover:border hover:border-borderColor"
            onClick={() => handleEdit(1, 4)}
          >
            {itemHeader}
          </span>
          {activeCell.row === row && activeCell.col === col ? (
            <div className="absolute top-0 bottom-0 h-full m-auto right-1">
              <HiDotsHorizontal size={18} className="text-iconColor" />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

export default ItemsHeader;
