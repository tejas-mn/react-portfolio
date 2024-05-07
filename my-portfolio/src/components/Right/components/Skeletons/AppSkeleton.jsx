import * as React from 'react';
import './../../../../App.css';
import LeftSkeleton from './LeftSkeleton';
import { useTheme } from '../../../../Providers/ThemeProvider';
import { useEffect } from 'react';
import { RightSkeleton } from './RightSkeleton';
import { NavBarSkeleton } from './NavBarSkeleton';

export default function AppSkeleton() {
    const { theme } = useTheme();
    const bg = {
        "light-theme": "var(--index-bg-light)",
        "dark-theme": "var(--index-bg-dark)",
    };
    useEffect(() => {
        document.querySelector("body").style.background = bg[theme];
    }, [theme]);

    return (
        <div className={`App ${theme}`}>
            <div data-testid="left" className="left">
                <LeftSkeleton />
            </div>

            <div data-testid="right" className="right">
                <RightSkeleton />
            </div>

            <div className="mobile-nav">
                <NavBarSkeleton />
            </div>
        </div>
    );
}