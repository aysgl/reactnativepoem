import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../util/constant';

export default function Homescreen() {
  const navigation = useNavigation();
  const name = 'Udemig eğitimine hoşgeldiniz';

  return (
    <View>
      <TouchableOpacity>
        <Text
          onPress={() =>
            navigation.navigate(SCREENS.Notifications, {title: name})
          }>
          Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate(SCREENS.Notifications)}>
          Homescreen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
