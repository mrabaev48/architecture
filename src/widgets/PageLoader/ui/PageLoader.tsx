import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import cls from './PageLoader.module.scss';
import { memo } from 'react';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className = '' }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
));
