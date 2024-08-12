export const productsData = [
    {
        id: 0,
        image: process.env.PUBLIC_URL + '/images/FarmHouse.jpg',
        title: '2024 Farm House',
        currentBid: 100000000,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type: 'auction',
        category: 'Real Estate',
        subcategory: 'Villas',
        region: 'St Peter',
        subregion: 'Subregion 1'
    },
    {
        id: 1,
        image: process.env.PUBLIC_URL + '/images/villa.jfif',
        title: '2018 Private Villa at Drass',
        currentBid: 120000000,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type: 'fixed-price',
        category: 'Real Estate',
        subcategory: 'Independent Houses',
        region: 'St Michael',
        subregion: 'Subregion 2'
    },
    {
        id: 2,
        image: process.env.PUBLIC_URL + '/images/Laptop.png',
        title: '2021 LG Laptop',
        currentBid: 5000,
        timeRemaining: '4',
        isExpired: false,
        status: 'active',
        type: 'fixed-price',
        category: 'Consumer Electronics',
        subcategory: 'Laptops',
        region: 'Region C',
        subregion: 'Subregion 1'
    },
    {
        id: 3,
        image: process.env.PUBLIC_URL + '/images/Mobile.png',
        title: '2015 Samsung Mobile',
        currentBid: 3800,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type: 'auction',
        category: 'Cellphone and PDAs',
        subcategory: 'Other',
        region: 'St Lucy',
        subregion: 'Subregion 1'
    },
    {
        id: 4,
        image: process.env.PUBLIC_URL + '/images/Home.png',
        title: '2024 Luxury Home',
        currentBid: 3000000,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type: 'classified',
        category: 'Real Estate',
        subcategory: 'Flats',
        region: 'St Phillip',
        subregion: 'Subregion 2'
    },
    {
        id: 5,
        image: process.env.PUBLIC_URL + '/images/Coffee.jpg',
        title: '2023 Coffee Estate',
        currentBid: 25000000,
        timeRemaining: 'Expired',
        isExpired: true,
        status: 'completed',
        type: 'classified',
        category: 'Real Estate',
        subcategory: 'Agriculture Lands',
        region: 'St John',
        subregion: 'Subregion 3'
    },
    {
        id: 6,
        image: process.env.PUBLIC_URL + '/images/HomeRealEstate.jpg',
        title: '2000 House For Sale',
        currentBid: 4000000,
        timeRemaining: '2',
        isExpired: false,
        status: 'active',
        type: 'auction',
        category: 'Real Estate',
        subcategory: 'Independent Houses',
        region: 'St George',
        subregion: 'Subregion 2'
    },
    {
        id: 66,
        image: process.env.PUBLIC_URL + '/images/Oil painting.jfif',
        title: '19th Century Trucks',
        currentBid: 800000,
        timeRemaining: '6',
        isExpired: false,
        status: 'active',
        type: 'classified',
        category: 'Antiques',
        subcategory: 'Other Assets',
        region: 'St Andrew',
        subregion: 'Subregion 1'
    },
    {
        id: 16,
        image: process.env.PUBLIC_URL + '/images/Car.png',
        title: '2021 Maruti Cars',
        currentBid: 175000,
        timeRemaining: '3',
        isExpired: false,
        status: 'active',
        type: 'classified',
        category: 'Automobiles',
        subcategory: 'Cars',
        region: 'St Thomas',
        subregion: 'Subregion 3'
    },
    {
        id: 31,
        image: process.env.PUBLIC_URL + '/images/Home.png',
        title: '2021 Maruti Cars',
        currentBid: 175000,
        timeRemaining: '1',
        isExpired: true,
        status: 'active',
        type: 'auction',
        category: 'Automobiles',
        subcategory: 'Cars',
        region: 'Christ Church',
        subregion: 'Subregion 4'
    },
];

