import React from "react";
import { BsSquare } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { IoAddCircleSharp, IoChevronForwardSharp } from "react-icons/io5";
import { IoIosResize } from "react-icons/io";
import { BiMessageSquareAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

function Item(props) {
  const {
    idx,
    itemsLength,
    item,
    activeCell,
    editCell,
    showSubItems,
    handleShowSubItems,
    handleHover,
    handleEdit,
    colsWidth,
  } = props;

  return (
    <div
      className={
        `grid grid-cols-[30px_${colsWidth[0]}px_${colsWidth[1]}px_${colsWidth[2]}px_${colsWidth[3]}px_${colsWidth[4]}px_1fr] items-center border border-borderColor ` +
        (activeCell.row === idx + 1 ? " bg-hoverRowColor" : "") +
        (idx === itemsLength - 1 ||
        (showSubItems.row === idx + 1 && item.subItems.length > 0)
          ? " rounded-b border-b-1 mb-2"
          : " border-b-0")
      }
      onMouseEnter={() => handleHover(idx + 1, 0)}
      onMouseLeave={() => handleHover(-1, 0)}
    >
      <div
        className="h-full p-1 py-1.5 border-r border-borderColor"
        onMouseEnter={() => handleHover(idx + 1, 1)}
        onMouseLeave={() => handleHover(idx + 1, 0)}
      >
        {activeCell.row === idx + 1 && activeCell.col === 1 ? (
          <div className="flex items-center w-full">
            <BsSquare size={17} stroke="1px" color="#000" />
          </div>
        ) : (
          <div className="flex items-center w-full">
            <BsSquare size={17} stroke="1px" color="#dcdfec" />
          </div>
        )}
      </div>
      <div
        className="relative flex h-full border-r cursor-pointer border-borderColor"
        onMouseEnter={() => handleHover(idx + 1, 2)}
        onMouseLeave={() => handleHover(idx + 1, 0)}
      >
        <>
          <div className="flex items-center justify-between w-full h-full p-2 pr-1 border-r border-borderColor">
            <div className="flex items-center gap-2">
              <div
                className={
                  activeCell.row === idx + 1 && activeCell.col === 2
                    ? "p-1 rounded hover:bg-hoverColor"
                    : "invisible p-1 rounded hover:bg-hoverColor"
                }
                onClick={() => handleShowSubItems(idx + 1)}
              >
                <IoChevronForwardSharp size={15} className="text-hoverColor" />
              </div>
              {editCell.row === idx + 1 && editCell.col === 2 ? (
                <input
                  type="text"
                  className="w-full px-1 text-sm border rounded ring-0 outline-0 border-borderColor"
                  value={"Item " + idx}
                  onBlur={() => handleEdit(-1, 0)}
                />
              ) : (
                <span
                  className="px-2 text-sm rounded hover:border hover:border-borderColor"
                  onClick={() => handleEdit(idx + 1, 2)}
                >
                  Item {idx}
                </span>
              )}
            </div>
            <div
              className={
                activeCell.row === idx + 1 && activeCell.col === 2
                  ? "flex items-center gap-2 "
                  : "flex items-center gap-2 invisible"
              }
            >
              <IoIosResize size={15} className="text-hoverColor" />
              <span className="text-sm">Open</span>
            </div>
          </div>
          <div className="p-1 px-4 m-auto">
            <BiMessageSquareAdd
              size={20}
              className="text-hoverColor hover:text-blue"
            />
          </div>
        </>

        {activeCell.row === idx + 1 && activeCell.col === 2 && (
          <>
            <div
              className="absolute top-0 p-1 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer left-1/2 custom-shadow hover:bg-blue"
              style={{ borderRadius: "50%" }}
            >
              <TiArrowUnsorted
                size={11}
                className="text-black opacity-80 hover:text-white"
              />
            </div>
          </>
        )}
      </div>
      <div
        className="relative flex justify-center h-full border-r align-center border-borderColor"
        onMouseEnter={() => handleHover(idx + 1, 3)}
        onMouseLeave={() => handleHover(idx + 1, 0)}
      >
        <span className="relative flex gap-4 m-auto align-center">
          <div
            className={
              activeCell.row === idx + 1 && activeCell.col === 3
                ? "absolute -left-8"
                : "absolute -left-8 invisible"
            }
          >
            <IoAddCircleSharp size={20} color={"#0073ea"} />
          </div>
          <CgProfile size={25} className="opacity-50 text-iconColor" />
        </span>

        {activeCell.row === idx + 1 && activeCell.col === 3 && (
          <>
            <div
              className="absolute top-0 p-1 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer left-1/2 custom-shadow hover:bg-blue"
              style={{ borderRadius: "50%" }}
            >
              <TiArrowUnsorted
                size={11}
                className="text-black opacity-80 hover:text-white"
              />
            </div>
          </>
        )}
      </div>
      <div
        className="flex justify-center h-full border-r align-center border-borderColor"
        onMouseEnter={() => handleHover(idx + 1, 4)}
        onMouseLeave={() => handleHover(0, 0)}
      >
        <>
          <div className="flex items-center justify-center w-full text-sm text-white bg-primary">
            In Progress
          </div>
        </>
        {activeCell.row === idx + 1 && activeCell.col === 4 && (
          <>
            <div
              className="absolute top-0 p-1 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer left-1/2 custom-shadow hover:bg-blue"
              style={{ borderRadius: "50%" }}
            >
              <TiArrowUnsorted
                size={11}
                className="text-black opacity-80 hover:text-white"
              />
            </div>
          </>
        )}
      </div>
      <div
        className="relative flex justify-center h-full border-r align-center border-borderColor"
        onMouseEnter={() => handleHover(idx + 1, 5)}
        onMouseLeave={() => handleHover(0, 0)}
      >
        <div className="flex items-center justify-center w-full text-sm text-textColor">
          12 Dec
        </div>

        {activeCell.row === idx + 1 && activeCell.col === 5 && (
          <>
            <div
              className="absolute top-0 p-1 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer left-1/2 custom-shadow hover:bg-blue"
              style={{ borderRadius: "50%" }}
            >
              <TiArrowUnsorted
                size={11}
                className="text-black opacity-80 hover:text-white"
              />
            </div>
          </>
        )}
      </div>
      <div
        className="relative flex justify-center h-full border-r align-center border-borderColor"
        onMouseEnter={() => handleHover(idx + 1, 6)}
        onMouseLeave={() => handleHover(idx + 1, 0)}
      >
        <>
          <div className="flex items-center justify-center w-full text-sm text-textColor">
            0
          </div>
        </>

        {activeCell.row === idx + 1 && activeCell.col === 6 && (
          <>
            <div
              className="absolute top-0 p-1 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer left-1/2 custom-shadow hover:bg-blue"
              style={{ borderRadius: "50%" }}
            >
              <TiArrowUnsorted
                size={11}
                className="text-black opacity-80 hover:text-white"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Item;
