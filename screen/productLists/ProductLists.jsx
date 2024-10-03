import { Context } from "@/context";
import { useContext } from "react"
import { ActivityIndicator, Text, View, StyleSheet, FlatList } from "react-native"
import ProductListItem from "@/components/productListItem/ProductListItem"
import { useNavigation } from "@react-navigation/native";
const ProductLists = () => {
  const { loading, products } = useContext(Context);
  const navigation = useNavigation();
  const handleOnPress = (productId) => {
    navigation.navigate('productDetails',{
      productId:productId,
    });
  }
  if (loading) {
    <ActivityIndicator style={styles.loader} color={"blue"} size={'large'}></ActivityIndicator>
  }
  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => <ProductListItem
          title={itemData.item.title}
          onPress={()=>handleOnPress(itemData.item.id)}
        ></ProductListItem>}
        keyExtractor={(itemData) => itemData.id}
        numColumns={2}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
export default ProductLists
