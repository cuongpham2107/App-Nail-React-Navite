import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
const ShopDetailScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      name,
      address,
      rating,
      count_rating,
      imgUrl,
      description,
      body,
      category_id,
      phone,
      status,
      time_start,
      time_end,
      long,
      lat,
    },
  } = useRoute();
  return (
    <View className="relative flex-1">
      <View className="">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-64"
        />
      </View>
      <View className="mx-4 flex-1 absolute top-16 left-0">
        <TouchableOpacity onPress={navigation.goBack}>
          <View className="bg-white w-9 h-9 flex justify-center items-center rounded-lg shadow-xl">
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View className="mx-4">
        <View className="bg-white z-10 -mt-10 rounded-xl p-4 shadow-xl ">
          <View className="flex space-y-1">
            <Text className="text-xl font-bold">{name}</Text>
            <Text className="text-xs font-light">{address}</Text>
            <View className=" border-[1px]  border-indigo-500 w-10"></View>
          </View>
          <View className="flex-row justify-between items-center space-x-6 mt-4">
            <View className="flex-row items-center space-x-2">
              <Ionicons name="md-star" size={20} color="#f59e0b" />
              <Text className="text-xs">{rating}</Text>
              <Text className="text-gray text-xs font-light ">
                ({count_rating} đánh giá)
              </Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="location-outline" size={20} color="gray" />
              <Text className="text-gray text-xs font-light ">5.1 KM</Text>
            </View>
            <View>
              <Text className="text-xs">
                {status === "dangHoatDong" ? "Đang hoạt động" : "Đã nghỉ"}
              </Text>
            </View>
          </View>
        </View>
        <View className="">
          <View className="flex flex-row space-x-4 mt-8 mb-2 items-center">
            <Text className="text-base font-medium">Dịch vụ</Text>
            <Text className="text-base font-medium text-gray-400">
              Nhận xét(0)
            </Text>
          </View>
        </View>
        
      </View>
      <View className="flex-1 mx-4">
          <ScrollView>
            <View className="bg-white z-10 rounded-xl p-4 shadow-xl">
              <View>
                <View className="flex space-y-1">
                  <Text className="text-xl font-light mb-2">Chăm sóc da</Text>
                  <View className=" border-[1px]  border-gray-200"></View>
                </View>
                <View className="flex-row space-x-4 mt-4">
                  <Image
                    source={{
                      uri: imgUrl,
                    }}
                    className="w-24 h-24 rounded-2xl"
                  />
                  <View className="flex space-y-1 ">
                    <Text className="text-base">Lấy nhân mụn cơ bản</Text>
                    <Text className="text-xs font-bold mb-2 text-indigo-500">
                      270.000 đ
                    </Text>
                    <View className="flex-row justify-between items-center space-x-6">
                      <View className="flex-row items-center space-x-2">
                        <Ionicons name="md-star" size={22} color="#f59e0b" />
                        <Text className="text-xs font-bold">{rating}</Text>
                        <Text className="text-gray text-xs font-light ">
                          ({count_rating} đánh giá)
                        </Text>
                      </View>
                      <View className="flex-row items-center space-x-1">
                        <Ionicons
                          name="ios-time-outline"
                          size={20}
                          color="gray"
                        />
                        <Text className="text-gray text-xs font-light ">
                          60 phút
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="flex-row space-x-4 mt-4">
                  <Image
                    source={{
                      uri: imgUrl,
                    }}
                    className="w-24 h-24 rounded-2xl"
                  />
                  <View className="flex space-y-1 ">
                    <Text className="text-base">Lấy nhân mụn cơ bản</Text>
                    <Text className="text-xs font-bold mb-2 text-indigo-500">
                      270.000 đ
                    </Text>
                    <View className="flex-row justify-between items-center space-x-6">
                      <View className="flex-row items-center space-x-2">
                        <Ionicons name="md-star" size={22} color="#f59e0b" />
                        <Text className="text-xs font-bold">{rating}</Text>
                        <Text className="text-gray text-xs font-light ">
                          ({count_rating} đánh giá)
                        </Text>
                      </View>
                      <View className="flex-row items-center space-x-1">
                        <Ionicons
                          name="ios-time-outline"
                          size={20}
                          color="gray"
                        />
                        <Text className="text-gray text-xs font-light ">
                          60 phút
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className=" border-[1px]  border-gray-200 mt-4"></View>
              </View>
              <View className="mt-3">
                <View className="flex space-y-1">
                  <Text className="text-xl font-light mb-2">
                    Gội đâu dưỡng sinh
                  </Text>
                  <View className=" border-[1px]  border-gray-200"></View>
                </View>
                <View className="flex-row space-x-4 mt-4">
                  <Image
                    source={{
                      uri: imgUrl,
                    }}
                    className="w-24 h-24 rounded-2xl"
                  />
                  <View className="flex space-y-1 ">
                    <Text className="text-base">Lấy nhân mụn cơ bản</Text>
                    <Text className="text-xs font-bold mb-2 text-indigo-500">
                      270.000 đ
                    </Text>
                    <View className="flex-row justify-between items-center space-x-6">
                      <View className="flex-row items-center space-x-2">
                        <Ionicons name="md-star" size={22} color="#f59e0b" />
                        <Text className="text-xs font-bold">{rating}</Text>
                        <Text className="text-gray text-xs font-light ">
                          ({count_rating} đánh giá)
                        </Text>
                      </View>
                      <View className="flex-row items-center space-x-1">
                        <Ionicons
                          name="ios-time-outline"
                          size={20}
                          color="gray"
                        />
                        <Text className="text-gray text-xs font-light ">
                          60 phút
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="flex-row space-x-4 mt-4">
                  <Image
                    source={{
                      uri: imgUrl,
                    }}
                    className="w-24 h-24 rounded-2xl"
                  />
                  <View className="flex space-y-1 ">
                    <Text className="text-base">Lấy nhân mụn cơ bản</Text>
                    <Text className="text-xs font-bold mb-2 text-indigo-500">
                      270.000 đ
                    </Text>
                    <View className="flex-row justify-between items-center space-x-6">
                      <View className="flex-row items-center space-x-2">
                        <Ionicons name="md-star" size={22} color="#f59e0b" />
                        <Text className="text-xs font-bold">{rating}</Text>
                        <Text className="text-gray text-xs font-light ">
                          ({count_rating} đánh giá)
                        </Text>
                      </View>
                      <View className="flex-row items-center space-x-1">
                        <Ionicons
                          name="ios-time-outline"
                          size={20}
                          color="gray"
                        />
                        <Text className="text-gray text-xs font-light ">
                          60 phút
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="mt-3">
                <View className="flex space-y-1">
                  <Text className="text-xl font-light mb-2">
                    Massage
                  </Text>
                  <View className=" border-[1px]  border-gray-200"></View>
                </View>
                <View className="flex-row space-x-4 mt-4">
                  <Image
                    source={{
                      uri: imgUrl,
                    }}
                    className="w-24 h-24 rounded-2xl"
                  />
                  <View className="flex space-y-1 ">
                    <Text className="text-base">Lấy nhân mụn cơ bản</Text>
                    <Text className="text-xs font-bold mb-2 text-indigo-500">
                      270.000 đ
                    </Text>
                    <View className="flex-row justify-between items-center space-x-6">
                      <View className="flex-row items-center space-x-2">
                        <Ionicons name="md-star" size={22} color="#f59e0b" />
                        <Text className="text-xs font-bold">{rating}</Text>
                        <Text className="text-gray text-xs font-light ">
                          ({count_rating} đánh giá)
                        </Text>
                      </View>
                      <View className="flex-row items-center space-x-1">
                        <Ionicons
                          name="ios-time-outline"
                          size={20}
                          color="gray"
                        />
                        <Text className="text-gray text-xs font-light ">
                          60 phút
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="flex-row space-x-4 mt-4">
                  <Image
                    source={{
                      uri: imgUrl,
                    }}
                    className="w-24 h-24 rounded-2xl"
                  />
                  <View className="flex space-y-1 ">
                    <Text className="text-base">Lấy nhân mụn cơ bản</Text>
                    <Text className="text-xs font-bold mb-2 text-indigo-500">
                      270.000 đ
                    </Text>
                    <View className="flex-row justify-between items-center space-x-6">
                      <View className="flex-row items-center space-x-2">
                        <Ionicons name="md-star" size={22} color="#f59e0b" />
                        <Text className="text-xs font-bold">{rating}</Text>
                        <Text className="text-gray text-xs font-light ">
                          ({count_rating} đánh giá)
                        </Text>
                      </View>
                      <View className="flex-row items-center space-x-1">
                        <Ionicons
                          name="ios-time-outline"
                          size={20}
                          color="gray"
                        />
                        <Text className="text-gray text-xs font-light ">
                          60 phút
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
    </View>
    </View>
  );
};

export default ShopDetailScreen;
