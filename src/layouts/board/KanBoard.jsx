import React, { useState } from "react";
import { BsSquare } from "react-icons/bs";
// icons
import { RiArrowDropDownLine } from "react-icons/ri";
import GridRow from "./GridRow";
import ItemsHeader from "./ItemsHeader";

function KanBoard(props) {
  const { title, items } = props;
  const [activeCell, setActiveCell] = useState({
    row: -1,
    col: 0,
  });
  const [editCell, setEditCell] = useState({
    row: -1,
    col: 0,
  });
  const [colsWidth, setColsWidth] = useState([350, 120, 140, 130, 130]);
  const handleHover = (row, col) => {
    console.log("hover", row, col);
    setActiveCell({ row, col });
  };
  const handleEdit = (row, col) => {
    setEditCell({ row, col });
  };
  // let idx = 0;
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-2 mb-2 w-fit">
        <RiArrowDropDownLine size={27} color="#0073ea" className="opacity-80" />
        <h2 className="text-xl font-medium text-blue opacity-80">{title}</h2>
        <p className="p-1 text-sm opacity-50 text-secondaryTextColor">
          {items.length} Items
        </p>
      </div>
      {items.length > 0 && (
        <>
          <div
            className={
              `grid grid-cols-[30px_${colsWidth[0]}px_${colsWidth[1]}px_${colsWidth[2]}px_${colsWidth[3]}px_${colsWidth[4]}px_1fr] items-center border border-borderColor border-b-0 rounded-t` +
              (activeCell.row === 0 ? " bg-hoverRowColor" : "")
            }
            onMouseEnter={() => handleHover(0, 0)}
            onMouseLeave={() => handleHover(-1, 0)}
          >
            <div
              className="h-full p-1 py-1.5 border-r border-borderColor"
              onMouseEnter={() => handleHover(0, 1)}
              onMouseLeave={() => handleHover(0, 0)}
            >
              {activeCell.row === 0 && activeCell.col === 1 ? (
                <div className="flex items-center w-full">
                  <BsSquare size={17} stroke="1px" color="#000" />
                </div>
              ) : (
                <div className="flex items-center w-full">
                  <BsSquare size={17} stroke="1px" color="#dcdfec" />
                </div>
              )}
            </div>
            {Object.keys(items[0])
              .filter((itemHeader) => itemHeader !== "subItems")
              .map((key, idx) => {
                return (
                  <ItemsHeader
                    key={idx}
                    idx={idx + 1}
                    itemHeader={key}
                    colsWidth={colsWidth}
                    activeCell={activeCell}
                    editCell={editCell}
                    handleHover={handleHover}
                    handleEdit={handleEdit}
                  />
                );
              })}
            <div className="relative pl-4">
              <span
                className="px-1 m-auto text-sm rounded align-center hover:border hover:border-borderColor"
                onClick={() => handleEdit(1, 6)}
              >
                +
              </span>
            </div>
          </div>
          {items.map((item, idx) => (
            <GridRow
              item={item}
              idx={idx}
              colsWidth={colsWidth}
              itemsLength={items.length}
              activeCell={activeCell}
              editCell={editCell}
              handleHover={handleHover}
              handleEdit={handleEdit}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default KanBoard;
