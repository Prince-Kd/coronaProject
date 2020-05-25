import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function  ReportScreen() {
    const [report, setReport] = useState('You have not made any case reports');
    return (
    <View style={styles.root}>
        <StatusBar/>
        <View style={styles.header}>
            <View style={{flexDirection: 'column', flex:1 }}>
            <Image source={require('../assets/images/avatar.png')} style={styles.logo}/>
            <Text style={{paddingTop: 20,fontSize:24, fontWeight: 'bold'}}>Case Reports</Text>

            </View>
            <Ionicons name='md-notifications-outline' size={40} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
            <View style={{}}>
                <Image source={require('../assets/images/file2.png')} style={{height: 190}}  />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>{report}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>Make Case Report</Text>
                </TouchableOpacity> 
            </View>
            
            

        </View>

    </View>
    )
  }
  
   ReportScreen.navigationOptions = {
    title: "report",
    header: null
  };
  
  const styles = StyleSheet.create({
    root: {
        justifyContent:"center",
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center',
  },
  header: {
    paddingHorizontal: 15,
    height: 100,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    flexDirection: 'row'
  },
  button: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 1,
      borderStyle: 'dashed',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 180,
      marginTop: 10
   },
  logo: {
    height: 40, 
    width: 40, 
    borderRadius: 40, 
    borderColor: '#ccc', 
    borderWidth:1,
  }
  })