import { View, Text ,SafeAreaView, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const BookingDetailScreen = () => {
    const navigation = useNavigation()
  return (
    <>
        <View className=''>
            <Image
                source={require("../assets/logo.jpeg")}
                className="w-full h-64"
                />
        </View>
    <SafeAreaView className='mx-4 flex-1 absolute top-0 left-0'>
        <View>
            <TouchableOpacity onPress={navigation.goBack}>
                <View className="bg-white w-9 h-9 flex justify-center items-center rounded-lg shadow-xl">
                    <Ionicons name="chevron-back-outline" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
        <View>
            <View>
                <Text>
                    ádjágđáhá
                </Text>
            </View>
        </View>
    </SafeAreaView>
    </>
   
  )
}

export default BookingDetailScreen