import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import VitalsScreen from '../screens/VitalsScreen';
import ReportScreen from '../screens/ReportScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'android' ? `md-home` : "ios-home"
      }
    />
  ),
};

HomeStack.path = '';

const ReportStack = createStackNavigator(
  {
    Report: ReportScreen,
  },
  config
);

ReportStack.navigationOptions = {
  tabBarLabel: 'Report',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-paper-plane-outline' : 'md-paper-plane'} />
  ),
};

ReportStack.path = '';

const VitalsStack = createStackNavigator(
  {
    Vitals: VitalsScreen,
  },
  config
);

VitalsStack.navigationOptions = {
  tabBarLabel: 'Vitals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pulse' : 'md-pulse'} />
  ),
};

VitalsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Message: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
  ),
};

SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ReportStack,
  VitalsStack,
  SettingsStack,
  
},
{
  tabBarOptions:{
    showLabel:true,
    activeTintColor: 'black',
    inactiveTintColor: '#ccc'

  }
});

tabNavigator.path = '';

export default tabNavigator;
