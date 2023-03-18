import { useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default ({navigation}: any) => {
  const fadeAnim2 = useRef(new Animated.Value(1)).current;

  Animated.loop(
    Animated.sequence([
      Animated.timing(fadeAnim2, {
        toValue: 1.1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ])
  ).start()

  return (
    <View className="flex-1 overflow-hidden">
      <View className="flex-1 items-center justify-end">
        <TouchableOpacity
          className="absolute bottom-20 w-24 h-24 border-2 border-t-4 border-b-0 border-sky-400 rounded-full items-center justify-center"
          onPress={() => navigation.navigate('about')}
        >
          <View>
            <Animated.View 
              className="w-20 h-20 items-center justify-center rounded-full bg-sky-400"
              style={{transform: [{scale: fadeAnim2}]}}
            >
              <Text className="text-2xl text-white font-semibold">About</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}