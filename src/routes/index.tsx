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
      path: '/pickerWheel',
      element: <PickerWheel/>
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


