import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class AuthService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/auth';

  login(payload: LoginCredentials): Promise<AxiosResponse> {
    const url = `${this.apiResource}/login`;
    return this.post({ payload, url });
  }

  me(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/me`;
    return this.get({ url });
  }
}

export default new AuthService();
