import React from 'react'
import BaseCtl from './BaseCtl'
import Dashboard from './Dashboard';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Tab , Navbar,Nav} from 'react-bootstrap';
import FormMessage from './FormMessage';
// import Ragistration from './Ragistration';
import { Route,BrowserRouter as Router, Switch,Link } from 'react-router-dom';
import axios from 'axios';
    

class Login extends BaseCtl {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                loginId: '',
                password: '',
                message: '',
                error: '',
            },

            form: {
                loginId: "",
                password: "",
            
        },
        
        };
        // localStorage.setItem('Name', "Ankit");
    }
/**to display the links by dashboard and signin */
    signin() {

        if (this.state.form.loginId == "" || this.state.form.password == ""){
            
            if (this.state.password == "") {
                this.changeInputError("password", "Password Is Null");
                this.state.inputError.error=false;
            }
            if(this.state.loginId == "") {
                this.changeInputError("loginId", "loginId Is Null");
                this.state.inputError.error=false;
            }
            if(this.state.inputError.error==false){
                console.log("ok google you can say..")
                return;
            }
        }
        
        else{
            let url = "http://api.sunilos.com:9080/ORSP10/Auth/login";    
            axios.post(url,this.state.form).then((res) => {
              this.setState({ list: res.data.result.data });
          
           
              if(-res.data.result.inputerror) {
                this.setState({ inputError: res.data.result.inputerror });
                console.log("Kasam se error hai..")
                
                console.log(res.data.result.inputerror);
                this.changeInputError("error", "true");
                }

              else{
                localStorage.setItem('Name',res.data.result.data.name);
                return(
                ReactDOM.render(
                    <React.StrictMode>
                        <Dashboard />
                    </React.StrictMode>,
                    document.getElementById('root')
                ));
                }


              });
            

            }
        }

       

    resetForm = () => {
        this.setState({
            form:{
                loginId: "",
                password: "",
               
            }
        })
    } 
    
    render() {
        return (
            <>
            {/* <Router>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="ragistration">Ragistration</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
      <Route path="/ragistration" key="ragistration" component={Ragistration}  />
      </Switch>
      </Router> */}
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
                                <input name="loginId"  value={this.state.form.loginId}
                                    placeholder="Enter User ID"
                                    onChange={(event) => this.changeFormState(event)} required />
                            </p>
                            <div>
                                <h6 class="errormessage">{this.state.inputError.loginId}</h6>
                            </div>

                            <label>  Password :</label>
                            <p>
                                <input name="password" type={'password'} value={this.state.form.password}
                                    onChange={this.changeFormState}
                                    placeholder="Enter Password" required  /> 
                            </p>
                            <h6 class="errormessage">{this.state.inputError.password}</h6>
                            <br></br>
                            <Button type='button' 
                                onClick={(event) => this.signin(event)}>Signin</Button> &nbsp; &nbsp;
                            <Button type='reset' variant="danger"
                                onClick={(event) => this.resetForm(event)}>Reset</Button>
                                
                        </table>
                        <br></br>
             </form>
          
            </div>
            </>
         
        );
    }
}
export default Login

