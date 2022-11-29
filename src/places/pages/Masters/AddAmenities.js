import React, { useState, useEffect, useContext } from 'react'

// import { deleteFromTable, insertIntoTable, editTableRow, openDialog } from '../../Helpers/TableHelpers'
// import { changeHandler } from '../../Helpers/ChangeHandler'
// import axios from 'axios'
// import DataTable from '../../components/DataTable'
// import Dialog from '../../components/Dialog'
// import { ATLAS_URI } from '../../Constants'
// import stateContext from '../../context/StateContext'

import BoxHeader from '../../components/UI/BoxHeader'

function AddAmenities() {


    // const contextState = useContext(stateContext)
    // const { configToken, operator } = contextState.state

    // const [state, setState] = useState({
    //     resetNewRow: {
    //         CreatedBy: operator.Username,
    //         Amenity: "",

    //     },
    //     newTableRow: {
    //         CreatedBy: operator.Username,
    //         Amenity: "",
    //     },
    //     tableBodyList: [

    //     ],
    //     editingActivated: false,
    //     editingID: "",
    //     APIs: {
    //         AddData: "addAmenity",
    //         UpdateData: "updateAmenity",
    //         DeleteData: "deleteAmenity"
    //     },
    //     dialogInfo: {
    //         isOpened: false,
    //         text: "",
    //         type: ""
    //     }
    // })

    // const mounted = React.useRef(true);
    // useEffect(() => () => { mounted.current = false; }, []);
    // useEffect(() => {
    //     axios.get(`${ATLAS_URI}/getAmenities/`, configToken)
    //         .then(response => {
    //             const responseData = response.data;
    //             if (typeof responseData !== 'undefined' && responseData !== null && mounted.current) {
    //                 setState({
    //                     ...state,
    //                     tableBodyList: responseData,
    //                     newTableRow: state.resetNewRow,
    //                 })

    //             }

    //         }).catch(err => console.log(err))
    // }, []);

    return (
        <section className="content">
            <div className="row">
                {/* {typeof state.dialogInfo !== 'undefined' &&
                    <Dialog
                        onFalse={(e) => setState(...state, { dialogInfo: { isOpened: false, text: "" } })}
                        onTrue={(e) => deleteFromTable(contextState, state, setState)}
                        dialogInfo={state.dialogInfo}
                    />} */}
                <div className="col-md-5">

                    <div className="box box-primary">

                        {/* <BoxHeader title={`${state.editingActivated ? "Edit" : "Add"} Amenity`} /> */}

                        {/* <form onSubmit={(e) => insertIntoTable(e, contextState, state, setState)}> */}
                        <form onSubmit={""}>
                            <div className="box-body bozero">

                                <input type="hidden" name="ci_csrf_token" value="" />

                                <div className="form-group">
                                    <label >Name </label><small className="req"> *</small>
                                    <input name="Amenity" value=""
                                    // <input name="Amenity" value={state.newTableRow.Amenity} onChange={(e) => changeHandler(e, state, setState)} required type="text" className="form-control"
                                    />
                                </div>

                            </div>
                            <div className="box-footer">
                                <button type="submit" className="btn btn-info pull-right">Save</button>

                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-md-7">
                    <div className="box box-primary">

                        <BoxHeader title="List of Added Amenities" />

                        <div className="box-body">

                            {/* <DataTable
                                tableHeader={["id", "Amenity", "Created By"]}
                                searchField="Amenity"
                                tableBody={state.tableBodyList}
                                deleteFromTable={(e) => openDialog(e, state, setState)}
                                editTableRow={(e) => editTableRow(e, state, setState)}
                            /> */}

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )



}

export default AddAmenities