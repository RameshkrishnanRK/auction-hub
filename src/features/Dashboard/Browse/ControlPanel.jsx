import { GridViewOutlined } from '@mui/icons-material'
import { Box, MenuItem, Select, Tab, Tabs, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import ListIcon from "@mui/icons-material/List";
import styles from './ControlPanel.scss'
import { filterByOptions, sortOptions } from './data';
import GridView from './Products/GridView';
import ListView from './Products/ListView';

const ControlPanel = ({products}) => {
    const [view, setView] = useState('grid');
    const [status, setStatus] = useState('active');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    const handleViewChange = (event, newView) => {
        if (newView !== null) {
            setView(newView)
        }
    };

    const handleStatusChange = (event, newStatus) => {
        setStatus(newStatus);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };
    return (
        <div>
            <Box className={styles.controlPanel} display='flex' alignItems='center' justifyContent='space-evenly' style={{ borderRadius: '4px', backgroundColor: '#e6e6e6', height: '61px', padding: '10px' }}>
                <ToggleButtonGroup
                    color="primary"
                    value={view}
                    exclusive
                    onChange={handleViewChange}
                    aria-label="view"
                    className={styles.viewToggleGroup}
                >
                    <ToggleButton value='grid' aria-label="grid view" className={view === 'grid' ? 'active' : ''}>
                        <GridViewOutlined />
                    </ToggleButton>
                    <ToggleButton value='list' aria-label="list view" className={view === 'list' ? 'active' : ''}>
                        <ListIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
                <Tabs
                    value={status}
                    onChange={handleStatusChange}
                    aria-label="status tabs"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab value='active' label='Active' />
                    <Tab value='completed' label='Completed' />
                </Tabs>
                <Box display='flex' alignItems='center'>
                    <Select
                        value={filter}
                        onChange={handleFilterChange}
                        displayEmpty
                        // placeholder="Filter by"
                        className={styles.controlPanelSelect}
                    >
                        <MenuItem value='' disabled>
                            Filter By
                        </MenuItem>
                        {filterByOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                    <Select
                        value={sort}
                        onChange={handleSortChange}
                        displayEmpty
                        // placeholder="Filter by"
                        className={styles.controlPanelSelect}
                    >
                        <MenuItem value='' disabled>
                            Ending soon
                        </MenuItem>
                        {sortOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                </Box>
            </Box>
            {view === 'grid' ? <GridView products={products}/> : <ListView products={products}/>}
        </div>
    );
};

export default ControlPanel