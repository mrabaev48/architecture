import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(
    ({ className = '', short }: LangSwitcherProps) => {
        const { t, i18n } = useTranslation();

        const toggle = () => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return (
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ButtonTheme.Clear}
                onClick={toggle}>
                {t(short ? 'shortLanguage' : 'language')}
            </Button>
        );
    }
);
