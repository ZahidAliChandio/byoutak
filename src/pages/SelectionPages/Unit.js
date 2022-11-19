import { Fragment } from "react";
import SlidingContent from "../../components/ContentWrapper/SlidingContent";
import RightAngle from "../../components/UI/RightAngle";
const Unit = () => {
  const content = {
    id: 4,
    title: "WHAT IS THE PRICE RANGE YOU HAVE IN MIND",
    lis: ["3 Million", "4Million", "5 Million"],
    nextLink: "/price",
  };
  return (
    <Fragment>
      <RightAngle /> <SlidingContent content={content}></SlidingContent>
    </Fragment>
  );
};
export default Unit;
