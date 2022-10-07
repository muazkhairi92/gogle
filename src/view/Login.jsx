import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';


import { useFormik,Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import MyButton from '../components/MyButton';
import useAuth from '../hooks/useAuth';

export const Login = () => {

        const[el,setEl]=useState("");
        const[ps,setPs]=useState("");
        const {signin} = useAuth();

        // console.log(el);
        // useEffect(()=>{signin(el,ps)},[]);

      
        return (
          <Formik 
          initialValues= {{email:"", cpassword:""}}
          validationSchema = {yup.object({
            
            email: yup
            .string().
            email('invalid email address')
            .required("Required"),
      
              cpassword: yup
              .string().
              min(8,"Must be at least 8 character")
              .required("Required")
      
          })}
          onSubmit = {(values) => {
            setEl(values.email);
            setPs(values.cpassword);
            signin(values);
            // checkPass();
          }}>
                  <Form style={{width:"90vw",display:"flex" ,alignItems:'center', justifyContent:"center"}}>
                    <div style={{display:"flex",flexDirection:"column", alignItems:"center", width:"60%", backgroundColor:"#FFE7CC",paddingBottom:"2%", borderRadius:"5%"}}>
                  <h3>Sign In</h3>
                  <div style={{display:"flex",width:"80%", justifyContent:"space-between"}}>
                  <label htmlFor="email">Email: </label>
                  <div style={{display:"flex",flexDirection:"column"}}>
                  <Field name="email" type="text" />
                  <ErrorMessage name="email" style={{color:"red"}}/>
                  </div>
                  </div>
      
                  <div style={{display:"flex" ,marginTop:"2%", width:"80%",justifyContent:"space-between"}}>
                  <label htmlFor="cpassword">Password: </label>
                  <div style={{display:"flex",flexDirection:"column"}}>
                  <Field name="cpassword" type="password" />
                  <ErrorMessage name="cpassword"/>
                  </div>
                  </div>
      
                  <MyButton style={{width:"30%", backgroundColor:"#083AA9", color:"white", marginTop:"2%"}}type='submit' > Sign In</MyButton> 
                  </div>
          
              </Form>
          </Formik>
       
      
        );
  };