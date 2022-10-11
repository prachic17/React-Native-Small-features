/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, Fragment, useContext, createContext, } from 'react';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import _ from "lodash";


import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Button,

} from 'react-native';
const Stack = createNativeStackNavigator();
const dataCart = createContext();
const priceContext = createContext();



function Cart({ navigation }) {
  const cartData = useContext(dataCart);
  const pricedata = useContext(priceContext)
  const unique = _.uniqBy(cartData[0], elem => [elem.name, elem.name].join());

  return (
    <Fragment>
      <View>
        <Text style={styles.headingCart}>
          LA PIZZERIA
        </Text>

      </View>
      <View style={styles.cartBG}>{unique.length == 0 ?
        <Image
          style={styles.imageCart}
          source={require('./assests/empty.jpg')}
        /> :
        <Fragment>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={unique}
            renderItem={({ item, index }) =>
              <View style={styles.Cartcontainer}>
                <View style={styles.cartRow}>
                  <View style={styles.rowContent}>
                    <Text style={styles.cartName}>{item.name}</Text>
                  </View>
                  <View style={styles.rowContent}>
                    <Text style={styles.cartCount}>{item.count}</Text>
                  </View>
                  <View style={styles.rowContent}>
                    <Text style={styles.cartPrice}>₹{item.count * item.price}</Text>
                  </View>
                </View>
              </View>
            }
          />
          <View style={styles.bill}>
            <Text  style={styles.billdetails}>Bill Details</Text>
            <Text  style={styles.billdetails}>₹{pricedata[0]}</Text>
          </View>
          
        </Fragment>

      }
      </View>

      <Button
        title={unique.length==0?"Add" : "Proceed"}
        color="red"
        onPress={() => navigation.navigate('LA Pizzeria')}></Button>
    </Fragment>

  )
};



function Home({ navigation }) {
  const valutedata2 = useContext(dataCart)
  const totalP2 = useContext(priceContext)

  const [data, setdata] = useState([
    {
      img: require("./assests/marg.png"),
      name: "Margherita Pizza",
      price: 119,
      count: null
    },
    {
      img: require("./assests/cb.png"),
      name: "Bell Pepper Pizza",
      price: 129,
      count: null
    },
    {
      img: require("./assests/sevencheeseee.png"),
      name: "Cheezy-7 Pizza",
      price: 229,
      count: null
    },
    {
      img: require("./assests/farmv.png"),
      name: "Farm Villa Pizza",
      price: 189,
      count: null
    },
    {
      img: require("./assests/pestob.png"),
      name: "Pesto and Basil Special Pizza",
      price: 299,
      count: null
    },
    {
      img: require("./assests/non.png"),
      name: "Non-Veg Supreme Pizza",
      price: 399,
      count: null
    }
  ]);

  const [quantity, setquantity] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);
  let [finalCart, setfinalCart] = useState([]);

  const addToCart = (index) => {
    console.log(index)
    let k = data;
    k[index].count = k[index].count + 1
    console.log(k[index].count)
    
    
    setdata(k=>[...k])
    console.log(data)
    let tp = totalPrice + k[index].price
    settotalPrice(tp)
    setquantity(quantity + 1)
    setdata(k)
    setfinalCart(finalCart => [...finalCart, k[index]])

  }

  const increament = (index) => {
    let k = data;
    k[index].count = k[index].count + 1;
    let tp = totalPrice + k[index].price
    settotalPrice(tp)
    setquantity(quantity + 1)
    setdata(k)
    setfinalCart(finalCart => [...finalCart, k[index]])
  }

  const decreament = (index) => {
    let k = data;
    let final = [...finalCart]
    k[index].count = k[index].count - 1;
    let tp = totalPrice - k[index].price
    settotalPrice(tp)
    setdata(k)
    setquantity(quantity - 1)
    final.splice(index, 1)
    setfinalCart(final=>[...final])
  }


  return (
    <Fragment>
      <FlatList
        numColumns={2}
        key={2}
        style={styles.box}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({ item, index }) =>
          <View style={styles.container}>
            <View style={styles.card}>
              <Image
                style={styles.img}
                source={item.img}
              />
              <View>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View>
                <Text style={styles.price}> ₹ {item.price}</Text>
              </View>

              <View>
                {item.count == null ?
                  <Button
                    style={styles.addButton}
                    onPress={() => addToCart(index)}
                    title="Add to Cart"
                    color="#841584"
                  />
                  : <View style={styles.countStation}>
                    <Icon
                      style={styles.icon}
                      disabled={item.count == 0}
                      name='minus'
                      type='font-awesome'
                      color='#6C0BA9'
                      onPress={() => decreament(index)}
                    />
                    <View>
                      <Text style={styles.count}>{item.count}</Text>
                    </View>
                    <Icon
                      style={styles.icon}
                      name='plus'
                      type='font-awesome'
                      color='#6C0BA9'
                      onPress={() => increament(index)}
                    />
                  </View>
                }
              </View>
            </View>
          </View>
        }
      />
      <View style={styles.footer}>
        <Text style={styles.footerItem}>
          {quantity} items | ₹{totalPrice}
        </Text>
        <Text style={styles.cart}> View Cart
          <Icon
            name='shopping-cart'
            type='font-awesome'
            color='#6C0BA9'
            onPress={() => {
              valutedata2[1](finalCart)
              totalP2[1](totalPrice)
              navigation.navigate('Cart')
            }
            }
          />
        </Text>
      </View>
    </Fragment>

  );
};

function App() {
  const [data2, setdata2] = useState();
  const valuedata = [data2, setdata2]
  const [totalP, settotalP] = useState()
  const totalPdata = [totalP, settotalP];

  return (
    <dataCart.Provider value={valuedata}>
      <priceContext.Provider value={totalPdata}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LA Pizzeria"
              component={Home}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </priceContext.Provider>
    </dataCart.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 7,
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    flexDirection: 'column',
    flex: 1

  },
  
  img: {
    marginTop: 10,
    marginLeft: 40,
    marginBottom: 30,
    width: 100,
    height: 100,

  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginBottom: 20,
    color: 'black',
    fontWeight: "bold"
  },
  price: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginBottom: 20,
    color: "#b36200",
    fontWeight: 'bold'
  },
  count: {
    fontSize: 25,
    color: "orange",
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15
  },
  cartBG:{
backgroundColor : "white"
  },
  head: {
    fontSize: 40
  },
  icon: {
    marginLeft: 20
  },
  countStation: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  footer: {
    flexDirection: 'row',
    backgroundColor: "lightgreen",
    height: 40,
    padding: 6
  },
  footerItem: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  cart: {
    marginLeft: 140,
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  cartRow: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: 'flex-start',
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 10
  },
  Cartcontainer: {
    flexDirection: 'column'
  },
  headingCart: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    margin: 10,
    textAlign: "center",
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  rowContent: {
    flex: 1
  },
  cartName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "black"

  },
  cartCount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "black",


  },
  cartPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "green"

  },
  bill:{
    flexDirection:"row",
    alignContent : "space-around",
    justifyContent : "center"
  },
  imageCart: {
    width: 200,
    height: 230,
    alignSelf: 'center',
    marginBottom: 20
  },
  billdetails:{
    fontSize : 20,
    fontWeight : 'bold',
    color : "black",
    margin: 30,
    backgroundColor : "lightgrey"
  }
});

export default App;
