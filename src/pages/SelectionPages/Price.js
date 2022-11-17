import SlidingContent from "../../components/ContentWrapper/SlidingContent";

const Price = () => {
  const content = {
    id: 2,
    title: "WHERE WOULD YOUR PROPERTY BY?",
    lis: ["NEW CAIRO", "6TH OF OCTOBER", "NEW CAPITAL"],
    nextLink: "projects",
  };
  return <SlidingContent content={content}></SlidingContent>;
};
export default Price;
