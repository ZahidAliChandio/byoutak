import React, { useState, useEffect, useContext } from 'react'
import { deleteFromTable, insertIntoTable, editTableRow, openDialog } from '../../Helpers/TableHelpers'
import { changeHandler } from '../../Helpers/ChangeHandler'
import axios from 'axios'
import BoxHeader from '../../components/BoxHeader'
import DataTable from '../../components/DataTable'
import Dialog from '../../components/Dialog'
import stateContext from '../../context/StateContext'
import { ATLAS_URI } from '../../Constants'

function AddSource() {
    const contextState = useContext(stateContext)
    const { operator, configToken } = contextState.state

    const [state, setState] = useState({
        resetNewRow: {
            CreatedBy: operator.Username,
            Source: "",
        },
        newTableRow: {
            CreatedBy: operator.Username,
            Source: "",
        },
        tableBodyList: [],
        editingActivated: false,
        editingID: "",
        APIs: {
            AddData: "addSource",
            UpdateData: "updateSource",
            DeleteData: "deleteSource",
            updateList: 'sourcesList'
        },
        dialogInfo: {
            isOpened: false,
            text: "",
            type: ""
        },
    })

    const mounted = React.useRef(true);
    useEffect(() => () => { mounted.current = false; }, []);

    useEffect(() => {
        //Get All Sources
        axios.get(`${ATLAS_URI}/getSources/`, configToken)
            .then(response => {
                const responseData = response.data;
                if (typeof responseData !== 'undefined' && mounted.current) {
                    setState({
                        ...state,
                        newTableRow: state.resetNewRow,
                        tableBodyList: responseData,
                    })
                }
            }).catch(err => console.log(err))
    }, []);

    return (
        <section className="content">
            <div className="row">

                {typeof state.dialogInfo !== 'undefined' &&
                    <Dialog
                        onFalse={(e) => setState(...state, { dialogInfo: { isOpened: false, text: "" } })}
                        onTrue={(e) => deleteFromTable(contextState, state, setState)}
                        dialogInfo={state.dialogInfo}
                    />}
                <div className="col-md-5">
                    <div className="box box-primary">

                        <BoxHeader title={`${state.editingActivated ? "Edit" : "Add"} Source`} />

                        <form onSubmit={(e) => insertIntoTable(e, contextState, state, setState)}>
                            <div className="box-body bozero">
                                <input type="hidden" name="ci_csrf_token" value="" />
                                <div className="form-group">
                                    <label >Name </label><small className="req"> *</small>
                                    <input type="text" className="form-control" name="Source" required value={state.newTableRow.Source} onChange={(e) => changeHandler(e, state, setState)} />
                                </div>
                            </div>
                            <div className="box-footer">
                                <button type="submit" className="btn btn-info pull-right ">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="box box-primary">
                        <BoxHeader title="List of Added Source" />
                        <div className="box-body">
                            <DataTable
                                tableHeader={["id", "Source", "Created By"]}
                                searchField="Source"
                                tableBody={state.tableBodyList}
                                deleteFromTable={(e) => openDialog(e, state, setState)}
                                editTableRow={(e) => editTableRow(e, state, setState)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )



}

export default AddSource