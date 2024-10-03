import { StyleSheet, Text, View } from 'react-native'

const ProductDetailsItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{product?.title}</Text>
      <Text style={styles.textStyle}>{product?.description}</Text>
      <Text style={styles.textStyle}>{product?.price}</Text>
      <Text style={styles.textStyle}>{product?.rating}</Text>
      <Text style={styles.textStyle}>{product?.category}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius:10,
    backgroundColor:"#76a8fc",
    padding: 30,
    paddingHorizontal: 15,
    borderWidth: 1,
    margin: 10,
    borderColor: "#000",
  },
  textStyle: {
    color: "#fff",
    fontSize:20,
    paddingBottom:12,
  }
})

export default ProductDetailsItem
