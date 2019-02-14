import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen.js';
import GymScreen from './screens/GymScreen.js';
import ShopScreen from './screens/ShopScreen.js';

const App = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Gym: { screen: GymScreen },
    Shop: { screen: ShopScreen },
  },
  {
    initialRouteName: 'Home'
  },
);

export default createAppContainer(App);
