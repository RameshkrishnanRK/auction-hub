import { GridViewOutlined } from '@mui/icons-material'
import { Box, FormControl, MenuItem, Select, Tab, Tabs, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import ListIcon from "@mui/icons-material/List";
import styles from './ControlPanel.scss'
import { filterByOptions, sortOptions } from './jsonData';
import GridView from './Products/GridView';
import ListView from './Products/ListView';

const ControlPanel = ({searchTerm}) => {
    const [view, setView] = useState('grid');
    const [status, setStatus] = useState('active');
    const [filter, setFilter] = useState('all');
    const [sortData, setSortData] = useState('');

    const handleViewChange = (event, newView) => {
        if (newView !== null) {
            setView(newView)
        }
    };

    const handleStatusChange = (event, newStatus) => {
        console.log("newStatus ", newStatus)
        setStatus(newStatus);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortData(event.target.value);
    };
    return (
        <div>
            <Box className={styles.controlPanel} display='flex' alignItems='center' justifyContent='space-evenly' style={{ borderRadius: '4px', backgroundColor: '#e6e6e6', height: '40px', padding: '10px' }}>
                <ToggleButtonGroup
                    color="primary"
                    value={view}
                    exclusive
                    onChange={handleViewChange}
                    aria-label="view"
                    className={styles.viewToggleGroup}
                    size='small'
                    sx={{
                        '& .MuiToggleButton-root': {
                          '&.Mui-selected': {
                            backgroundColor: '#1768ac', // Change background color when selected
                            color: '#ffffff', // Change text/icon color when selected
                          },
                          '&:not(.Mui-selected)': {
                            backgroundColor: '#ffffff', // Change background color when not selected
                            color: '#1768ac', // Change text/icon color when not selected
                          },
                        },
                      }}
                >
                    <ToggleButton
                        value='grid'
                        aria-label="grid view"
                        className={view === 'grid' ? 'active' : ''}
                        sx={{
                            backgroundColor: view === 'grid' ? '#1768ac' : '#ffffff',
                            color: view === 'grid' ? '#ffffff' : '#1768ac',

                        }}
                    >
                        <GridViewOutlined />
                    </ToggleButton>
                    <ToggleButton 
                    value='list' 
                    aria-label="list view" 
                    className={view === 'list' ? 'active' : ''}
                    sx={{
                        backgroundColor: view === 'list' ? '#ffffff' : '#1768ac',
                        color: view === 'list' ? '#1768ac' : '#ffffff',

                    }}
                    >
                        <ListIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
                <Tabs
                    value={status}
                    onChange={handleStatusChange}
                    aria-label="status tabs"
                    textColor="primary"
                    indicatorColor="primary"
                    sx={{
                        borderRadius: '5px', border: '1px solid #1768ac', '& .MuiTab-root': {
                            minWidth: 120, minHeight: 40, padding: 0, lineHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        },
                    }}
                >
                    <Tab value='active' label='Active' sx={{ backgroundColor: status === 'active' ? '#1768ac' : '#ffffff', '&.Mui-selected': { color: status === 'active' ? '#ffffff' : '#1768ac' } }} />
                    <Tab value='completed' label='Completed' sx={{ backgroundColor: status === 'completed' ? '#1768ac' : '#ffffff', '&.Mui-selected': { color: status === 'completed' ? '#ffffff' : '#1768ac' } }} />
                </Tabs>
                <Box display='flex' alignItems='center'>
                    <FormControl sx={{ m: 1, minWidth: 120, }} size='small'>
                        <Select 
                            value={filter}
                            onChange={handleFilterChange}
                            displayEmpty
                            // placeholder="Filter by"
                            className={styles.controlPanelSelect}
                            sx={{
                                backgroundColor: "#ffffff",
                            }}
                        >
                            {/* <MenuItem value='' disabled>
                            Filter By
                        </MenuItem> */}
                            {filterByOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                        <Select
                            value={sortData}
                            onChange={handleSortChange}
                            displayEmpty
                            // placeholder="Filter by"
                            className={styles.controlPanelSelect}
                            sx={{
                                backgroundColor: "#ffffff",
                            }}
                        >
                            <MenuItem value=''>
                                Sort By
                            </MenuItem>
                            {sortOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            {view === 'grid' ? <GridView searchTerm={searchTerm} status={status} filter={filter} sortData={sortData} /> : <ListView searchTerm={searchTerm} status={status} filter={filter} sortData={sortData} />}
        </div >
    );
};

export default ControlPanel