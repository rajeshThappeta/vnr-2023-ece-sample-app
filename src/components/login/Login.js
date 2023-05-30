import {useEffect,useState} from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginPromice } from "../../slices/loginSlice";
import { useDispatch ,useSelector} from "react-redux";

function Login() {
  let dispatch = useDispatch();
  let navigate=useNavigate()
  let {userLoginStatus,errorMessage,errorStatus}=useSelector(state=>state.login)
  let [userCredObj,setUserCredObj]=useState({})

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function loginUser(userCredentialsObj) {
    setUserCredObj(userCredentialsObj)
    let actionObj = loginPromice(userCredentialsObj);
    dispatch(actionObj)
  }

  useEffect(()=>{
    if(userLoginStatus===true){
        if(userCredObj.userType==='user'){
          navigate('/user-panel')
        }
        if(userCredObj.userType==='admin'){
          navigate('/admin-panel')
        }
    }
  },[userLoginStatus])



  return (
    <div>
      <p className="display-4 text-center title">User login</p>
      {
        errorStatus===true && <p className="text-danger  text-center display-5">{errorMessage}</p>
      }
      <form onSubmit={handleSubmit(loginUser)}>
        {/* user type */}
        <div className="mb-3">
          <label>Select user type</label>
          <div className="form-check">
            <input
              type="radio"
              {...register("userType")}
              id="admin"
              className="form-check-input"
              value="admin"
            />
            <label htmlFor="admin" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              {...register("userType")}
              id="user"
              className="form-check-input"
              value="user"
            />
            <label htmlFor="user" className="form-check-label">
              User
            </label>
          </div>
        </div>

        {/* username */}
        <input
          type="text"
          {...register("username")}
          id=""
          className="form-control mb-3"
          placeholder="Username"
        />
        {/* password */}
        <input
          type="text"
          {...register("password")}
          id=""
          className="form-control mb-3"
          placeholder="Password"
        />

        {/* submit button */}
        <button type="submit" className="btn myBtn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
