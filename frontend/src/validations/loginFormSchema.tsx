import * as yup from "yup";


const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Please enter email.")
    .matches(emailRegex, "Please Enter Valid Email Address")
    ,
  password: yup.string().required("Please enter password."), 
});

export default loginValidationSchema;
