import React, { useState, useEffect, useContext } from 'react'
import { deleteFromTable, insertIntoTable, editTableRow, openDialog } from '../../Helpers/TableHelpers'
import { changeHandler } from '../../Helpers/ChangeHandler'
import BoxHeader from '../../components/BoxHeader'
import DataTable from '../../components/DataTable'
import stateContext from '../../context/StateContext'
import Dialog from '../../components/Dialog'

function AddProperty() {


    const contextState = useContext(stateContext)
    const { operator, propertyTypeList } = contextState.state

    const [state, setState] = useState({
        resetNewRow: {
            PropertyType: "",
            SubPropertyType: "",
            CreatedBy: operator.Username,
        },
        newTableRow: {
            PropertyType: "",
            SubPropertyType: "",
            CreatedBy: operator.Username,
        },
        tableBodyList: [

        ],
        editingActivated: false,
        editingID: "",
        APIs: {
            AddData: "addPropertyType",
            UpdateData: "updatePropertyType",
            DeleteData: "deletePropertyType",
            updateList: 'propertyTypeList'
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
        let propertyTypesData = propertyTypeList;

        setTimeout(() => {
            mounted.current && setState({
                ...state,
                tableBodyList: propertyTypesData,
                newTableRow: state.resetNewRow,
                tableBodyDisplayList: state.tableBodyList
            })
        }, 200)

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
                <div className="col-md-4">

                    <div className="box box-primary">

                        <BoxHeader title={`${state.editingActivated ? "Edit" : "Add"} Type of Properties`} />

                        <form onSubmit={(e) => insertIntoTable(e, contextState, state, setState)}>
                            <div className="box-body">

                                <div className="form-group">
                                    <label>Property Type</label>
                                    <input name="PropertyType" type="text" className="form-control" value={state.newTableRow.PropertyType} onChange={(e) => changeHandler(e, state, setState)} />
                                </div>

                                <div className='mt20'>

                                    <div className="form-group">
                                        <label>Sub Property Type</label>
                                        <input name="SubPropertyType" type="text" className="form-control" value={state.newTableRow.SubPropertyType} onChange={(e) => changeHandler(e, state, setState)} />
                                    </div>

                                </div>

                            </div>

                            <div className="box-footer">
                                <button type="submit" className="btn btn-info pull-right">Save</button>
                            </div>

                        </form>
                    </div>

                </div>

                <div className="col-md-8">

                    <div className="box box-primary">
                        <BoxHeader title="List of Added Property Types" />

                        <div className="box-body">
                            <DataTable
                                tableHeader={["id", "Property Type", "Sub Property Type", "Created By"]}
                                tableBody={state.tableBodyList}
                                searchField="PropertyType"
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



export default AddProperty