export const categoriesData = [
    {
        name: 'Antiques',
        quantity: 5,
        subcategories: [
            { name: 'Equipments' },
            { name: 'Other Assets' },
            { name: 'Real Estates' },
            { name: 'Tools' },
            { name: 'Vehicles' }
        ]
    },
    {
        name: 'Automobiles',
        quantity: 3,
        subcategories: [
            { name: 'Cars' },
            { name: 'Trucks' },
            { name: 'Tractors' }
        ]
    },
    {
        name: 'Beauty Products',
        quantity: 6,
        subcategories: [
            { name: 'Cars & Trucks' },
            { name: 'Damaged Cars & Trucks' },
            { name: 'MotorCycles' },
            { name: 'Other Vehicles' },
            { name: 'Parts & Accessories' },
            { name: 'Power Sports' }
        ]
    },
    {
        name: 'Boats',
        quantity: 0,
        subcategories: []
    },
    {
        name: 'Business & Industrials',
        quantity: 19,
        subcategories: [
            { name: 'Amazon FireSticks' },
            { name: 'Apple iPod and MP3' },
            { name: 'AV Accessories' },
            { name: 'Batteries & Chargers' },
            { name: 'Car Electronics' },
            { name: 'DJ Gear' },
            { name: 'DVD & Home Theatre' },
            { name: 'Gadgets' },
            { name: 'GPS Devices' },
            { name: 'Home Audio' },
            { name: 'MP3 Accessories' },
            { name: 'Portable AV' },
            { name: 'Radios CB & Ham' },
            { name: 'Satellite Radio' },
            { name: 'Satellite, Cable TV' },
            { name: 'Telephones & Pagers' },
            { name: 'Televisions' },
            { name: 'Vintage Electronics' },
            { name: 'Wholesale Lots' }
        ]
    },
    {
        name: 'Cellphone and PDAs',
        quantity: 14,
        subcategories: [
            { name: 'Agriculture & Forestry' },
            { name: 'Business for Sale' },
            { name: 'Construction' },
            { name: 'Electrical Equipments' },
            { name: 'Fuel & Energy' },
            { name: 'Health Care' },
            { name: 'Industrial Supply' },
            { name: 'Manufacturing' },
            { name: 'Office' },
            { name: 'Other' },
            { name: 'Packing & Shipping' },
            { name: 'Printing & Graphics' },
            { name: 'Restaurant & Catering' },
            { name: 'Retail & Services' }
        ]
    },
    {
        name: 'Clothing & Shoes',
        quantity: 10,
        subcategories: [
            { name: 'Advice & Instructions' },
            { name: 'Artistic Services' },
            { name: 'Custom Clothing' },
            { name: 'Graphic Design' },
            { name: 'Media Editing' },
            { name: 'Other Services' },
            { name: 'Printing' },
            { name: 'Restoration & Repair' },
            { name: 'Web Auction Services' },
            { name: 'Web Services' }
        ]
    },
    {
        name: 'Collectibles',
        quantity: 5,
        subcategories: [
            { name: 'Equipments' },
            { name: 'Other Assets' },
            { name: 'Real Estates' },
            { name: 'Tools' },
            { name: 'Vehicles' }
        ]
    },
    {
        name: 'Computers',
        quantity: 2,
        subcategories: [
            { name: 'Natural Hair' },
            { name: 'Synthetic Hair' }
        ]
    },
    {
        name: 'Consumer Electronics',
        quantity: 7,
        subcategories: [
            { name: 'Desktops' },
            { name: 'Laptops' },
            { name: 'Tabs' },
            { name: 'Monitors' },
            { name: 'Printers' },
            { name: 'Scanners' },
            { name: 'Servers' }
        ]
    },
    {
        name: 'Everything Else',
        quantity: 6,
        subcategories: [
            { name: 'Inside Home' },
            { name: 'Pet Supplies' },
            { name: 'Tools' },
            { name: 'Wedding & Party' },
            { name: 'Wholesale Lots' },
            { name: 'Yard & Garden' }
        ]
    },
    {
        name: 'Government',
        quantity: 9,
        subcategories: [
            { name: 'Excise & Fitness' },
            { name: 'Golf' },
            { name: 'Indoor Games' },
            { name: 'Others' },
            { name: 'Outdoor Sports' },
            { name: 'Team Sports' },
            { name: 'Tennis & Rackets' },
            { name: 'Water Sports' },
            { name: 'Winter Sports' }
        ]
    },
    {
        name: 'Real Estate',
        quantity: 4,
        subcategories: [
            { name: 'Villas' },
            { name: 'Flats' },
            { name: 'Independent Houses' },
            { name: 'Agriculture Lands' }
        ]
    },
    {
        name: 'Health & Beauty',
        quantity: 7,
        subcategories: [
            { name: 'Airline' },
            { name: 'Car Rentals' },
            { name: 'Cruises' },
            { name: 'Lodging' },
            { name: 'Luggages' },
            { name: 'Other Travel' },
            { name: 'Vacation Packages' }
        ]
    },
    {
        name: 'Home & Garden',
        quantity: 44,
        subcategories: [
            { name: 'Advertising' },
            { name: 'Animal' },
            { name: 'Animation Arts' },
            { name: 'Arcades' },
            { name: 'Autographs' },
            { name: 'Banks & Vending' },
            { name: 'Barware' },
            { name: 'Beads' },
            { name: 'Bottles & Insulators' },
            { name: 'Breweriana & Beer' },
            { name: 'Casino' },
            { name: 'Clocks' },
            { name: 'Comics' },
            { name: 'Cultures & Ethnicity' },
            { name: 'Decoratives' },
            { name: 'Disneyana' },
            { name: 'Fantasy' },
            { name: 'Furniture' },
            { name: 'Historical Memorabilia' },
            { name: 'Holiday Seasonal' },
            { name: 'Housewares' },
            { name: 'Knives & Blades' },
            { name: 'Lamps & Lighting' },
            { name: 'Linens & Fabric' },
            { name: 'Metalware' },
            { name: 'Militaria' },
            { name: 'Paper' },
            { name: 'Pens & Writing' },
            { name: 'Pez & Keychains' },
            { name: 'Photographic Images' },
            { name: 'Pinbacks & Bobbles' },
            { name: 'Postcards' },
            { name: 'Radio & TVs' },
            { name: 'Religions & Spirituality' },
            { name: 'Rocks & Fossils' },
            { name: 'Science Fiction' },
            { name: 'Science-Medical' },
            { name: 'Sewing' },
            { name: 'Tobacciana' },
            { name: 'Tools & Locks' },
            { name: 'Trading Cards' },
            { name: 'Transportation' },
            { name: 'Vanity' },
            { name: 'Vintage' },
            { name: 'Wholesale Lots' }
        ]
    },
    {
        name: 'Specialty Services',
        quantity: 6,
        subcategories: [
            { name: 'Commercial' },
            { name: 'Land' },
            { name: 'Manufactured Homes' },
            { name: 'Other Real Estate' },
            { name: 'Residential' },
            { name: 'Timeshares for Sale' }
        ]
    },
    {
        name: 'Sporting Goods',
        quantity: 6,
        subcategories: [
            { name: 'Bluetooth' },
            { name: 'CellPhone & PDA Accessories' },
            { name: 'Others' },
            { name: 'PDA & Pocket PCs' },
            { name: 'Phone & SIM Cards' },
            { name: 'Wholesale Lots' }
        ]
    },
    {
        name: 'Tickets',
        quantity: 18,
        subcategories: [
            { name: 'Boys' },
            { name: 'Costumes' },
            { name: 'Cultural & Ethnic' },
            { name: 'Dancewear' },
            { name: 'Girls' },
            { name: 'Infants & Toddlers' },
            { name: 'Men\'s Accessories' },
            { name: 'Men\'s Clothing' },
            { name: 'Men\'s Shoes' },
            { name: 'Uniforms' },
            { name: 'Unisex Clothing' },
            { name: 'Vintage' },
            { name: 'Wedding Apparel' },
            { name: 'Wholesale' },
            { name: 'Women\'s Accessories' },
            { name: 'Women\'s Clothing' },
            { name: 'Women\'s Shoes' }
        ]
    },
    {
        name: 'Travel',
        quantity: 14,
        subcategories: [
            { name: 'Advertisement' },
            { name: 'Education & Learning' },
            { name: 'Funeral & Cemetery' },
            { name: 'Genealogy' },
            { name: 'Information Products' },
            { name: 'Memberships' },
            { name: 'Metaphysical' },
            { name: 'Mystery Auctions' },
            { name: 'Others' },
            { name: 'Personal Security' },
            { name: 'Religious' },
            { name: 'Rewards & Incentives' },
            { name: 'Test Auctions' },
            { name: 'Unused' }
        ]
    }
];

