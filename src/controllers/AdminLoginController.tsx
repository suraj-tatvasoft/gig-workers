import { FormInstance } from 'antd';
import { toast } from 'react-toastify';
import { loginSchema } from '@/schemas/auth';
import api from '@/services/api';
import { ADMIN_LOGIN_API_ENDPOINT } from '@/lib/config/endpoints/admin';
import { setStorage } from '@/lib/local-storage';
import { ADMIN_AUTH_TOKEN_KEY, ADMIN_PROFILE_KEY, AUTH_TOKEN_KEY } from '@/constants/local-storage-keys';
import { ADMIN_DASHBOARD_PATH } from '@/constants/app-routes';

type LoginValues = { email: string; password: string };

export async function handleAdminLogin(
  values: LoginValues,
  form: FormInstance,
  router: ReturnType<typeof import('next/navigation').useRouter>,
  setError: (msg: string | null) => void,
) {
  try {
    setError(null);

    await loginSchema.validate(values, { abortEarly: false });

    const response = await api.post(ADMIN_LOGIN_API_ENDPOINT, values);

    if (response.status === 200 && response.data?.token) {
      form.resetFields();
      toast.success('Login successful!');

      setStorage(AUTH_TOKEN_KEY, response.data.token);
      setStorage(ADMIN_AUTH_TOKEN_KEY, response.data.token);
      setStorage(ADMIN_PROFILE_KEY, response.data.admin);

      router.push(ADMIN_DASHBOARD_PATH);
    } else {
      toast.error('Unexpected response from server.');
    }
  } catch (err: any) {
    if (err.name === 'ValidationError' && err.inner) {
      const formErrors = err.inner.reduce((acc: any, curr: any) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      form.setFields(
        Object.entries(formErrors).map(([name, message]) => ({
          name,
          errors: [message as string],
        })),
      );
    } else {
      const errorMessage = err?.response?.data?.message || err?.message || 'Something went wrong.';
      setError(errorMessage);
      toast.error(errorMessage);
    }
  }
}
