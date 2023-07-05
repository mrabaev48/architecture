import { FC, memo } from 'react';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from '../../model/types/SidebarItemType';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
    ({ item, collapsed = false }) => {
        const { t } = useTranslation();
        return (
            <AppLink
                theme={AppLinkTheme.Secondary}
                to={item.path}
                className={classNames(
                    cls.item,
                    { [cls.collapsed]: collapsed },
                    []
                )}>
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        );
    }
);
