import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});


export const signupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  profile:Yup.string().required('Please Select Profile.'),
  terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions')
})