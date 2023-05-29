import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Register() {

  let navigate=useNavigate()

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      dob: "",
      address: {
        city: "",
        street: "",
        pincode: "",
      },
    },
  });


  async function createUser(userObj){
   //Make HTTP POST req
      let res=await axios.post('http://localhost:4000/users',userObj);
      //if user created
      if(res.status===201){
        //redirect to login
        navigate('/login')
      }else{
        
      }
  }

  return (
    <div>
      <p className="display-4 text-center text-info">User registration</p>
      <form onSubmit={handleSubmit(createUser)}>
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
         {/* email */}
         <input
          type="email"
          {...register("email")}
          id=""
          className="form-control mb-3"
          placeholder="Email"
        />
         {/* date of birth */}
         <input
          type="date"
          {...register("dob")}
          id=""
          className="form-control mb-3"
          
        />
        <span className="fw-bold text-secondary">Address</span>
         {/* city */}
         <input
          type="text"
          {...register("address.city")}
          id=""
          className="form-control mb-3"
          placeholder="City"
        />
         <input
          type="text"
          {...register("address.street")}
          id=""
          className="form-control mb-3"
          placeholder="Street"
        />
         <input
          type="number"
          {...register("address.pincode")}
          id=""
          className="form-control mb-3"
          placeholder="PINCODE"
        />
        {/* submit button */}
        <button type="submit" className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;
