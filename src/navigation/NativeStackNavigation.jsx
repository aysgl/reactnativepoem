import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import {SCREENS} from '../util/constant';
import {Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function HeaderRightComponent() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>Right</Text>
    </TouchableOpacity>
  );
}

function NativeStackNavigation() {
  return (
    <SafeAreaView>
      <Stack.Navigator
        screenOptions={{
          //   headerShown: true,
          headerStyle: {backgroundColor: 'tomato'},
          headerTintColor: 'green',
          headerTitleStyle: {
            fontSize: 40,
            fontWeight: 900,
          },
          headerRight: () => <HeaderRightComponent />,
          //   headerBackVisible: false,
          headerBackTitleVisible: false,
        }}
        initialRouteName="Profile">
        <Stack.Screen name={SCREENS.Home} component={Homescreen} />
        <Stack.Screen
          name={SCREENS.Notifications}
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen name={SCREENS.Profile} component={Profile} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default NativeStackNavigation;
