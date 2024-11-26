import Home from "../components/Home/Home";
import Randomizer from "../components/Randomizer/Randomizer";
import PickerWheel from "../components/PickerWheel";
import RandomPokemon from "../components/Randomizer/RandomPokemon";
import RandomCountry from "../components/Randomizer/country/RandomCountry";
import { Navigate } from "react-router-dom";
import SettingPage from "../components/setting/SettingPage";
import AboutPage from "../components/about";

  const routes = [
    {
      path: '/home',
      element: <Home/>
    },

    {
      path: '/pickerwheel',
      element: <PickerWheel/>
    },

    {
      path: '/pickerwheel/fitnessfortune',
      element: <PickerWheel/>
    },

    {
      path: '/pickerwheel/yesorno',
      element: <PickerWheel />
    },

    {
      path: '/pickerwheel/randomnflteams',
      element: <PickerWheel />
    },

    {
      path: '/pickerwheel/random-mlb-team',
      element: <PickerWheel />
    },

    {
      path: '/pickerwheel/popularcities',
      element: <PickerWheel />
    },

    {
      path: '/pickerwheel/rockpaperscissors',
      element: <PickerWheel />
    },

    {
      path: '/randomizer',
      children: [
        {
          path: '/randomizer/randomCountry',
          element: <RandomCountry/>
        },
        {
          path: '/randomizer/randompokemon',
          element: <RandomPokemon/>
        },
        
      ],
      
    },

    {
      path: '/setting',
      element: <SettingPage/>
    },

    {
      path: '/about',
      element: <AboutPage/>
    },


    {
      path: '/',
      element: <Navigate to="/home"/>
    }
  ]

  export default routes;




// random nba player generator​
// random us state generator​

// "Keyword"	"Vol"	"CPC"	"Comp"	"Nov 2023"	"Dec 2023"	"Jan 2024"	"Feb 2024"	"Mar 2024"	"Apr 2024"	"May 2024"	"Jun 2024"	"Jul 2024"	"Aug 2024"	"Sep 2024"	"Oct 2024"
// "random golf club"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""
// "random google classroom codes"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""
// "random golf club generator"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""
// "random god generator"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""
// "random google meet codes"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""
// "random god name generator"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""
// "random goosebumps"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""
// "random google classroom codes 2024"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""
// "random google search"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""
// "random google games"	"-"	"-"	"-"	""	""	""	""	""	""	""	""	""	""	""	""