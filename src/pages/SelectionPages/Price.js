import { Fragment } from "react";
import SlidingContent from "../../components/ContentWrapper/SlidingContent";
import RightAngle from "../../components/UI/RightAngle";

const Price = () => {
  const content = {
    id: 2,
    title: "WHERE WOULD YOUR PROPERTY BY?",
    lis: ["NEW CAIRO", "6TH OF OCTOBER", "NEW CAPITAL"],
    nextLink: "/slider",
  };
  return (
    <Fragment>
      <RightAngle/>
      <SlidingContent content={content}></SlidingContent>
    </Fragment>
  );
};
export default Price;
