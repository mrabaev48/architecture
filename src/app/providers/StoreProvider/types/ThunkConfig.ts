import { ThunkExtraArg } from './ThunkExtraArg';

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}
