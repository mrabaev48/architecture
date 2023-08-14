import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}