export const regionsData = [
    {
        name: 'St Peter',
        quantity: 2,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' }
        ]
    },
    {
        name: 'St Michael',
        quantity: 3,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' },
            { name: 'Subregion 3' }
        ]
    },
    {
        name: 'Region C',
        quantity: 1,
        subregions: [
            { name: 'Subregion 1' }
        ]
    },
    {
        name: 'St Lucy',
        quantity: 2,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' }
        ]
    },
    {
        name: 'St Phillip',
        quantity: 2,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' }
        ]
    },
    {
        name: 'St John',
        quantity: 3,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' },
            { name: 'Subregion 3' }
        ]
    },
    {
        name: 'St George',
        quantity: 2,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' }
        ]
    },
    {
        name: 'St James',
        quantity: 1,
        subregions: [
            { name: 'Subregion 1' }
        ]
    },
    {
        name: 'Region B',
        quantity: 4,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' },
            { name: 'Subregion 3' },
            { name: 'Subregion 4' }
        ]
    },
    {
        name: 'St Joseph',
        quantity: 3,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' },
            { name: 'Subregion 3' }
        ]
    },
    {
        name: 'Region A',
        quantity: 2,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' }
        ]
    },
    {
        name: 'St Andrew',
        quantity: 2,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' }
        ]
    },
    {
        name: 'St Thomas',
        quantity: 3,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' },
            { name: 'Subregion 3' }
        ]
    },
    {
        name: 'Christ Church',
        quantity: 4,
        subregions: [
            { name: 'Subregion 1' },
            { name: 'Subregion 2' },
            { name: 'Subregion 3' },
            { name: 'Subregion 4' }
        ]
    }
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