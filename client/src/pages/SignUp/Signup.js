import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

// import vector1 from "./vector1.jpg";
import vector2 from "./vector2.png";
// import vector3 from "./vector3.png";
// import vector4 from "./vector4.jpg";

import "./SignUp.scss"
import { axiosInstance } from "../../config";

const SignUp = () => {

    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [errors, setErrors] = useState(null)

    const history = useHistory();

    const submitHandler = async (event) => {
        event.preventDefault();
        setErrors(null)

        const enteredName = userRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        try{
           const res =  await axiosInstance.post("auth/register", {
                username: enteredName,
                email: enteredEmail,
                password: enteredPassword
            })
            console.log(res);
            res.data && history.replace("/signin")
        } catch (err) {
            console.log(err.response.data.msg)
            const msg = err.response.data.msg
            setErrors(msg)
        }

    }

    return (
        <div className="signupPage">
            <div className="signup">


                <div className="signup1">

                    <h3 className="signup1__text">Welcome to BLOG</h3>
                    <p className="signup1__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam aperiam est sequi eaque qui ipsam ipsum provident eum expedita.</p>
                    <img src={vector2} alt="" className="signup1__vector" />
                </div>

                <div className="signup2">
                <form onSubmit={submitHandler}> 
                    <h3 className="signup2__text">Sign Up</h3>
                    {errors && <p className="signup2__error">{errors}</p>}
                    <input ref={userRef} className="signup2__box" type="text" required placeholder="Username" />
                    <input ref={emailRef} className="signup2__box" type="text" required placeholder="Email" />
                    <input min="8" max="20" ref={passwordRef} className="signup2__box" type="password" required placeholder="Password" />
                    <button className="signup2__submit">Sign Up</button>
                    </form>
                    <p className="signup2__para">Already Registered? <Link to="/login">Log in now</Link></p>
                </div>


            </div>
        </div>
    )
}

export default SignUp;