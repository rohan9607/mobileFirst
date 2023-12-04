import * as yup from "yup";

const ResetPasswordValidationSchema = yup.object().shape({
    password: yup.string().trim().required("Please enter password."),

    password_confirmation: yup
    .string()
    .required("Please enter confirm password")
    .oneOf([yup.ref("password"), ""], "Passwords must match")
});

export default ResetPasswordValidationSchema;
