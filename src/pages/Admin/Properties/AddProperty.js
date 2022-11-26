import React, { useState, useEffect, useContext } from 'react'
import { changeHandler as oldChangeHandler } from '../../../utils/ChangeHandler'
// import axios from 'axios'
import BoxHeader from '../../../components/UI/BoxHeader'
// import SelectBox from '../../../components/UI/SelectBox'

import Dialog from '../../../components/UI/Dialog'
// import { ATLAS_URI } from '../../Constants'

function AddProperty(props) {

    const [state, setState] = useState({
        resetNewRow: {
            PropertyTitle: "",
            Project: "Select",
            PropertyType: "",
            Size: "",
            PropertyAge: "",
            Reference: "Select",
            PaymentMode: "",
            LoanAvailability: "",
            Amenities: [],
            Description: "",
            Images: []
        },
        newTableRow: {
            PropertyTitle: "",
            Project: "Select",
            PropertyType: "",
            Size: "",
            PropertyAge: "",
            Reference: "Select",
            PaymentMode: "",
            LoanAvailability: "",
            Amenities: [],
            Description: "",
            Images: []
        },
        tableBodyList: [

        ],
        agentList: [],
        dialogInfo: {
            isOpened: false,
            text: ""
        },
        editingActivated: false,
        editingID: "",

        //Temporary
        projectList: [],
        propertyTypeList: [],
        amenitiesList: []

    })
    const mounted = React.useRef(true);
    useEffect(() => () => { mounted.current = false; }, []);
    useEffect(() => {
        // if (!resetEditID("/Properties/addNewProperty")) {
        //     //Get Property with ID
        //     axios.get(`${ATLAS_URI}/getPropertyByID/${EditDetailsData.id}`, configToken)
        //         .then(response => {
        //             const responseData = response.data;
        //             if (typeof responseData !== 'undefined' && mounted.current) {
        //                 setState(prevState => ({
        //                     ...prevState,
        //                     newTableRow: responseData,
        //                     editingActivated: true
        //                 }))

        //             }

        //         }).catch(err => console.log(err))
        // } else EditDetailsData = {}

        // axios.all(
        //     [
        //         axios.get(`${ATLAS_URI}/getAmenities/`, configToken),
        //         axios.get(`${ATLAS_URI}/getPropertyTypes/`, configToken),
        //         axios.get(`${ATLAS_URI}/getProjects/`, configToken),
        //         axios.get(`${ATLAS_URI}/getAgents/`, configToken),

        //     ]
        // )
        //     .then(axios.spread((aminity, propertyType, projects, agents) => {
        //         mounted.current && setState(prevState => ({
        //             ...prevState,
        //             amenitiesList: aminity.data,
        //             propertyTypeList: propertyType.data,
        //             projectList: projects.data,
        //             agentList: agents.data
        //         }))

        //     }))
        //     .catch(error => console.log(error));

    }, []);



    function validateThenAddProperty(e) {
        // if (state.newTableRow.Project === "Select") {
        //     e.preventDefault();
        //     const newDialogInfo = { isOpened: true, text: "Kindly Select a Project", type: "Error" }
        //     setState(prevState => ({ ...prevState, dialogInfo: newDialogInfo }))
        //     setTimeout(() => {
        //         setState(prevState => ({ ...prevState, dialogInfo: { isOpened: false, text: "", type: "" } }))
        //     }, 3000)
        // }
        // else {
        //     addNewProperty(e);
        // }
    }

    function addNewProperty(e) {
        // e.preventDefault();
        // console.log(state.newTableRow)
        // const formData = new FormData();

        // if (state.newTableRow.ImageSelected) {
        //     state.newTableRow.ImageSelected.forEach(image => {
        //         formData.append('SelectedImages', image);
        //     })
        // }

        // formData.append('PropertyTitle', state.newTableRow.PropertyTitle);
        // formData.append('Project', state.newTableRow.Project);
        // formData.append('PropertyType', state.newTableRow.PropertyType);
        // formData.append('Size', state.newTableRow.Size);
        // formData.append('PropertyAge', state.newTableRow.PropertyAge);
        // state.newTableRow.Reference !== "Select" && formData.append('Reference', state.newTableRow.Reference);
        // formData.append('PaymentMode', state.newTableRow.PaymentMode);
        // formData.append('LoanAvailability', state.newTableRow.LoanAvailability);
        // formData.append('Amenities', state.newTableRow.Amenities);
        // formData.append('Description', state.newTableRow.Description);
        // formData.append('Images', state.newTableRow.Images);

        // console.log(state.newTableRow)

        // if (!state.editingActivated) {
        //     axios.post(`${ATLAS_URI}/addProperty/`, formData, configToken)
        //         .then(response => {
        //             if (response.status === 200) {
        //                 const newDialogInfo = { isOpened: true, text: "Property Added Successfully", type: "Success" }
        //                 document.getElementsByName("ImageSelected")[0].value = "";
        //                 setState(prevState => ({ ...prevState, newTableRow: state.resetNewRow, dialogInfo: newDialogInfo }))

        //             }
        //         })
        //         .catch(err => alert(err))

        // } else {
        //     axios.post(`${ATLAS_URI}/updatePropertyWithImages/` + EditDetailsData.id, formData, configToken)
        //         .then(() => {
        //             redirectFromEditDetails(EditDetailsData.redirectFrom)
        //         })
        //         .catch(err => alert(err))
        // }

    }

    function changeHandler(e) {
        oldChangeHandler(e, state, setState);
    }
    return (
        <section className="content text-gray-300">
            <div className="row">
                <Dialog
                    onFalse={(e) => setState(prevState => ({ ...prevState, dialogInfo: { isOpened: false, text: "" } }))}
                    dialogInfo={state.dialogInfo}
                />
                <div className="col-md-12">

                    <div className="box box-primary">

                        <BoxHeader title={`${state.editingActivated ? "Edit" : "Add"} Property`} />

                        <form onSubmit={validateThenAddProperty}>
                            <div className="box-body bozero mx5p">

                                <input type="hidden" name="ci_csrf_token" value="" />

                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Property Title</label> <small className="req"> *</small>
                                            <input name="PropertyTitle" type="text" className="form-control" required value={state.newTableRow.PropertyTitle} onChange={changeHandler} />
                                        </div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className='col-md-6'>
                                        {/* <SelectBox
                                            label="Project"
                                            name="Project"
                                            options={state.projectList}
                                            attributeShown="Name"
                                            changeHandler={changeHandler}
                                            value={state.newTableRow.Project}
                                            resetValue={() => setState(prevState => ({ newTableRow: { ...prevState.newTableRow, Project: "Select" } }))}
                                        /> */}
                                    </div>

                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label>Property Type</label> <small className="req"> *</small>
                                            <select required className="form-control" name="PropertyType" value={state.newTableRow.PropertyType} onChange={changeHandler} >
                                                <option value="">Select</option>
                                                {typeof state.propertyTypeList !== 'undefined' && state.propertyTypeList.map(classData => <option key={classData.PropertyType} value={classData.id}>{classData.PropertyType}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label>Size</label> <small className="req"> *</small>
                                            <input name="Size" type="text" className="form-control" placeholder='in acre' required value={state.newTableRow.Size} onChange={changeHandler} />
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label>Property Age</label> <small className="req"> *</small>
                                            <input name="PropertyAge" type="text" className="form-control" placeholder='in Years' required value={state.newTableRow.PropertyAge} onChange={changeHandler} />
                                        </div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className='col-md-6'>
                                        {/* <SelectBox
                                            label="Reference (Agent)"
                                            name="Reference"
                                            options={state.agentList}
                                            attributeShown="Name"
                                            changeHandler={changeHandler}
                                            value={state.newTableRow.Reference}
                                            resetValue={() => setState(prevState => ({ newTableRow: { ...prevState.newTableRow, Reference: "Select" } }))}
                                        /> */}
                                    </div>

                                </div>

                                <div className="row">

                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label>Payment Mode</label>
                                            <select className="form-control" name="PaymentMode" value={state.newTableRow.PaymentMode} onChange={changeHandler} >
                                                <option value="">Select</option>
                                                <option value="Cash">Cash</option>
                                                <option value="Credit">Credit</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label>Loan Availability</label> <small className="req"> *</small>
                                            <select required className="form-control" name="LoanAvailability" value={state.newTableRow.LoanAvailability} onChange={changeHandler} >
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>


                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Amenities</label><small className="req"> *</small>

                                            <div className="section_checkbox">
                                                {typeof state.amenitiesList !== 'undefined' && typeof state.newTableRow.Amenities !== 'undefined' &&
                                                    state.amenitiesList.map(amenity =>
                                                        <div className="checkbox" key={amenity.Amenity}>
                                                            <label>
                                                                <input type="checkbox" name="Amenities" value={amenity.id.toString()}
                                                                    checked={state.newTableRow.Amenities.includes(amenity.id.toString())}
                                                                    required={state.newTableRow.Amenities.length === 0}
                                                                    onChange={changeHandler} /> {amenity.Amenity}
                                                            </label>
                                                        </div>
                                                    )}

                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input name="ImageSelected" type="file" accept=".png, .jpg, .jpeg" multiple className='form-control' onChange={changeHandler} />

                                            {/* {typeof state.newTableRow.Images !== 'undefined' && state.newTableRow.Images.map((image, key) =>
                                                <span key={key} index={key} className='databaseImgArea'>
                                                    <img alt="database images" style={{ margin: "5px 2px", objectFit: "cover" }} src={`${ATLAS_URI}/file/${image}`} width={60} height={60}></img>
                                                </span>
                                            )}
                                            {typeof state.newTableRow.ImageSelected !== 'undefined' && state.newTableRow.ImageSelected.map(image =>
                                                <img key={image} alt="selected images" style={{ margin: "5px 2px", objectFit: "cover" }} src={URL.createObjectURL(image)} width={60} height={60}></img>
                                            )} */}

                                        </div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea name="Description" type="text" className="form-control" value={state.newTableRow.Description} onChange={changeHandler} rows="3"></textarea>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="box-footer">
                                <button type="submit" className="btn btn-info pull-right">Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )


}

export default AddProperty