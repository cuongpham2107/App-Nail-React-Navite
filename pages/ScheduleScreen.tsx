import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const ScheduleScreen = () => {
  const navigation = useNavigation();
  const location = useSelector((state) => state.token);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrayCount = array.length;
  return (
    <>
      {location === undefined ? (
        <SafeAreaView className="mx-4 flex-1">
          <View className="flex justify-center items-center space-y-4">
            <Image
              source={require("../assets/girl.png")}
              className="w-52 h-52 rounded-2xl"
            />
            <Text className="font-bold text-2xl ">Chưa đăng nhập</Text>
            <Text className="text-sm font-light">Bạn cần phải đăng nhập để có thể xem các lịch hẹn của bạn</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('LoginScreen' as never)}
              className="flex justify-center items-center bg-white w-full py-3 rounded-lg border-gray-300 border-[1px]">
              <Text className="text-lg font-light">Đăng nhập tài khoản</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center items-center mt-32 space-x-4">
            <View className="border-[1px] border-gray-300 w-36" ></View>
            <Text className="text-gray-400 text-base">hoặc</Text>
            <View className="border-[1px] border-gray-300 w-36" ></View>
          </View>
          <View className="mt-6 flex space-y-4">
          <TouchableOpacity 
              onPress={() => navigation.navigate('LoginScreen' as never)}
              className="flex-row justify-center items-center space-x-3 bg-white w-full py-3 rounded-lg border-gray-300 border-[1px]">
                 <Image
              source={require("../assets/google.png")}
              className="w-6 h-6 rounded-2xl"
            />
              <Text className="text-lg font-light">Đăng nhập bằng Google</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate('LoginScreen' as never)}
              className="flex-row justify-center items-center space-x-3 bg-blue-500 w-full py-3 rounded-lg border-gray-300 border-[1px]">
                 <Image
              source={require("../assets/facebook.png")}
              className="w-6 h-6 rounded-2xl"
            />
              <Text className="text-lg font-normal text-white">Đăng nhập bằng Facebook</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView className="mx-4 flex-1">
          <View className="">
            <Text className="text-3xl font-medium">Lịch hẹn</Text>
            <View className="mt-6">
              <Text className="text-sm font-light">Sắp tới({arrayCount})</Text>
            </View>
          </View>

          <View className="mt-4 mb-16 flex-none">
            <ScrollView>
              <View className="mb-5 flex space-y-4">
                {array.map((x) => (
                  <TouchableOpacity
                    key={x}
                    onPress={() =>
                      navigation.navigate("BookingDetail" as never)
                    }
                  >
                    <View key={x} className="bg-white p-4 rounded-xl ">
                      <View className="flex-row space-x-4">
                        <Image
                          source={require("../assets/logo.jpeg")}
                          className="w-24 h-24 rounded-2xl"
                        />
                        <View className="flex space-y-1 ">
                          <Text className="text-base">LaHi Beauty</Text>
                          <Text className="text-xs font-extralight mb-2">
                            Quang Trung, Phường 14, Gò Vấp, Hồ Chí Minh
                            jkhqkjwehkjqwhekjq
                          </Text>
                          <View className=" border-2 border-white border-t-indigo-500 w-10"></View>
                          <View className="flex-row justify-between">
                            <View className="flex-row items-center space-x-2">
                              <Ionicons
                                name="md-star"
                                size={22}
                                color="#f59e0b"
                              />
                              <Text className="text-xs">0</Text>
                              <Text className="text-gray text-xs font-light ">
                                (0 đánh giá)
                              </Text>
                            </View>
                            <View>
                              <Text>Đã nghỉ</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default ScheduleScreen;
