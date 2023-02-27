import React, { useState } from "react";
import { BsSquare } from "react-icons/bs";

import Item from "./Item";
import SubItem from "./SubItem";
import SubItemHeader from "./SubItemHeader";

function GridRow(props) {
  const [showSubItems, setShowSubItems] = useState({ row: 0 });
  const {
    idx,
    itemsLength,
    item,
    activeCell,
    editCell,
    handleHover,
    handleEdit,
    colsWidth,
  } = props;
  const handleShowSubItems = (row) => {
    if (showSubItems.row === row) {
      setShowSubItems({ row: -1 });
    } else {
      setShowSubItems({ row });
    }
  };

  return (
    <div>
      <Item
        idx={idx}
        itemsLength={itemsLength}
        item={item}
        showSubItems={showSubItems}
        handleShowSubItems={handleShowSubItems}
        activeCell={activeCell}
        colsWidth={colsWidth}
        editCell={editCell}
        handleHover={handleHover}
        handleEdit={handleEdit}
      />
      {item.subItems.length > 0 && showSubItems.row === idx + 1 && (
        <>
          <div
            className={
              `grid grid-cols-[30px_${colsWidth[0]}px_${colsWidth[1]}px_${colsWidth[2]}px_${colsWidth[3]}px_${colsWidth[4]}px_1fr] items-center ml-6 border border-borderColor border-b-0` +
              (activeCell.row === idx + 1 ? " bg-hoverRowColor" : "") +
              (idx === 0 ? " rounded-t" : "")
            }
            onMouseEnter={() => handleHover(idx + 1.1, 0)}
            onMouseLeave={() => handleHover(-1, 0)}
          >
            <div
              className="h-full p-1 py-1.5 border-r border-borderColor"
              onMouseEnter={() => handleHover(idx + 1.1, 1)}
              onMouseLeave={() => handleHover(idx + 1.1, 0)}
            >
              {activeCell.row === idx + 1.1 && activeCell.col === 1 ? (
                <div className="flex items-center w-full">
                  <BsSquare size={17} stroke="1px" color="#000" />
                </div>
              ) : (
                <div className="flex items-center w-full">
                  <BsSquare size={17} stroke="1px" color="#dcdfec" />
                </div>
              )}
            </div>
            {Object.keys(item.subItems[0]).map((key, idx) => {
              return (
                <SubItemHeader
                  key={idx}
                  idx={idx}
                  subItemHeader={key}
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
                onClick={() => handleEdit(idx + 1, 6)}
              >
                +
              </span>
            </div>
          </div>
          {item.subItems.map((subItem, idx) => (
            <SubItem
              idx={idx}
              subItem={subItem}
              subItemsLength={item.subItems.length}
              activeCell={activeCell}
              editCell={editCell}
              handleHover={handleHover}
              handleEdit={handleEdit}
              colsWidth={colsWidth}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default GridRow;
