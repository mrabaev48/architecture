import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Component for testing ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error('Hello');
        }
    }, [error]);

    return <Button onClick={onThrow}>{t('throwError')}</Button>;
};
