
const SliderCard = (props) => {    
    return (
      <div className="bg-white p-[14px] rounded-md accordian-shadow font-gillsans w-3/4 sm:w-4/5 md:w-11/12">
        {/* <img src="" alt="" /> */}
        <div className="w-full h-[188px] rounded-md bg-[#EFEFEF]"></div>
        <p className="text-sm font-bold mt-2">Full arms & Underarms</p>
        <div className="flex justify-between mt-1">
          <p className="font-bold">₹255</p>
          {/* <AddButton className={"ml-4"}> */}
            {false ? (
              <span
                // onClick={() => addCartItemHandler(props.data)}
                className="inline-block cursor-pointer text-center w-full"
              >
                ADD TO CART
              </span>
            ) : (
              <div className="inline-flex justify-between items-center w-full cursor-default">
                <span
                  className="text-md font-bold pl-3 pr-2 cursor-pointer"
                //   onClick={() => removeCartItemHandler(props.data)}
                >
                  -
                </span>
                <span>Amount</span>
                <span
                  className="text-md font-bold pr-3 pl-2 cursor-pointer"
                //   onClick={() => addCartItemHandler(props.data)}
                >
                  +
                </span>
              </div>
            )}
          {/* </AddButton> */}
        </div>
      </div>
    );
  };
    export default SliderCard;
  