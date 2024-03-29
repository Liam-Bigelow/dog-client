import { Outlet } from "react-router-dom"
import "./Layout.css"
import Menu from "../menu/Menu"

const Layout = () => {
    return (
        <div className="container">
            <div className="layout">
                <Menu></Menu>
                <Outlet />
            </div>
            <div className="profile-nav">
                <md-fab variant="primary" aria-label="profile">
                    <md-icon slot="icon">person</md-icon>
                </md-fab>
            </div>
        </div>
    )
}

export default Layout
