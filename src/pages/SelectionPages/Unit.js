import SlidingContent from "../../components/ContentWrapper/SlidingContent";

const Unit = () => {
  const content = {
    id: 4,
    title: "WHAT IS THE PRICE RANGE YOU HAVE IN MIND",
    lis: ["3 Million", "4Million", "5 Million"],
    nextLink:"price"
  };
  return <SlidingContent content={content}></SlidingContent>;
};
export default Unit;
