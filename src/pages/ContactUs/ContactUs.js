import Card from "../../components/UI/Card";

const ContactUs = () => {
  return (
    <div className="text-white">
      <div id="background-container" className="relative h-52">
        <div className="m-auto max-w-[1366px] w-[85%]">
          <h2 className="mt-24 text-2xl md:text-5xl leading-[56px] text-white font-bold">
            Contact Us
          </h2>
        </div>
      </div>
      <Card className="">
        <form action="">
          <div>
            <input
              type="text"
              id="first_name"
              className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 before:content['Name'] before:absolute before:-top-2 before:left-2 before:block before:text-white before:border-red-800 before:border-4"
              placeholder="Name"
              required
            />
          </div>
        </form>
      </Card>
    </div>
  );
};
export default ContactUs;
