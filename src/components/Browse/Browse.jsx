import React from "react";
import { Box, Button, Breadcrumbs, Grid, Link, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import styles from './Browse.module.scss'


const Browse = () => {
    const items = [
        {
            id: 1,
            name: '2017 Maruti Car',
            price: '1,000,000.00',
            imageUrl: '/Car.png',
            imageId: 'Browse-image',
            expired: true
        },
        {
            id: 2,
            name: '2021 LG Laptop',
            price: '2,000.00',
            imageUrl: '/Laptop.png ',
            imageId: 'Browse-image',
            expired: false 
        },
        {
            id: 3,
            name: '2015 Samsung Mobile',
            price: '2,500.00',
            imageUrl: '/Mobile.png ',
            imageId: 'Browse-image',
            expired: true
        }
    ];

const categories = [
    { name: 'Antiques', quantity: 0 , subcategories:['Equipments', 'Other Assets','Real Estates','Tools','Vehicles'] },
    { name: 'Automobiles', quantity: 0, subcategories:['Event Tickets','experiences','Other Items']},
    { name: 'Beauty Products', quantity: 0,subcategories:['Cars &Trucks','Damaged Cars &Trucks','MotorCycles','Other Vehicles','Parts & Accessories','Power Sports'] },
    { name: 'Boats', quantity: 3,},
    { name: 'Business & Industrials', quantity: 0,subcategories:['Amazon FireSticks','Apple ipod and Mp3','AV Accessories','Batteries & Chargers','Car Electronics','DJ Gear','DVD & Home Theatre','Gadgets','GPS Devices','Home Audio','MP3 accessories','Portable AV','Radios CB & Ham','Satellite Radio','Satellite,Cable TV','Telephones & Pagers','Televisions','Vintage Electronics','Wholesale Lots'] },
    { name: 'Cellphone and PDAs', quantity: 0, subcategories:['Agriculture & Forestry','Business for Sale','Construction','Electrical equipments','Fuel & Energy','Health Care','Industrial Supply','Manufacturing','Office','Other','Packing & Shipping','Printing &Graphics','Restaurant & Catering','Retail & Services']},
    { name: 'Clothing & Shoes', quantity: 0,subcategories:['Advice & Instructions','Artistic services','Custom Clothing','Graphic Design','Media Editing','Other Services','Printing','Restoration & Repair','Web Auction Services','Web Services'] },
    { name: 'Collectibles', quantity: 0,subcategories:['Equipments', 'Other Assets','Real Estates','Tools','Vehicles'] },
    { name: 'Computers', quantity: 0, subcategories:['Natural Hair','Syntetic Hair']},
    { name: 'Consumer Electronics', quantity: 0,subcategories:['Apple Computers','Desktop & Laptop Services','Desktop PCs','Drives & Storage','Keyboard & Mice','Laptops & Notebooks','Monitors & Projectors','Networking','Others','PC Components','Printer Supplies','Printers','Scanners','Servers','Software','Technology Books','Vintage Computing','Web Domains','wholesale Lots'] },
    { name: 'Everything Else', quantity: 0, subcategories:['Inside Home','Pet Supplies','Tools','Wedding & Party','Wholesale Lots','Yard & Garden']},
    { name: 'Goverment', quantity: 0, subcategories:['Excise & Fitness','Golf','Indoor Games','Others','Outdoor Sports','Team Sports','Tennis & Raquets','Water sports','Winter Sports'] },
    { name: 'Governmen-Owned Enterprises', quantity: 0, subcategories:['Antiquities(classical)','Architectural','Asian Antiques','Books,Manuscripts','Decorative Arts','Ethnographic Arts','Furniture','Maps,Atlasses,Globes','Maritime','Musical Instruments','Other Antiques','Periods, Styles','Primitives','Reproductions','Rugs,Carpets','Science&Medicine','Sewing','Silver','Textiles & Linens'] },
    { name: 'Health & Beauty', quantity: 0, subcategories:['Airline','Car Rentals','Cruises','Lodging','Luggages','Other Travel','Vacation Packages']},
    { name: 'Home & Garden', quantity: 0, subcategories:['Advertising','Animal','Animation Arts','Arcades','Autographs','Banks & Vendings','Barwares','Beads','Bottles & Insulators','Breweriana & Beer','Casino','Clocks','Comics','Cultures & Ethnicity','Decoratives','Disnyana','Fantacy','Furnture','Historical Memoribilia','Holiday Seasonals','Housewares','Knives & Blades','Lamps & Lighting','Linens & Fabric','Metalwear','Militaria','Paper','Pens & Writings','Pez & Keychains','Photographic Images','Pinbacks & Bobbles','Postcards','Radio & TVs','Religions & Spirituality','Rocks & Fossils','Science fiction','Science-Medical','sewing','Tobbaciana','Tools & Locks','Trading Cards','Transporation','Vanity','Vintage','Wholesale Lots']},
    { name: 'Real Estate', quantity: 0, subcategories:['Bath & Body','Coupons','Dietary & Nutrition','Fragrances','HairCare','Helath Care','Makeup','Massage','Medical & Mobility','Nails & Polish','Natural Remedies','Oral Care','OTC Medicine','Others','Shaving','SkinCare','Tanning Beds','tattos & Body Art','Vision care','Weight Management','Wholesale Lot'] },
    { name: 'Speciality services', quantity: 0, subcategories:['Commercial','Land','Manufactured Homes','Other Real estate','Residential','Timeshares for sale'] },
    { name: 'Sporting goods', quantity: 0, subcategories:['Bluetooth','CellPhone &PDA Accessories','Others','PDA & Pocket PCs','Phone & Sim cards','Wholesale Lots'] },
    { name: 'Tickets', quantity: 0, subcategories:['Boys','costumes','Cultural & ethnic','Dancewear','Girls','Infants & Toddlers','Mens accessories','Mens Clothing','Mens Accessories','Mens shoes','Uniforms','Unisex Clothing','Vintage','Wedding Apparel','Wholesale','womens accessories','womens clothing','womens shoes'] },
    { name: 'Travel', quantity: 0, subcategories:['Advertisement','Education & Learning','Funeral & Cementary','Genealogy','Information Products','Memberships','MetaPhysical','Mystery Auctions','Others','Personal Security','Religious','Rewards & Incentives','Test Auctions','Unused'] }
];

const regions = [
    { name: 'St Peter', quantity: 0 },
    { name: 'St Michael', quantity: 0 },
    { name: 'region C', quantity: 0 },
    { name: 'St Lucy', quantity: 0 },
    { name: 'St Phillip', quantity: 0 },
    { name: 'St John', quantity: 0 },
    { name: 'St George', quantity: 0 },
    { name: 'St James', quantity: 0 },
    { name: 'Region B', quantity: 0 },
    { name: 'St Joseph', quantity: 0 },
    { name: 'Region A', quantity: 0 },
    { name: 'St Andrew', quantity: 0 },
    { name: 'St Thomas', quantity: 0 },
    { name: 'Christ Church', quantity: 0 }
];

return (
    <Box className={styles.container}>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Sidebar categories={categories} regions={regions} />
            </Grid>
            <Grid item xs={9}>
                <Breadcrumbs className={styles.breadcrumb} arial-label='breadcrumb'>
                    <Link underline="hover" color='inherit' href="/">
                        Home
                    </Link>
                    <Link underline="hover" color='inherit' href="/">
                        Categories
                    </Link>
                    <Typography color="text.primary">Browse</Typography>
                </Breadcrumbs>
                <Grid container spacing={3}>
                    {items.map(item => (
                        <Grid item xs={4} key={item.id}>
                            <Paper className={styles.item}>
                                <img src={item.imageUrl} alt={item.name} />
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography>Current Bid: ${item.price}</Typography>
                                <Button className={styles.quickBid} variant='contained'>Quick Bid {item.price}</Button>
                                {item.expired && <Typography className={styles.expired}>Expired</Typography>}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    </Box>
);
};

export default Browse;