import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Application from "../Application";
import PostScreen from "../PostScreen";
import { MAIN_COLOR } from "../constants/layout";
import { Platform } from "react-native";

const PostNavigator = createStackNavigator(
  {
    Main: Application,
    Post: {
      screen: PostScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : MAIN_COLOR
    }
  }
);

export const AppNavigation = createAppContainer(PostNavigator);
