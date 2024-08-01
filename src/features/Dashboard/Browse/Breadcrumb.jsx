import { Breadcrumbs, Link, Typography } from '@mui/material'
import styles from './Breadcrumb.module.scss'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const pathSegments = pathname.split('/').filter((segment) => segment);
    return (
        <Breadcrumbs className={styles.breadcrumb} arial-label='breadcrumb'>
            <Link to="/">
                Home
            </Link>
            {pathSegments.map((segment, index) => {
                const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
                return (
                    <Link to={to}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </Link>
                )
            })}
            {/* <Typography color="text.primary" href="/browse">Browse</Typography> */}
        </Breadcrumbs>
    )
}

export default Breadcrumb