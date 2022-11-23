import Delivery from "./Delivery"
import Price from "./Price"
import PropertyDetails from "./PropertyDetails"
import PropertyType from "./PropertyType"

import Modal from "../../components/UI/Modal"
import Accordion from "../../components/UI/Accordian"
const components=[
    {
        title:"Delivery",
        content:<Delivery className=""/>
    },{
        title:"Price",
        content:<Price className=""/>
    },
    {
        title:"Property types",
        content:<PropertyType className=""/>
    },
    {
        title:"Property options",
        content:<PropertyDetails className=""/>
    }
]

const Filter=()=>{
    return(
        <Modal className="!top-0 !left-1/2 -translate-x-1/2 !overflow-hidden">
            <Accordion items={components}/>
        </Modal>    
    )
}
export default Filter;