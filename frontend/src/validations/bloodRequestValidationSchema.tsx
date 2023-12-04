import * as yup from "yup";


export const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{9,14}?$/;
const nameReg = /^[a-zA-Z ]{1,30}$/;

const aadharRegex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/

const RequestBloodFormSchema = yup.object().shape({
    reason: yup
        .string()
        .trim()
        .required("Please enter reason")
    ,
    
    address: yup
        .string()
        .trim()
        .required("Please enter address")
    ,
    

});

export default RequestBloodFormSchema;
