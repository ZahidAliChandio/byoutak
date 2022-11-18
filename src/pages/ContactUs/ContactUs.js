import ContactUsSvg from "../../static/images/contactUsIllustration.svg";
import LocationPointer from "../../static/icons/contactlocation.png";
import Clock from "../../static/icons/clock.png";
import Phone from "../../static/icons/phone.png";
import Card from "../../components/UI/Card";

const ContactUs = () => {
  return (
    <div className="">
      <div id="background-container" className="relative h-52">
        <div className="m-auto max-w-[1366px] w-[85%]">
          <h2 className="mt-24 text-2xl md:text-5xl leading-[56px] text-white font-bold">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="flex gap-12 w-4/5 mx-auto mt-12">
        <Card className="!block !w-full !bg-white !py-10 !px-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl text-[#FF5E00] font-bold">
              We are always eager to hear from you
            </h2>
            <h3 className="text-xl text-[#767676]">
              Need assistance ? Just write us a message
            </h3>
          </div>
          <form action="" className="w-full mt-12">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-8">
                <input
                  type="text"
                  id="first_name"
                  className="relative border-[#015C9A] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 before:content['Name'] before:absolute before:-top-2 before:left-2 before:block before:text-white before:border-red-800 before:border-4"
                  placeholder="Name"
                  required
                />
                <div className="flex">
                  <span className="inline-flex border-[#015C9A] items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    @
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    className="border-[#015C9A] rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
                <select
                  className="block w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border-[#015C9A]"
                  name="time"
                  id="time"
                  defaultValue="9:00 AM"
                >
                  <option value="11:00">Enter Location</option>
                  <option value="12:00">12:00 AM</option>
                  <option value="1:00">1:00 PM</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  className="border border-[#015C9A] h-full w-full p-2 outline-none rounded-lg"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="text-right mt-6">
            <button type="submit" className="py-2 px-8 bg-[#FF5E00] text-white rounded-lg font-bold">Submit</button>
            </div>
          </form>
        </Card>
        <Card className="!block !w-full !bg-white !py-10 !px-8 -translate-y-28">
          <div className="flex justify-center">
            <img src={ContactUsSvg} alt="contactUsIllustration" />
          </div>
          <h1 className="relative text-[#15314E] text-2xl font-bold -top-6 left-10">
            How to reach us
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-left gap-4">
              <img src={LocationPointer} alt="location" />

              <div>
                <h2 className="text-base md:text-xl font-bold text-[#15314E]">
                  Address
                </h2>
                <p className="text-base lg:text-lg xl:text-xl text-[#767676]">
                  47, North 90 Street, New Cairo, Egypt. <br />
                  Tower 2, Al Guezira Plaza, 6 of October, Egypt.
                </p>
              </div>
            </div>
            <div className="flex items-center text-left gap-6">
              {/* <i class="fas fa-phone text-4xl text-[gray]"></i> */}
              <img src={Phone} alt="phone" />
              <div>
                <h2 className="text-base md:text-xl font-bold text-[#15314E]">
                  Contacts
                </h2>
                <p className="text-base lg:text-lg xl:text-xl text-[#767676]">
                  +201065888849
                  <br /> info@nawy.com
                </p>
              </div>
            </div>
            <div className="flex items-center text-left gap-4">
              <img src={Clock} alt="phone" />
              <div>
                <h2 className="text-base md:text-xl font-bold text-[#15314E]">
                  Working Hours
                </h2>
                <p className="text-base lg:text-lg xl:text-xl text-[#767676]">
                  Sunday-Thursday
                  <br /> 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default ContactUs;
