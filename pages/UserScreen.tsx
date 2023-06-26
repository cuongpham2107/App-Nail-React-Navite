import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Switch } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import pb from "../config/PocketBase";
import { logout } from "../redux/authenticate/authReducer";
import useAuthStore from "../store/auth/authStore";

const UserScreen = () => {
  const navigation = useNavigation()
  const [isSwitchNotification, setIsSwitchNotification] = useState(false)
  const [isSwitchOnEarth, setIsSwitchOnEarth] = useState(false)
  // const location = useSelector((state) => state.location)
  const [isValid,setIsValid] = useState(false)
  const userStore = useAuthStore()
  const token = userStore.token;
  function logoutUser() {
    userStore.logout()
  }
  useEffect(() => {
   
    // if(location.latitude != null && location.longitude != null){
    //   setIsSwitchOnEarth(true)
    // }
    if(token !== null){
      setIsValid(true)
    }else{
      setIsValid(false)
    }
  }, [token]);
  
  const onToggleSwitchNotification = () =>
    setIsSwitchNotification(!isSwitchNotification)
  const onToggleSwitchEarth = () => setIsSwitchOnEarth(!isSwitchOnEarth)
  return (
    <>
    {!isValid 
    ? 
     <LoginComponent />
    : 
    <View className="relative">
      <View>
        <View className="absolute bottom-2/3 right-6 z-10 bg-white px-1 py-1 rounded-lg">
          <TouchableOpacity>
            <Ionicons name="camera" size={28} color="gray" />
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/logo.jpeg")}
          className="w-full h-72 rounded-b-[100px]"
        />
        <View className="absolute top-3/4 right-4 left-4 z-10 mt-6 ">
          <TouchableOpacity
            onPress={() => navigation.navigate("EditAccount" as never)}
          >
            <View className=" flex-row justify-between items-center bg-white px-4 py-4 rounded-2xl shadow-lg">
              <View className="flex-row items-center space-x-4">
                <Ionicons
                  name="person-circle-outline"
                  size={22}
                  color="#2563eb"
                />
                <Text>Thông tin cá nhân</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="gray" />
            </View>
          </TouchableOpacity>
          <View className="mt-6">
            <Text className="text-base font-semibold">Chi tiết dịch vụ</Text>
            <View className="bg-white rounded-2xl mt-2 shadow-lg">
              <View className=" flex-row justify-between items-center  px-4 py-4 ">
                <View className="flex-row items-center space-x-4">
                  <Ionicons name="notifications" size={24} color="#2563eb" />
                  <Text>Thông báo</Text>
                </View>
                <Switch
                  value={isSwitchNotification}
                  onValueChange={onToggleSwitchNotification}
                />
              </View>
              <View className=" flex-row justify-between items-center  px-4 py-4 mt-2">
                <View className="flex-row items-center space-x-4">
                  <Ionicons name="earth-outline" size={24} color="#2563eb" />
                  <View className="flex space-y-2">
                    <Text>Cho phép định vị</Text>
                    <Text className="text-xs font-extralight">
                      Định vị chính xác sẽ giúp bạn có kết quả chính xác
                    </Text>
                  </View>
                </View>
                <Switch
                  value={isSwitchOnEarth}
                  onValueChange={onToggleSwitchEarth}
                />
              </View>
            </View>
          </View>
          <View className="mt-48 flex justify-center items-center">
            <Text>BeautyBooking 2022 - Version 1.1.1(1)</Text>
            <View className=" flex-row justify-between items-center  px-4 py-4 bg-white rounded-2xl w-full mt-4">
            <TouchableOpacity onPress={() => logoutUser()}>
              <View className="flex-row items-center space-x-4">
                  <Ionicons name="log-out" size={24} color="red" />
                  <Text className="text-red-500">Đăng xuất</Text>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View> 
    }
    
    </>
    
  );
};

export default UserScreen;
