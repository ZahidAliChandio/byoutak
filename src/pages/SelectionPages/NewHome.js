import SlidingContent from "../../components/ContentWrapper/SlidingContent";

const NewHome = () => {
  const content = {
    id: 1,
    title: "FIND YOUR NEW HOME",
    subtitle: "Don't know what you are looking for?",
    input: true,
    lis: ["RESIDENTIAL", "COMMERCIAL", "ADMIN"],
    nextLink: "/property",
  };

  return <SlidingContent content={content}></SlidingContent>;
};
export default NewHome;
