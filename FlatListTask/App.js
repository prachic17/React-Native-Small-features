/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Animated,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const App = () => {
  const [list, setList] = useState([{
    img:  require("./assests/icici.png"),

    heading: "ICICI Bank",
    subheading: "SOTW Market Podcast: India's WPI in...",
    details: "SENSEX: 59037.18 | -3.58 bond yield...",
    time: "12:51 am",
    attachment: false
  },
  {

    img:require("./assests/ajio.png"),
    heading: "AJIO",
    subheading: "Style upgrade with apparel and footwear...",
    details: "If you don't snag it now, it'll be gone...",
    time: "11:09 am",
    attachment: true
  },
  {
    img: require("./assests/zerodha.jpeg"),
    heading: "Zerodha",
    subheading: "Payment Success...",
    details: "Hi Prachi 2000.00 has been added to...",
    time: "10:33 am",
    attachment: false
  },
  {

    img:require("./assests/cadbury1.png"),
    heading: "Cadbury Joy Deliveries",
    subheading: "Prachi, Make this Chocolate Day...",
    details: "Make this Chocolate day more choc...",
    time: "21 Jan",
    attachment: true
  },
  {

    img:require("./assests/order.png"),
    heading: "Order From Zomato",
    subheading: "Your Zomato Order from Brown Sug...",
    details: "Thank you for ordering from Brown Sugar...",
    time: "21 Jan",
    attachment: true
  },
  {

    img:require("./assests/jane.png"),
    heading: "Jane from CodeChef",
    subheading: "The First Rated-For-All Contest of 2022...",
    details: "Let us cheer you up. The first Cook-Off...",
    time: "21 Jan",
    attachment: true
  },
  {

    img:require("./assests/myntra.png"),
    heading: "Myntra",
    subheading: "Don't risk stepping out...",
    details: "Laeve some essentials to us!Stay in...",
    time: "21 Jan",
    attachment: true
  }]
  );

  const RenderRight = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-50, 0.5],
      outputRange: [1, 0.1]
    })
    const Style = {
      transform: [
        {
          scale
        }
      ]
    }
    return (
      <View style={styles.swipe}>
        <Animated.Text style={[Style , styles.delete]}><Icon
          
          name='trash'
          type='font-awesome'
          color='#ffffff'/></Animated.Text>
      </View>
    )

  }

  const deleteItem = (index) => {
    let updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);
  }

  return (

    <GestureHandlerRootView>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={list}
        renderItem={({ item, index }) =>
          <Swipeable overshootRight={false} renderRightActions={RenderRight} onSwipeableRightOpen={() => deleteItem(index)}>
            <View style={styles.list}>
              <Image
                style={styles.icon}
                source={item.img}
              />
              <View style={styles.abcd}>
                <Text style={styles.heading}>{item.heading}</Text>
                <Text style={styles.subheading}>{item.subheading}</Text>
                <Text style={styles.details}>{item.details}</Text>
                
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </Swipeable>

        }
      />

    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  list: {
    // justifyContent : 'center',
    flexDirection: 'row',
    margin: 10,
    flex: 1,
  },
  abcd: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
  },
  hello:{
    flexDirection : 'row',
    flex : 1,
    justifyContent : 'space-evenly',
    
  },
  heading: {
    fontSize: 20,
    color: "black",
    alignItems: 'flex-end',
    flex: 1,
    fontWeight : '600'

  },
  subheading: {
    fontSize: 15,
    color: "black",

  },
  time: {
    color: "black"

  },
  icon: {
    borderRadius: 50,
    borderWidth: 1,
    height: 50,
    width: 50,
   

  },
  delete: {
    color: "white",
    fontSize : 10
  },
  swipe: {
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    width: 120
  }

});

export default App;
