import React, { FC, memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/login.slice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';

export interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    // const { password, username, error, isLoading } = useSelector(getLoginState);

    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    useEffect(() => {
        dispatch({ type: '@INIT loginForm reducer' });
        store.reducerManager.add('loginForm', loginReducer);

        return () => {
            dispatch({ type: '@DESTROY loginForm reducer' });
            store.reducerManager.remove('loginForm');
        };
        //  eslint-disable-next-line
    }, []);

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

export default LoginForm;
