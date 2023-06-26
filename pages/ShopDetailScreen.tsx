import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  Alert,
  Dimensions,
  Platform,
  TextInput,
} from "react-native";

import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import pb, { baseUrl } from "../config/PocketBase";
import { AntDesign } from "@expo/vector-icons";
import RenderHtml from "react-native-render-html";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useAuthStore from "../store/auth/authStore";
import { typeShop } from "../store/shopStore";
import useScheduleStore from "../store/scheduleStore";
import { ScheduleModel, ServiceModel, ShopModel } from "../models";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type ShopDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ShopDetail"
>;

type ShopDetailRouteProp = RouteProp<RootStackParamList, "ShopDetail">;

const ShopDetailScreen = () => {
  const {
    params: {
      id,
      name,
      collectionId,
      collectionName,
      address,
      rating,
      count_rating,
      image,
      services,
      expand,
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
  } = useRoute<ShopDetailRouteProp>()
  const navigation = useNavigation<ShopDetailNavigationProp>()
  const [modalVisible, setModalVisible] = useState(false)
  const [serviceDetail, setServiceDetail] = useState<ServiceModel>()
  const [listScheduleService,setListScheduleService] = useState<ScheduleModel>()
  const [date, setDate] = useState(new Date())

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const userStore = useAuthStore()
  const scheduleStore = useScheduleStore()
  const token = userStore.token

  function scheduleService() {
    if (token == null) {
      Alert.alert("Cảnh báo !", "Bạn chưa đăng nhập nên không đặt lịch được", [
        {
          text: "Huỷ",
        },
        {
          text: "Đăng nhập",
          onPress: () => navigation.navigate("User" as never),
        },
      ]);
    } else {
      scheduleStore.addSchedule(listScheduleService)
      Alert.alert("Thành công !", "Bạn đã đặt lịch thành công")
    }
  }
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };
  const getDate = () => {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };
  function openDetailService(
    id,
    name,
    collectionId,
    collectionName,
    body,
    price,
    time,
    rating,
    image,
    service_category
  ) {
    
    setModalVisible(true);
    setServiceDetail({
      id,
      name,
      collectionId,
      collectionName,
      description,
      body,
      price,
      time,
      rating,
      image,
      service_category,
    });
  }
  function closeDetailService() {
    setModalVisible(false);
    setServiceDetail(null);
  }
  const windowHeight = Dimensions.get("window").height;
  const array = [1, 2, 3, 4, 5];
  return (
    <View className="relative flex-1">
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View className="flex-1 items-center justify-end mt-5 max-w-full max-h-full ">
          <View className="flex justify-between bg-white rounded-2xl px-8 py-6 shadow-xl h-[50%] w-full ">
            <View>
              <View className="flex-row justify-between space-x-4 w-full">
                <Text className="text-xl font-semibold">
                  {serviceDetail?.name}
                </Text>
                <TouchableOpacity onPress={() => closeDetailService()}>
                  <Ionicons
                    name="md-close-circle-outline"
                    size={30}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              <View className="flex-row space-x-1 my-4">
                {array.map((x) => (
                  <AntDesign key={x} name="staro" size={16} color="gray" />
                ))}
                <Text>({serviceDetail?.rating} đánh giá)</Text>
              </View>
              <View className=" border-[1px] border-indigo-500 w-10"></View>
              <View>
                <RenderHtml
                  contentWidth={100}
                  source={{ html: `${serviceDetail?.body}` }}
                />
              </View>
            </View>
            <View className="flex-row justify-between items-center w-full">
              <Text>Thời gian:</Text>
              <View className="w-2/3">
                <TextInput
                  value={getDate()}
                  placeholder="Thời gian..."
                  className="px-2 pt-2 pb-4 mt-2 bg-gray-100 rounded-lg text-base "
                />
                <TouchableOpacity
                  onPress={showDatePicker}
                  className="absolute right-4 top-5"
                >
                  <Ionicons name="calendar" size={24} color="blue" />
                </TouchableOpacity>
              </View>
              <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              locale="vi_VN"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              />
            </View>
            <View className="flex-row justify-between">
              <View>
                <Text className="text-blue-600 text-xl font-medium">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(serviceDetail?.price)}
                </Text>
                <Text>Thời gian: {serviceDetail?.time} phút</Text>
              </View>
             <View>
              <TouchableOpacity className="bg-blue-500 px-16 py-4 rounded-xl" onPress={() => scheduleService()}>
                <Text className="text-white">Đặt lịch</Text>
              </TouchableOpacity>
             </View>
            </View>
          </View>
        </View>
      </Modal>

      <View className="">
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-64"
        />
      </View>
      <View className="mx-4 flex-1 absolute top-16 left-0 ">
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
      <View className="flex-1 mx-4 shadow-xl">
        <ScrollView>
          <View className="bg-white z-10 rounded-xl p-4 shadow-xl">
            <View>
              <View className="flex space-y-1">
                <Text className="text-xl font-light mb-2">Chăm sóc da</Text>
                <View className=" border-[1px]  border-gray-200"></View>
              </View>

              {expand.services.map((x) => (
                <TouchableOpacity
                  key={x.id}
                  onPress={() =>
                    openDetailService(
                      x.id,
                      x.name,
                      x.collectionId,
                      x.collectionName,
                      x.body,
                      x.price,
                      x.time,
                      x.rating,
                      x.image,
                      x.service_category
                    )
                  }
                >
                  <View className="flex-row space-x-4 mt-4">
                    <Image
                      source={{
                        uri: pb.files.getUrl(x, x.image, {
                          thumb: "100x100",
                        }),
                      }}
                      className="w-24 h-24 rounded-2xl"
                    />
                    <View className="flex space-y-1 p-2 ">
                      <Text className="text-base break-all w-60">{x.name}</Text>
                      <Text className="text-xs font-bold mb-2 text-indigo-500">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(x.price)}
                      </Text>
                      <View className="flex-row justify-between items-center space-x-6">
                        <View className="flex-row items-center space-x-2">
                          <Ionicons name="md-star" size={22} color="#f59e0b" />
                          <Text className="text-xs font-bold">{x.rating}</Text>
                          <Text className="text-gray text-xs font-light ">
                            (đánh giá)
                          </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                          <Ionicons
                            name="ios-time-outline"
                            size={20}
                            color="gray"
                          />
                          <Text className="text-gray text-xs font-light ">
                            {x.time} phút
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
              <View className=" border-[1px]  border-gray-200 mt-4"></View>
            </View>

            {/* <View>
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
                <Text className="text-xl font-light mb-2">Massage</Text>
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
            </View> */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ShopDetailScreen;
