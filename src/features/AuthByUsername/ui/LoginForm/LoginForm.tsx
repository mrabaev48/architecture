import React, { FC, memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/login.slice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { password, username, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (username: string) => {
            dispatch(loginActions.setUsername(username));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (password: string) => {
            dispatch(loginActions.setPassword(password));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('authorizationFormTitle')} />
            {error && (
                <Text
                    text={t(error)}
                    theme={TextTheme.Error}
                />
            )}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('password')}
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.Outline}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}>
                {t('login')}
            </Button>
        </div>
    );
});
