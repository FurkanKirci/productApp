import { Context } from '@/context'
import { useContext } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import FavoriteItem from "@/components/favoriteItem/FavoriteItem"
const Favorites = () => {
  const { favoriteProducts } = useContext(Context);
  if (favoriteProducts.length === 0) {
    return (
      <View style={styles.noFavorite}>
        <Text style={styles.noFavoriteText}>No favorites added</Text>
      </View>
    )
  }
  return (
    <View>
      <FlatList
        keyExtractor={(itemData) => itemData.id}
        data={favoriteProducts}
        renderItem={(itemData) => <FavoriteItem product={itemData.item}
        ></FavoriteItem>}
      ></FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
  noFavorite: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
  },
  noFavoriteText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  }
})
export default Favorites
