import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

function SubItemHeader(props) {
  const { idx, editCell, handleEdit, activeCell, subItemHeader } = props;
  return (
    <div className="flex justify-center h-full border-r align-center border-borderColor">
      {editCell.row === idx + 1.1 && editCell.col === 4 ? (
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
            onClick={() => handleEdit(idx + 1, 4)}
          >
            {subItemHeader}
          </span>
          {activeCell.row === idx + 1.1 && activeCell.col === 4 ? (
            <>
              <div className="absolute top-0 bottom-0 h-full m-auto right-1">
                <HiDotsHorizontal size={18} className="text-iconColor" />
              </div>
              <div className="absolute top-0 bottom-0 h-full border-2 -right-0 border-blue hover:cursor-col-resize"></div>
            </>
          ) : null}
        </>
      )}
    </div>
  );
}

export default SubItemHeader;
