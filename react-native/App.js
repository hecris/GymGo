import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen.js';
import GymScreen from './screens/GymScreen.js';

const App = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Gym: { screen:GymScreen },
  },
  {
    initialRouteName: 'Home'
  },
);

export default createAppContainer(App);