import React from 'react';
import BaseCtl from './BaseCtl';
import Dashboard from './Dashboard';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Tab } from 'react-bootstrap';
import FormMessage from './FormMessage';

class Login extends BaseCtl {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                userid: '',
                password: '',
                message: '',
                error: '',
            },

            form: {
                userid: "admin",
                password: "admin",
            }
        };
    }
/**to display the links by dashboard and signin */
    signin() {
        if (this.state.form.userid == "admin" && this.state.form.password == "admin") {
            //to render the dashboard 
            ReactDOM.render(
                <React.StrictMode>
                    <Dashboard />
                </React.StrictMode>,
                document.getElementById('root')
            );
        }
        
        else if (this.state.form.userid == "" || this.state.form.password == "") {
            if (this.state.password == "") {
                this.changeInputError("password", "Password Is Null")
            }
            if(this.state.userid == "") {
                this.changeInputError("userid", "Userid Is Null")
            }
        }
        else {
            this.changeInputError("message", "Invalid User Id And Password");
            this.changeInputError("error", "true");
            this.changeInputError("userid", "");
            this.changeInputError("password", "");
        }
    }
    
    render() {
        return (
            <div className="center" >
            
                <form>
                        <table>
                            <h2 align="center">Login</h2>
                                {(() => {
                                    if (this.state.error) {
                                        return (
                                            <>
                                            <div><FormMessage error={this.getInputError("error")} message={this.getInputError("message")} /></div>
                                            </>
                                        )
                                    }
                                    return null;
                                })()}
                           
                            <label>User ID : </label>
                            <p>
                                <input name="userid" value={this.state.form.userid}
                                    placeholder="Enter User ID"
                                    onChange={(event) => this.changeFormState(event)} required />
                            </p>
                            <div>
                                <h6 class="errormessage">{this.state.inputError.userid}</h6>
                            </div>

                            <label>  Password :</label>
                            <p>
                                <input name="password" type="text" value={this.state.form.password}
                                    onChange={this.changeFormState}
                                    placeholder="Enter Password" required />
                            </p>
                            <h6 class="errormessage">{this.state.inputError.password}</h6>
                            <br></br>
                            <Button type='button'
                                onClick={(event) => this.signin(event)}>Signin</Button>
                                
                        </table>
                        <br></br>
                                <h6>Put Userid=admin, password= admin for login</h6>
             </form>
          
            </div>
         
        );
    }
}
export default Login

