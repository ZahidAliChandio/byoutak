import { Fragment } from "react";
import RightAngle from "../../components/UI/RightAngle";
import SlidingContent from "../../components/ContentWrapper/SlidingContent";

const Property = () => {
  const content = {
    id: 3,
    title: "WHAT IS THE TYPE OF UNIT YOU ARE LOOKING FOR?",
    lis: ["APARTMENT", "STAND ALONE VILLA", "TOWN HOUSE", "TIWN HOUSE"],
    nextLink: "/unit",
  };
  return (
    <Fragment>
      <RightAngle/>
      <SlidingContent content={content}></SlidingContent>
    </Fragment>
  );
};
export default Property;
