import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { paths } from "./src/paths";
import AccountScreen from "./src/screens/AccountScreen";
import CreateTrackScreen from "./src/screens/CreateTrackScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import LoadingScreen from "./src/screens/LoadingScreen";

const switchNavigator = createSwitchNavigator({
  loadingScreen: LoadingScreen,
  loginFlow: createStackNavigator({
    [paths.signin]: SigninScreen,
    [paths.signup]: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trachSwitchFlow: createStackNavigator({
      [paths.trackList]: TrackListScreen,
      [paths.trackDetails]: TrackDetailsScreen,
    }),
    [paths.createTrack]: CreateTrackScreen,
    [paths.account]: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
