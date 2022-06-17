import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import DetailsScreen from '../screens/Details';
import ListScreen from '../screens/List';
import WebviewScreen from '../screens/Webview';
import {Colors} from '../styles';
import {RootStackParamList} from './RootStackParams';

const RootStack = createStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="List">
        <RootStack.Screen
          name="List"
          component={ListScreen}
          options={{
            headerTitle: () => (
              <Image
                style={styles.img}
                resizeMode="contain"
                source={require('../Assets/figoLogo.png')}
              />
            ),
            headerTitleAlign: 'center',
          }}
        />
        <RootStack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: () => <Text style={styles.textDetail}>DETAILS</Text>,
            headerTitleAlign: 'center',
          }}
        />
        <RootStack.Screen name="Webview" component={WebviewScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigator;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
  textDetail: {
    color: Colors.DARK,
    fontSize: 18,
  },
});
