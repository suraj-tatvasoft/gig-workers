import * as yup from 'yup';

export const signupSchema = yup.object({
  email: yup.string().email().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  password: yup.string().min(6).required()
});
