import { SidebarItemType } from 'widgets/Sidebar/model/types/SidebarItemType';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-20-20.svg';
import AboutPageIcon from 'shared/assets/icons/about-20-20.svg';
import ProfilePageIcon from 'shared/assets/icons/profile.svg';

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainPageIcon,
        text: 'Main',
    },
    {
        path: RoutePath.about,
        Icon: AboutPageIcon,
        text: 'About',
    },
    {
        path: RoutePath.profile,
        Icon: ProfilePageIcon,
        text: 'Profile',
    },
];
