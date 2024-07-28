import {useState} from "react";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import orderHistory from "../images/order_history.svg";
import addressBook from "../images/address_book.svg";
import personalDetails from "../images/personal_details.svg";

const Login = () => {
    let {toggleLogin,setName} = useContext(AuthContext)
    const nav = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({email:"",password:""})

    const handleLogin = async () => {
        const res = await fetch('http://localhost:3000/signup')
        const users = await res.json()

        let uFound = 0
        let pFound = 0

        for(let user of users){
            if(user.email === email)
            {
                uFound = 1
                if(user.password === password){
                    pFound = 1
                    setName(user.fname)
                    break
                }
            }
        }
        if(uFound == 0){
            setError({email:"Email not found",password:""})
            return
        }
        if(pFound == 0){
            setError({email:'',password:'Incorrect Password'})
            return
        }

        setError({email:'',password:''})
        alert("Login Successful")
        toggleLogin()
        nav('/')
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="main-content">
            <div className="main-header">My account</div>
            <div className="login-container">
            <div className="login-box l-box">
                    <span>Email address</span>
                    <input className="m-size ip" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {error.email && <div id="span">{error.email}</div>}
                    <span>Password</span>
                    <input className="m-size ip" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {error.password && <div id="span2">{error.password}</div>}
                    <label>
                        <input type="checkbox" checked={showPassword} onChange={toggleShowPassword} />
                        Show Password
                    </label>
                    <h6>Forgotten your password</h6>
                    <button onClick={() => handleLogin()} className="basicButton mediumButton">log in</button>
                </div>

                <div className="login-box r-box">
                    <h3>New customers</h3>
                    <span>Set up an account with us and you will be able to:</span>
                    <div className="flex-combo">
                        <span className="svg"><img src={orderHistory} alt="" /></span>
                        <span>Check order status</span>
                    </div>
                    <div className="flex-combo">
                        <span className="svg">
                            <img src={addressBook} alt="" />
                        </span>
                        <span>Save multiple addresses to your address book</span>
                    </div>
                    <div className="flex-combo">
                        <span className="svg">
                            <img src={personalDetails} alt="" />
                        </span>
                        <span>Set your size and monogramming preferences</span>
                    </div>
                    <button onClick={() => nav('/signup')} className="basicButton smallButton">
                        create an account now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
{/* <Link to='/signup'></Link> */}
