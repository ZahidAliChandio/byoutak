import Delivery from "./Delivery"
import Price from "./Price"
import PropertyDetails from "./PropertyDetails"
import PropertyType from "./PropertyType"
import Modal from "../../components/UI/Modal"
import Accordion from "../../components/UI/Accordian"
const components=[
    {
        title:"Delivery",
        content:<Delivery className="!static"/>
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

const Filter=(props)=>{
    return(
        <Modal className="!top-0 !left-0 !translate-x-0 !overflow-hidden !px-4 !rounded-none" onClose={() => props.setShowAll(false)}>
            <Accordion items={components}/>
        </Modal>    
    )
}
export default Filter;