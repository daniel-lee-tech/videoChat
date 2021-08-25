import React from 'react';
import './DefaultLayout.css';

interface DefaultLayoutProps {
    children: React.ReactChild[];
}

const DefaultLayout : (props: DefaultLayoutProps) => JSX.Element = ({children}) => {
    return <div className="Layout">
        {children}
    </div>
}

export {DefaultLayout}