import Button from "../../components/UI/Button";

const MeetingForm = () => {
  return (
    <div className="flex flex-col gap-6 bg-blue-50 w-10/12 m-auto p-8 rounded-lg">
      <h2 className="text-lg sm:text-xl md:text-2xl text-blue-800 font-bold">
        Your Information
      </h2>
      <div className="flex flex-wrap items-end gap-3 sm:gap-8 md:gap-12">
        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
          <label
            for="first_name"
            class="block mb-2 text-sm sm:text-base md:text-lg font-medium text-gray-900"
          >
            Your Name
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>
        <div class="flex h-fit w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
          <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            @
          </span>
          <input
            type="tel"
            id="website-admin"
            class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
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
        <div>salon cards</div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-blue-800">
          Select location
        </h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <input type="radio" id="zoom" className="h-4 w-4" />
            <label htmlFor="zoom" className="text-xs sm:text-sm lg:text-base font-semibold text-blue-800">
              Zoom Video
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="zoom" className="h-4 w-4" />
            <label htmlFor="zoom" className="text-xs sm:text-sm lg:text-base font-semibold text-blue-800">
              New Cairo
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="zoom" className="h-4 w-4" />
            <label htmlFor="zoom" className="text-xs sm:text-sm lg:text-base font-semibold text-blue-800">
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
        className="p-3 pr-6 border-1 border-blue-800 w-fit"
      >
        <option value="10:00" selected>
          10:00 AM
        </option>
        <option value="11:00">11:00 AM</option>
        <option value="12:00">12:00 AM</option>
        <option value="1:00">1:00 PM</option>
      </select>
      <div className="flex gap-8 justify-end">
        <Button className="bg-gray-700 text-white">Request this time</Button>
        <Button className="bg-gray-200 border-gray-700 border px-10">Live chat now</Button>
      </div>
    </div>
  );
};

export default MeetingForm;
