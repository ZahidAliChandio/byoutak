import React from "react";

// import axios from 'axios'
import BoxHeader from "../../components/UI/BoxHeader";
// import SelectBox from '../../../components/UI/SelectBox'

import MainHeader from "../../components/Navigation/MainHeader";
import AdminCard from "../../components/UI/AdminCard";
import Input from "../../components/UI/Input";
import { useForm } from "../../hooks/form-hook";
// import { ATLAS_URI } from '../../Constants'

function AddProperty(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  const [formState, inputHandler] = useForm({
    propertyTitle: {
      value: "",
    },
    propertyType: {
      value: "",
    },
    propertySize: {
      value: "",
    },
    paymentMode: {
      value: "",
    },
    propertyAge: {
      value: "",
    },
    loanAvailability: {
      value: "",
    },
  });

  return (
    <section className="w-full">
      <MainHeader type="Properties" subtype="Add New Property" />
      <div className="content p-2">
        <AdminCard>
          <div className="col-md-12">
            <div className="box box-primary">
              <BoxHeader title={`Add Property`} />

              <form onSubmit={onSubmitHandler}>
                <div className="box-body bozero mx5p flex flex-col gap-4 px-4 sm:px-12 md:px-16 py-3 text-[0.7rem] text-[#212020]">
                  <input type="hidden" name="ci_csrf_token" value="" />

                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-20 lg-gap:28 xl:gap-40">
                    <Input
                      id="propertyTitle"
                      label={"Property Title"}
                      name={"PropertyTitle"}
                      placeholder="property title"
                      onInput={inputHandler}
                      required={true}
                    />
                    <Input
                      type="select"
                      items={["Select", "Residential", "Commercial", "Admin"]}
                      id={"propertyType"}
                      label={"Property Type"}
                      name={"PropertyType"}
                      onInput={inputHandler}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-20 lg-gap:28 xl:gap-40">
                    <Input
                      id={"propertySize"}
                      label={"Size"}
                      name={"Size"}
                      onInput={inputHandler}
                      required
                      placeholder="in acre"
                    />
                    <Input
                      type="select"
                      items={["Select", "Cash", "Credit"]}
                      id={"paymentMode"}
                      label={"Payment Mode"}
                      name={"PaymentMode"}
                      onInput={inputHandler}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-20 lg-gap:28 xl:gap-40">
                    <Input
                      id="propertyAge"
                      label={"Property Age"}
                      name="PropertyAge"
                      placeholder="in Years"
                      required={true}
                      onInput={inputHandler}
                    />
                    <Input
                      type="select"
                      items={["Select", "Yes", "No"]}
                      id={"loanAvailability"}
                      label={"Loan Availability"}
                      name={"LoanAvailability"}
                      onInput={inputHandler}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
                      Amenities
                    </label>
                    <label
                      htmlFor="bathrooms"
                      className="flex gap-1 font-semibold"
                    >
                      <input
                        type="checkbox"
                        name="bahtrooms"
                        id="bathrooms"
                        className="w-[0.6rem]"
                      />
                      <span>Attached Bathroom</span>
                    </label>
                    <label
                      htmlFor="garage"
                      className="flex gap-1 font-semibold"
                    >
                      <input
                        type="checkbox"
                        name="garage"
                        id="garage"
                        className="w-[0.6rem]"
                      />
                      <span>Garage</span>
                    </label>
                    {/* </div> */}
                  </div>
                  <div className="row">
                    <div className="flex flex-col gap[0.18rem]">
                      <label className="font-semibold">Image</label>
                      <input
                        name="ImageSelected"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        multiple
                        className="form-control border border-gray-300 bg-gray-50 rounded-l-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="textarea"
                      id="description"
                      label={"Description"}
                      name={"Description"}
                      onInput={inputHandler}
                    />
                  </div>
                </div>
                <div className="box-footer flex w-full justify-end border-t p-2">
                  <button
                    type="submit"
                    className="btn text-white font-semibold text-sm bg-[color:var(--red-color)] px-3 py-1 rounded-md font-open-sans hover:bg-[red]"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </AdminCard>
      </div>
    </section>
  );
}

export default AddProperty;
