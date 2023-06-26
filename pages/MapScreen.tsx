import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation,setLocationError } from '../redux/location/locationReducer';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MapNavigationProp = NativeStackNavigationProp<RootStackParamList,"Map">
const MapScreen = () => {
    const navigation  = useNavigation<MapNavigationProp>()
    
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !==  'granted') {
            console.log('Permission successfull!');
            return;
          }
          try {
            let location = await Location.getCurrentPositionAsync({});
            dispatch(setLocation({latitude : location.coords.latitude, longitude : location.coords.longitude}));
            // console.log(location)
          } catch (error) {
            dispatch(setLocationError(error.message));
          }
        })();
      }, []);
      const location = useSelector((state) => state.location);
      // console.log(location)
  return (
    <View className='w-full h-full'>
        
       <MapView
        initialRegion={{
          latitude: 21.589190, 
          longitude: 105.808983,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType='terrain'
      >
        
      </MapView>
      <TouchableOpacity onPress={navigation.goBack} className='z-10 absolute top-16 left-6  '>
            <View className="bg-white w-9 h-9 flex justify-center items-center rounded-lg ">
                <Ionicons name="chevron-back-outline" size={24} color="black" />
            </View>
       </TouchableOpacity>
    </View>
  )
}

export default MapScreen