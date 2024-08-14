export const productsData = [
    {
        id: 0,
        image: process.env.PUBLIC_URL + '/images/FarmHouse.jpg',
        title: '2024 Farm House ',
        currentBid: 100000000,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type:'auction'
    },
    {
        id: 1,
        image: process.env.PUBLIC_URL + '/images/villa.jfif',
        title: '2018 Private Villa at Drass',
        currentBid: 120000000,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type:'fixed-price'
    },
    {
        id: 2,
        image: process.env.PUBLIC_URL + '/images/Laptop.png',
        title: 'a 2021 LG Laptop',
        currentBid: 5000,
        timeRemaining: '4',
        isExpired: false,
        status: 'active',
        type:'fixed-price'
    },
    {
        id: 3,
        image: process.env.PUBLIC_URL + '/images/Mobile.png',
        title: '2015 Samsung Mobile',
        currentBid: 3800,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type:'auction'
    },
    {
        id: 4,
        image: process.env.PUBLIC_URL + '/images/Home.png',
        title: '2024 Luxury Home',
        currentBid: 3000000,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type:'classified'
    },
    {
        id: 5,
        image: process.env.PUBLIC_URL + '/images/Coffee.jpg',
        title: '2023 Coffe Estate',
        currentBid: 25000000,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type:'classified'
    },
    {
        id: 6,
        image: process.env.PUBLIC_URL + '/images/HomeRealEstate.jpg',
        title: 'c 2000 House For Sale',
        currentBid: 4000000,
        timeRemaining: '2',
        isExpired: false,
        status: 'active',
        type:'auction'
    },
    {
        id: 66,
        image: process.env.PUBLIC_URL + '/images/Oil painting.jfif',
        title: '19th Century Painting',
        currentBid: 800000,
        timeRemaining: '6',
        isExpired: false,
        status: 'active',
        type:'classified'
    },
    {
        id: 16,
        image: process.env.PUBLIC_URL + '/images/Car.png',
        title: 'b 2021 Maruti Car',
        currentBid: 175000,
        timeRemaining: '3',
        isExpired: false,
        status: 'active',
        type:'classified'
    },
    {
        id: 31,
        image: process.env.PUBLIC_URL + '/images/Home.png',
        title: '2021 Maruti Car',
        currentBid: 175000,
        timeRemaining: '1',
        isExpired: true,
        status: 'active',
        type:'auction'
    },
];

