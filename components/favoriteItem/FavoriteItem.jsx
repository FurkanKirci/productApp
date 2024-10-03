import { Context } from "@/context";
import { useRoute } from "@react-navigation/native"
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"


const FavoriteItem = ({ product }) => {
  const {handlePressRemoveItem} = useContext(Context); 
  return (
    <Pressable onPress={() => handlePressRemoveItem(product.id)}>
      <View style={styles.favoriteItem}>
        <Text style={styles.text}>{product.title}</Text>
        <Text style={styles.text}>{product.reason}</Text>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  favoriteItem: {
    padding: 20,
    backgroundColor: "#31ab69",
    marginVertical: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold"
  }
})
export default FavoriteItem
