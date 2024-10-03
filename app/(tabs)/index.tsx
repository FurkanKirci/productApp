import { StyleSheet, View, Text } from 'react-native';
import ProductLists from "../../screen/productLists/ProductLists"
import Favorites from "../../screen/favorites/Favorites"
import ProductDetails from "../../screen/productDetails/ProductDetails"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProductContext from "@/context/index"
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ title: "Product List" }} name='productLists' component={ProductLists}></Tab.Screen>
      <Tab.Screen options={{ title: "Favorites" }} name='favorites' component={Favorites}></Tab.Screen>
    </Tab.Navigator>
  )
}
export default function HomeScreen() {
  return (
    <ProductContext>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='bottomTabs' component={BottomTabs}></Stack.Screen>
          <Stack.Screen options={{ title: "Product Details" }} name='productDetails' component={ProductDetails}></Stack.Screen>
        </Stack.Navigator>
      </View>
    </ProductContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
