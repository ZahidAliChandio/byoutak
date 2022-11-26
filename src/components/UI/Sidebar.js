import React, { useContext, useState } from 'react'
import SideBarItem from './SideBarItem'
// import Accordion from 'react-bootstrap/Accordion';
function SideBar() {

    const [state, setState] = useState({
        dialogInfo: {
            isOpened: false,
            text: "",
            type: ""
        },
    })

    return (
        <section id="menu_section">

            {/* <Accordion> */}

            <SideBarItem
                itemKey="3"
                title="Projects"
                icon="fas fa-flag"
                subLinks={[
                    "Add Projects", "View All Projects"
                ]}
            />

            <SideBarItem
                itemKey="4"
                title="Properties"
                icon="fas fa-building"
                subLinks={[
                    "Add New Property", "View All Properties"
                ]}
            />

            <SideBarItem
                itemKey="9"
                title="Masters"
                icon="far fa-cog"
                subLinks={[
                    "Add Source", "Add Property Type", "Add Amenities", "Add Agreement Type", "Add Status"
                ]}
            />


            {/* </Accordion> */}

        </section>

    );
}

export default React.memo(SideBar)