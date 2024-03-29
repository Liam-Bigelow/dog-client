import { useLocation} from "react-router-dom"
import "./Menu.css"
import { useRef, useState } from "react";

const Menu = (props) => {
    const {pathname} = useLocation();
    let tabs = useRef();

    const getMenuItem = (path, icon) => {
        const isActive = pathname.toLowerCase().includes(path.toLowerCase());
        return <md-primary-tab {...(isActive && {"active": true})}>
            <md-icon>{icon}</md-icon>
            {path}
        </md-primary-tab>
    }

    // tabs.current.addEventListener('change', (event) => {
    //     console.log(event);
    //      // const route = `./${path}`;
    // });


    return (
        <div className="menu">
            <md-tabs className="menu" ref={tabs}>
                {getMenuItem("Home", "pets")}
                {getMenuItem("Schedule", "schedule")}
            </md-tabs>
        </div>
    );
}

export default Menu;