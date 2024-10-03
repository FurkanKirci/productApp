import { Pressable, StyleSheet, Text, View } from 'react-native'

const ProductListItem = ({ title, onPress }) => {
  return (
    <View style={styles.productItemContainer}>
      <Pressable onPress={onPress} android_ripple={{color:"#02d6c8"}} style={styles.pressableView}>
        <View style={styles.productItemInnerContainer}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  productItemContainer: {
    backgroundColor: "#fbfbfb",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    flex: 1,
    margin: 10,
    height: 160,
    borderRadius: 10,
  },
  pressableView: {
    flex: 1
  },
  productItemInnerContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  }
})
export default ProductListItem
