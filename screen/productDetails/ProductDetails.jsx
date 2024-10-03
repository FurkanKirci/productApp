import { useRoute, useNavigation } from "@react-navigation/native"
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View, Modal, Pressable, TextInput } from "react-native"
import ProductDetailsItem from "@/components/productDetailsItem/ProductDetailsItem"
import { Context } from "@/context";
const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState("");
  const {addToFavorites,favoriteProducts} = useContext(Context);
  useEffect(() => {
    setLoading(true)
    const getOneProduct = async () => {
      const apiRes = await fetch(`https://dummyjson.com/products/${route.params.productId}`)
      const jsonRes = await apiRes.json();
      if (jsonRes) {
        setLoading(false)
        setSelectedProduct(jsonRes);
      }
    }
    getOneProduct();
  }, [])
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button title={favoriteProducts?.find((item)=> item.id === route.params.productId) ? "Update Favorite" : "Add Favorite"} onPress={() => setModalVisible(true)}></Button>
        )
      }
    })
  }, [favoriteProducts])
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={"blue"} size={'large'}></ActivityIndicator>
      </View>
    )
  }
  return (
    <View>
      <ProductDetailsItem product={selectedProduct}></ProductDetailsItem>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.textInput} onChangeText={(e) => setInput(e)} value={input} placeholder="Favorilere Ekleme Nedenim..."></TextInput>
            <View style={styles.buttonWrapper}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() =>{ 
                  addToFavorites(route.params.productId, input);
                  setModalVisible(!modalVisible)}}>
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput:{
    borderWidth:1,
    borderColor:"#000",
    padding:5,
    fontSize:15,
    fontWeight:"600",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:"80%",
    marginTop:25,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    width: 80,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
export default ProductDetails
