export type { Profile } from './model/types/Profile';
export type { ProfileSchema } from './model/types/ProfileSchema';
export { profileReducer, profileActions } from './model/slice/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';
