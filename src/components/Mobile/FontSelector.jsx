import classNames from "classnames";

export const FontSelector = (props) => {
  const { fonts, onSelect, selected } = props;

  return (
    // <ul className="flex flex-wrap   gap-5">
    //   {fonts.map((font) => {
    //     const isSelected = selected ? selected.value === font.value : false;
    //     return (
    //       <button
    //         onClick={() => onSelect?.(font)}
    //         key={font.value}
    //         className={classNames(
    //           "p-2 border border-[#e9e9e9] rounded-md inline-block text-xl flex-1 text-center min-w-[100px] hover:bg-[#5761ff] hover:border-[#5761ff] cursor-pointer hover:text-white ",
    //           isSelected && "bg-pink-600 text-white border-pink-600"
    //         )}
    //       >
    //         {/* {font.name} */}
    //         <img src={font.imageUrl} alt="" />
    //       </button>
    //     );
    //   })}
    // </ul>

    // <------------------------------------------------------------------------------------------------->
    <ul className="grid grid-cols-4 gap-2  p-2">
      {fonts.map((font) => {
        const isSelected = selected ? selected.value === font.value : false;
        return (
          <button
            onClick={() => onSelect?.(font)}
            key={font.value}
            className={classNames(
              "p-2 border border-[#e9e9e9] rounded-md inline-block text-xl flex-1 text-center  hover:bg-[#5761ff] hover:border-[#5761ff] cursor-pointer hover:text-white ",
              isSelected && "bg-pink-600 text-white border-pink-600"
            )}
          >
            {/* {font.name} */}
            <img src={font.imageUrl} alt="" />
          </button>
        );
      })}
    </ul>
  );
};