export const categoriesData = [
    { name: 'Antiques', quantity: 5, subcategories: ['Equipments', 'Other Assets', 'Real Estates', 'Tools', 'Vehicles'] },
    { name: 'Automobiles', quantity: 3, subcategories: ['Event Tickets', 'experiences', 'Other Items'] },
    { name: 'Beauty Products', quantity: 6, subcategories: ['Cars &Trucks', 'Damaged Cars &Trucks', 'MotorCycles', 'Other Vehicles', 'Parts & Accessories', 'Power Sports'] },
    { name: 'Boats', quantity: 0, },
    { name: 'Business & Industrials', quantity: 19, subcategories: ['Amazon FireSticks', 'Apple ipod and Mp3', 'AV Accessories', 'Batteries & Chargers', 'Car Electronics', 'DJ Gear', 'DVD & Home Theatre', 'Gadgets', 'GPS Devices', 'Home Audio', 'MP3 accessories', 'Portable AV', 'Radios CB & Ham', 'Satellite Radio', 'Satellite,Cable TV', 'Telephones & Pagers', 'Televisions', 'Vintage Electronics', 'Wholesale Lots'] },
    { name: 'Cellphone and PDAs', quantity: 14, subcategories: ['Agriculture & Forestry', 'Business for Sale', 'Construction', 'Electrical equipments', 'Fuel & Energy', 'Health Care', 'Industrial Supply', 'Manufacturing', 'Office', 'Other', 'Packing & Shipping', 'Printing &Graphics', 'Restaurant & Catering', 'Retail & Services'] },
    { name: 'Clothing & Shoes', quantity: 10, subcategories: ['Advice & Instructions', 'Artistic services', 'Custom Clothing', 'Graphic Design', 'Media Editing', 'Other Services', 'Printing', 'Restoration & Repair', 'Web Auction Services', 'Web Services'] },
    { name: 'Collectibles', quantity: 5, subcategories: ['Equipments', 'Other Assets', 'Real Estates', 'Tools', 'Vehicles'] },
    { name: 'Computers', quantity: 2, subcategories: ['Natural Hair', 'Syntetic Hair'] },
    { name: 'Consumer Electronics', quantity: 19, subcategories: ['Apple Computers', 'Desktop & Laptop Services', 'Desktop PCs', 'Drives & Storage', 'Keyboard & Mice', 'Laptops & Notebooks', 'Monitors & Projectors', 'Networking', 'Others', 'PC Components', 'Printer Supplies', 'Printers', 'Scanners', 'Servers', 'Software', 'Technology Books', 'Vintage Computing', 'Web Domains', 'wholesale Lots'] },
    { name: 'Everything Else', quantity: 6, subcategories: ['Inside Home', 'Pet Supplies', 'Tools', 'Wedding & Party', 'Wholesale Lots', 'Yard & Garden'] },
    { name: 'Goverment', quantity: 9, subcategories: ['Excise & Fitness', 'Golf', 'Indoor Games', 'Others', 'Outdoor Sports', 'Team Sports', 'Tennis & Raquets', 'Water sports', 'Winter Sports'] },
    { name: 'Governmen-Owned Enterprises', quantity: 19, subcategories: ['Antiquities(classical)', 'Architectural', 'Asian Antiques', 'Books,Manuscripts', 'Decorative Arts', 'Ethnographic Arts', 'Furniture', 'Maps,Atlasses,Globes', 'Maritime', 'Musical Instruments', 'Other Antiques', 'Periods, Styles', 'Primitives', 'Reproductions', 'Rugs,Carpets', 'Science&Medicine', 'Sewing', 'Silver', 'Textiles & Linens'] },
    { name: 'Health & Beauty', quantity: 7, subcategories: ['Airline', 'Car Rentals', 'Cruises', 'Lodging', 'Luggages', 'Other Travel', 'Vacation Packages'] },
    { name: 'Home & Garden', quantity: 44, subcategories: ['Advertising', 'Animal', 'Animation Arts', 'Arcades', 'Autographs', 'Banks & Vendings', 'Barwares', 'Beads', 'Bottles & Insulators', 'Breweriana & Beer', 'Casino', 'Clocks', 'Comics', 'Cultures & Ethnicity', 'Decoratives', 'Disnyana', 'Fantacy', 'Furnture', 'Historical Memoribilia', 'Holiday Seasonals', 'Housewares', 'Knives & Blades', 'Lamps & Lighting', 'Linens & Fabric', 'Metalwear', 'Militaria', 'Paper', 'Pens & Writings', 'Pez & Keychains', 'Photographic Images', 'Pinbacks & Bobbles', 'Postcards', 'Radio & TVs', 'Religions & Spirituality', 'Rocks & Fossils', 'Science fiction', 'Science-Medical', 'sewing', 'Tobbaciana', 'Tools & Locks', 'Trading Cards', 'Transporation', 'Vanity', 'Vintage', 'Wholesale Lots'] },
    { name: 'Real Estate', quantity: 21, subcategories: ['Bath & Body', 'Coupons', 'Dietary & Nutrition', 'Fragrances', 'HairCare', 'Helath Care', 'Makeup', 'Massage', 'Medical & Mobility', 'Nails & Polish', 'Natural Remedies', 'Oral Care', 'OTC Medicine', 'Others', 'Shaving', 'SkinCare', 'Tanning Beds', 'tattos & Body Art', 'Vision care', 'Weight Management', 'Wholesale Lot'] },
    { name: 'Speciality services', quantity: 6, subcategories: ['Commercial', 'Land', 'Manufactured Homes', 'Other Real estate', 'Residential', 'Timeshares for sale'] },
    { name: 'Sporting goods', quantity: 6, subcategories: ['Bluetooth', 'CellPhone &PDA Accessories', 'Others', 'PDA & Pocket PCs', 'Phone & Sim cards', 'Wholesale Lots'] },
    { name: 'Tickets', quantity: 18, subcategories: ['Boys', 'costumes', 'Cultural & ethnic', 'Dancewear', 'Girls', 'Infants & Toddlers', 'Mens accessories', 'Mens Clothing', 'Mens Accessories', 'Mens shoes', 'Uniforms', 'Unisex Clothing', 'Vintage', 'Wedding Apparel', 'Wholesale', 'womens accessories', 'womens clothing', 'womens shoes'] },
    { name: 'Travel', quantity: 14, subcategories: ['Advertisement', 'Education & Learning', 'Funeral & Cementary', 'Genealogy', 'Information Products', 'Memberships', 'MetaPhysical', 'Mystery Auctions', 'Others', 'Personal Security', 'Religious', 'Rewards & Incentives', 'Test Auctions', 'Unused'] }
];

export const regionsData = [
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

export const sortOptions = [
    // { value: 'ending-soon', label: 'Ending Soon' },
    // { value: 'newest', label: 'Newest' },
    { value: 'price-lowest', label: 'Price Lowest' },
    { value: 'price-highest', label: 'Price Highest' },
    { value: 'title-a-to-z', label: 'Title, A to Z' },
    { value: 'title-z-to-a', label: 'Title, Z to A' },
    // { value: 'listing-id-asc', label: 'Listing ID, 0 to 9' },
    // { value: 'listing-id-desc', label: 'Listing ID, 9 to 0' },
    // { value: 'acitivity-highest', label: 'Activity, Highest' },
    // { value: 'acitivity-lowest', label: 'Activity, Lowest' },
];

export const filterByOptions = [
    { value: 'all', label: 'Filter By' },
    { value: 'auction', label: 'Auction' },
    { value: 'fixed-price', label: 'Fixed Price' },
    { value: 'classified', label: 'Classified' },
];