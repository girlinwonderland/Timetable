import React, { Suspense } from 'react';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/hooks/useTheme';
import { Table } from 'entities/Table/Table';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx('app', [theme])}>
            <Suspense fallback="">
                <Table />
            </Suspense>
        </div>
    );
};
export default App;
