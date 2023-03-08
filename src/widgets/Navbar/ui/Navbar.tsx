import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const { t } = useTranslation('menuItems');
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.Secondary}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('mainPage')}
                </AppLink>
                <AppLink theme={AppLinkTheme.Secondary} to="/about">
                    {t('aboutPage')}
                </AppLink>
            </div>
        </div>
    );
};
