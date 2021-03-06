import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default home = props =>{
  return(
    <View style={styles.root}>
      <StatusBar/>
      <View style={styles.header}>
        <View style={{flexDirection: 'column', flex:1 }}>
          <Image source={require('../assets/images/avatar.png')} style={styles.logo}/>
          <Text style={{paddingTop: 20,fontSize:24, fontWeight: 'bold'}}>Home</Text>

        </View>
        <Ionicons name='md-notifications-outline' size={40} />

      </View>
      <ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.slideShow}>
            <View>
              <Image style={styles.slides} source={require('../assets/images/slide1.png')}  />
              <Text style={styles.text1}>4855</Text>
              <Text style={styles.text2}>Confirmed Cases</Text>
            </View>
            <View>
              <Image style={styles.slides} source={require('../assets/images/slide2.png')}  />
              <Text style={{
                color:'white', 
                textAlign: 'right',
                fontSize: 24,
                fontWeight: 'bold',
                paddingRight: 12,
                paddingTop: 7,
                position: 'absolute',
                left: 245,
                top:8}}>465</Text>
              <Text style={{
                color:'white', 
                textAlign: 'right',
                paddingRight: 12,
                position: 'absolute',
                left: 220,
                top: 45}}>Recovered</Text>
            </View>
            <View style={styles.slides}>
              <Text style={styles.text1}>21</Text>
              <Text style={styles.text2}>Deaths</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

home.navigationOptions = {
 header: null,
};

const styles = StyleSheet.create({
  root: {
        justifyContent:"center",
        paddingTop: StatusBar.currentHeight,
  },
  slideShow: {
    flexDirection:"row",
    backgroundColor: 'white'
  },
  slides: {
    margin: 8,  
    height: 160, 
    width: 290 , 
    borderRadius: 10, 
    borderColor: 'black',
  },
  header: {
    paddingHorizontal: 15,
    height: 100,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    flexDirection: 'row'

  },
  logo: {
    height: 40, 
    width: 40, 
    borderRadius: 40, 
    borderColor: '#ccc', 
    borderWidth:1,
  },
  text1: {
    color:'white', 
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 12,
    paddingTop: 7,
    position: 'absolute',
    left: 232,
    top:8
  },
  text2: {
    color:'white', 
    textAlign: 'right',
    paddingRight: 12,
    position: 'absolute',
    left: 180,
    top: 45
  }
})
