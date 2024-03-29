
import "./Entry.css"

import {useNavigate} from "react-router-dom"
import userService from "../services/user.service.ts"
import snackService from "../services/snack.service.ts"

const Entry = (props) => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.username.value;
        const pass = event.target.password.value;
        userService.login(email, pass)
            .then((success) => {
                if(success){
                    navigate("../home");
                }
        })
    }

    return <div className="entry-container">
        <div className="entry-form">
            <md-tabs>
                <md-primary-tab id="tab-login" aria-controls="panel-login">
                    Login
                </md-primary-tab>
                <md-primary-tab id="tab-register" aria-controls="panel-register">
                    Register
                </md-primary-tab>
            </md-tabs>

            <form onSubmit={handleLogin} role="tabpanel" id="panel-login" aria-labelledby="tab-login">
                <div className="entry-body">
                    <h3>Dirty Dawgs</h3>
                    <md-outlined-text-field
                        name="username"
                        label="Username" 
                        type="email"
                        required>
                    </md-outlined-text-field>
                    <md-outlined-text-field 
                        name="password"
                        label="Password" 
                        type="password"
                        required>
                        <md-icon-button type="button" toggle slot="trailing-icon">
                            <md-icon>visibility</md-icon>
                            <md-icon slot="selected">visibility_off</md-icon>
                        </md-icon-button>
                    </md-outlined-text-field>
                </div>
                <div className="actions">
                    <md-filled-button type="submit">Login</md-filled-button>
                </div>
            </form>
            <div role="tabpanel" id="panel-register" aria-labelledby="tab-register" hidden>
                <div className="entry-body">
                    Coming soon
                </div>
            </div>
        </div>
    </div>
}

export default Entry