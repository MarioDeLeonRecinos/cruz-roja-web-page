import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class ModalityService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/modalidad';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new ModalityService();
