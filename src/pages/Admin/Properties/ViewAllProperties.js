import React, { useState, useEffect, useContext } from 'react'
// import axios from 'axios'
import DataTable from '../../../components/UI/DataTable'
import Dialog from '../../../components/UI/Dialog'
import BoxHeader from '../../../components/UI/BoxHeader'
// import { ATLAS_URI } from '../../Constants'
// import stateContext from '../../context/StateContext'

function ViewAllProperties() {

    // const contextState = useContext(stateContext)
    // const updateEditDetails = contextState.updateEditDetails
    // const { configToken } = contextState.state

    const [state, setState] = useState({
        tableBodyList: [],
        dialogInfo: {
            isOpened: false,
            text: "",
            type: ""
        },
    })
    // const mounted = React.useRef(true);
    // useEffect(() => () => { mounted.current = false; }, []);
    useEffect(() => {
        // console.log("mounted")
        // axios.get(`${ATLAS_URI}/getProperties/`, configToken)
        //     .then(response => {
        //         const propertiesData = response.data;
        //         if (typeof propertiesData !== 'undefined' && mounted.current) {
        //             setState(prevState => ({
        //                 ...prevState,
        //                 tableBodyList: propertiesData
        //             }))
        //         }

        //     }).catch(err => console.log(err))
    }, []);

    function editRecord(e) {
        // const temp = e.target.parentElement.parentElement.id;
        // updateEditDetails({ id: temp, editingActivated: true, redirectFrom: "/Properties/viewAllProperties", redirectTo: "/Properties/addNewProperty" });
    }

    function openDialog(e) {
        // const newDialogInfo = {
        //     isOpened: true,
        //     delID: e.target.parentElement.parentElement.id,
        //     text: "Are you sure you want to delete this Property?",
        //     type: "Confirm"
        // }
        // setState(prevState => ({ ...prevState, dialogInfo: newDialogInfo }))
    }

    function deleteFromTable(e) {
        // const delID = state.dialogInfo.delID;
        // console.log(state.tableBodyList)
        // axios.delete(`${ATLAS_URI}/deleteProperty/` + delID, configToken)
        //     .then(() => {

        //         state.tableBodyList.filter(data => data.id.toString() === delID)[0].Images.forEach((image) => {
        //             axios.delete(`${ATLAS_URI}/file/${image}`, configToken);
        //         })
        //         const newTableBodyList = state.tableBodyList.filter(data => data.id.toString() !== delID);
        //         setState(prevState => ({
        //             ...prevState,
        //             tableBodyList: newTableBodyList,
        //             dialogInfo: { isOpened: false, text: "", delID: "" }
        //         }))
        //     })
        //     .catch(err => alert(err))
    }


    return (
        <div className="content">
            <div className="row">

                <Dialog
                    onFalse={(e) => setState(prevState => ({ ...prevState, dialogInfo: { isOpened: false, text: "" } }))}
                    onTrue={(e) => deleteFromTable(e)}
                    dialogInfo={state.dialogInfo}
                />

                <div className="col-md-12">

                    <div className="box box-primary">

                        <BoxHeader title="Properties List" />

                        <div className="box-body">

                            <DataTable
                                tableHeader={["id", "Property Title", "Project Name", "Type", "Size", "AgentName"]}
                                tableBody={state.tableBodyList}
                                searchField="PropertyTitle"
                                customAction={[
                                    { title: "Update", icon: "fas fa-edit", redirectTo: "/Properties/addNewProperty", onClickEvent: editRecord },
                                    { title: "Delete", icon: "fas fa-times text-red", onClickEvent: openDialog }
                                ]}
                            />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )


}

export default ViewAllProperties