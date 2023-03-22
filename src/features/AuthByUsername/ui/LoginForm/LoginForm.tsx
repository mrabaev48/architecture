import React, { FC } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus={true}
                type={'text'}
                className={cls.input}
                placeholder={t('username')}
            />
            <Input
                placeholder={t('password')}
                type={'text'}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>{t('login')}</Button>
        </div>
    );
};
