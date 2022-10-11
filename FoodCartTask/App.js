/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, Fragment } from 'react';
 import { Icon } from 'react-native-elements/dist/icons/Icon';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 import {
   FlatList,
   StyleSheet,
   Text,
   View,
   Image,
   Button,
   SafeAreaView,
   
 } from 'react-native';
 const Stack = createNativeStackNavigator();
 function Cart({ navigation }) {
   return (
     <View>
       <Text>
         You are on Details Screen
       </Text>
       <View>
         <Button
           title="Back to Home"
           color="red"
           onPress={() => navigation.navigate('Home')}></Button>
       </View>
     </View>
   )
 };
 function Home ({navigation})  {
   const addToCart = () => {
     setdata(1)
   }
   const [data, setdata] = useState([
     {
       img: require("./assests/transi.jpeg"),
       name: "Margherita Pizza",
       price: 119,
       count: 0
     },
     {
       img: require("./assests/garden.jpeg"),
       name: "Garden Pizza",
       price: 159,
       count: 0
     },
     {
       img: require("./assests/sevenc.jpeg"),
       name: "Cheezy-7 Pizza",
       price: 229,
       count: 0
     },
     {
       img: require("./assests/images.jpeg"),
       name: "Farm Villa Pizza",
       price: 189,
       count: 0
     },
     {
       img: require("./assests/pesto.jpeg"),
       name: "Pesto and Basil Special Pizza",
       price: 299,
       count: 0
     },
     {
       img: require("./assests/burger.jpg"),
       name: "Pesto and Basil Special Pizza",
       price: 299,
       count: 0
     }
   ]);
   const [count, setcount] = useState(1);
   const [quantity, setquantity] = useState(0);
   const [totalPrice, settotalPrice] = useState(0);
   const increament = (index) => {
     let k = data;
     console.log(index);
     k[index].count = k[index].count + 1;
     let tp = totalPrice + k[index].price
     settotalPrice(tp)
     setquantity(quantity + 1)
     setdata(k)
   }
   const decreament = (index) => {
     console.log(index);
     let k = data;
     k[index].count = k[index].count - 1;
     let tp = totalPrice - k[index].price
     settotalPrice(tp)
     setdata(k)
     setquantity(quantity - 1)
 
   }
 
 
   return (
     <Fragment>
       <FlatList
         numColumns={2}
         key={2}
         style={styles.box}
         keyExtractor={(item,index) => index.toString()}
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
                 {count == 0 ?
                   <Button
                     onPress={() => addToCart()}
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
             onPress={() => navigation.navigate('Cart')}
           />
         </Text>
       </View>
     </Fragment>
   );
 };
 
 function App() {
 
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
           name="Home"
           component={Home}
         />
         <Stack.Screen
           name="Cart"
           component={Cart}
         />
 
       </Stack.Navigator>
     </NavigationContainer>
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
     shadowOpacity: 0.9,
     shadowRadius: 2,
     elevation: 10,
     backgroundColor: "#F2F2F2",
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
   }
 
 });
 
 export default App;
 