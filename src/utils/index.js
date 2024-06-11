
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// toolbars
const DATA_TOOLBAR = [
    {
        title: 'COFFEE',
        icon: <KeyboardArrowRightIcon />,
        description: {
            title: "Language",
            data: [
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'fr',
                    title: 'French',
                },
            ],
        }
    },
    {
        title: 'MENU',
        icon: <KeyboardArrowRightIcon />,
    },
    {
        title: 'ABOUT US',
        icon: <KeyboardArrowRightIcon />,
    },
    {
        title: 'FIND OUT MORE',
        
    }
];

// MDMenu
const HOT_COFFEES = [
    {
        title: 'Americano',
        image: require('~/assets/Images/Coffees/hots_americano.avif')
    },
    {
        title: 'Cappuccino',
        image: require('~/assets/Images/Coffees/hots_cappuccino.avif')
    },
    {
        title: 'Flat White',
        image: require('~/assets/Images/Coffees/hots_flatwhite.avif')
    },
    {
        title: 'Misto',
        image: require('~/assets/Images/Coffees/hots_misto.avif')
    },
    {
        title: 'Verona',
        image: require('~/assets/Images/Coffees/hots_verona.avif')
    }
];

const COLD_COFFEES = [
    {
        title: 'Cinnamon',
        image: require('~/assets/Images/Coffees/cold_cinnamon.avif')
    },
    {
        title: 'Brew',
        image: require('~/assets/Images/Coffees/cold_brew.avif')
    },
    {
        title: 'Espresso',
        image: require('~/assets/Images/Coffees/cold_espresso.avif')
    },
    {
        title: 'Hazelnut',
        image: require('~/assets/Images/Coffees/cold_hazelnut.avif')
    },
    {
        title: 'Macchiato',
        image: require('~/assets/Images/Coffees/cold_macchiato.avif')
    },
    {
        title: 'Milk',
        image: require('~/assets/Images/Coffees/cold_milk.avif')
    },
    {
        title: 'Pistachio',
        image: require('~/assets/Images/Coffees/cold_pistachio.avif')
    }
];
// end MDMenu

export {DATA_TOOLBAR, HOT_COFFEES, COLD_COFFEES};