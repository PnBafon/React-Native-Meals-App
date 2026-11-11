import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          
          headerStyle: { backgroundColor: "#e2a024" },
          headerTintColor: "white",
          sceneContentStyle: { backgroundColor: "#af9240" },
        }}
      >
        <Drawer.Screen name="Categories" component={CategoriesScreen} options={{title:'All Categories'}} />
        <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{title:'My Favorites'}} />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            
            headerStyle: { backgroundColor: "#e2a024" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#af9240" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            options={{ headerShown: false }}
            component={DrawerNavigator}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
