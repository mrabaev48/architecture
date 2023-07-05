import { Currency } from 'shared/const/common/Currency';
import { Country } from 'shared/const/common/Country';

export interface Profile {
    firstName: string;
    lastName: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}
