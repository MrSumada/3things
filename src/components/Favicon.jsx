import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Favicon = ({ TasksRemaining}) => {

    useEffect(() => {
        
        const newPrefix = `/${TasksRemaining}/`;

        const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
        if (appleIcon) {
        appleIcon.href = `/3things${newPrefix}apple-touch-icon.png`;
        }

        // Update the 32x32 favicon
        const favicon32 = document.querySelector('link[rel="icon"][sizes="32x32"]');
        if (favicon32) {
        setTimeout(() => favicon32.href = `/3things${newPrefix}favicon-32x32.png`, 10)
        }

        // Update the 16x16 favicon
        const favicon16 = document.querySelector('link[rel="icon"][sizes="16x16"]');
        if (favicon16) {
        setTimeout(() => favicon16.href = `/3things${newPrefix}favicon-16x16.png`, 10)
        }
    }, [TasksRemaining])

    return (
        <></>
    )
}

export default Favicon;