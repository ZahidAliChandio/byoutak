import { useCallback, useEffect, useRef } from "react";
import Button from "../../components/UI/Button";
import DateList from "../../components/UI/DateList";

const MeetingForm = () => {
  const dates = [
    { id: 0, day: "MON", date: "14 NOV" },
    { id: 1, day: "TUE", date: " 15 NOV" },
    { id: 3, day: "WED", date: " 16 NOV" },
    { id: 4, day: "THU", date: " 17 NOV" },
    { id: 5, day: "FRI", date: " 18 NOV" },
    { id: 6, day: "SAT", date: " 19 NOV" },
    { id: 7, day: "SUN", date: " 20 NOV" },
    { id: 8, day: "MON", date: " 21 NOV" },
    { id: 9, day: "TUE", date: " 22 NOV" },
    { id: 10, day: "WED", date: " 23 NOV" },
    { id: 11, day: "THU", date: " 24 NOV" },
  ];

  return (
    <div className="flex flex-col gap-4 2xl:gap-6 bg-blue-50 w-[95%] md:w-11/12 lg:w-10/12 p-4 md:p-8 rounded-lg m-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl text-blue-800 font-bold">
        Your Information
      </h2>
      <div className="flex flex-wrap lg:items-end gap-3 md:gap-6 lg:gap-8">
        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm sm:text-base md:text-lg text-blue-800 font-medium"
          >
            Your Name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>
        <div className="flex h-fit w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            @
          </span>
          <input
            type="tel"
            id="phone"
            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
      </div>
      <div>
        <h3 className="text-blue-800 text-sm sm:text-base md:text-lg font-semibold">
          Select date
        </h3>
        <DateList dates={dates} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-blue-800">
          Select location
        </h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <input type="radio" id="zoom" className="h-4 w-4" />
            <label
              htmlFor="zoom"
              className="text-xs sm:text-sm lg:text-base font-semibold text-blue-800"
            >
              Zoom Video
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="zoom" className="h-4 w-4" />
            <label
              htmlFor="zoom"
              className="text-xs sm:text-sm lg:text-base font-semibold text-blue-800"
            >
              New Cairo
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="zoom" className="h-4 w-4" />
            <label
              htmlFor="zoom"
              className="text-xs sm:text-sm lg:text-base font-semibold text-blue-800"
            >
              6th of October
            </label>
          </div>
        </div>
      </div>
      <h2 className="text-sm sm:text-base md:text-lg font-semibold text-blue-800">
        Select time
      </h2>
      <select
        name="time"
        id="time"
        className="p-3 pr-8 border-2 w-fit"
        defaultValue="9:00 AM"
      >
        <option value="11:00">11:00 AM</option>
        <option value="12:00">12:00 AM</option>
        <option value="1:00">1:00 PM</option>
      </select>
      <div className="flex justify-center gap-4 md:gap-8 md:justify-end">
        <Button className="bg-gray-700 text-white">Request this time</Button>
        <Button className="bg-gray-200 border-gray-700 border !px-3 md:!px-10">
          Live chat now
        </Button>
      </div>
    </div>
  );
};

export default MeetingForm;
