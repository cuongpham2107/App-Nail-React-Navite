import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import pb from "../config/PocketBase";
import { login } from "../redux/authenticate/authReducer";
import useAuthStore from "../store/auth/authStore";

const LoginComponent = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const dispatch = useDispatch();
  const userStore = useAuthStore()
  const authentication = async () => {
    if (email !== null && password !== null) {
      const authData : any = await pb
        .collection("users")
        .authWithPassword(email, password);
        userStore.login(authData.record, authData.token)
      // dispatch(login(authData));
    } else {
      console.log(email, password);
    }
  };
  
  return (
    <SafeAreaView>
      <View className="mx-4">
        <Text className="text-3xl font-medium">Xin chào</Text>
        <Text className="text-base font-light w-3/4 mt-4">
          Bắt đầu những trải ngiện tuyệt vời cùng BeautyBooking. Bạn đã sẵn sàng
          chưa ?
        </Text>
        <View className="mt-10 flex space-y-6">
          <View>
            <Text className="font-light">Tên đăng nhập</Text>
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Tên đăng nhập"
              className="p-4 bg-white mt-2 rounded-lg text-base border-[0.5px] border-gray-400" 
            />
          </View>
          <View>
            <Text className="font-light">Mật khẩu</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              className="p-4 bg-white mt-2 rounded-lg text-base border-[0.5px] border-gray-400"
            />
          </View>
          <Text className="text-red-500">Quên mật khẩu?</Text>
          <TouchableOpacity
            onPress={authentication}
            className="flex-row justify-center items-center space-x-3 bg-blue-600 w-full py-3 rounded-lg border-gray-300 border-[1px]"
          >
            <Text className="text-lg font-medium text-white">Đăng nhập</Text>
          </TouchableOpacity>
          <Text className="text-gray-500">
            Chưa có tài khoản hả?
            <Text className="text-blue-700 font-medium"> Tạo ngay</Text>
          </Text>
        </View>
        <View className="flex-row justify-center items-center mt-24 space-x-4">
          <View className="border-[1px] border-gray-300 w-36"></View>
          <Text className="text-gray-400 text-base">hoặc</Text>
          <View className="border-[1px] border-gray-300 w-36"></View>
        </View>
        <View className="mt-4 flex space-y-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen" as never)}
            className="flex-row justify-center items-center space-x-3 bg-white w-full py-3 rounded-lg border-gray-300 border-[1px]"
          >
            <Image
              source={require("../assets/google.png")}
              className="w-6 h-6 rounded-2xl"
            />
            <Text className="text-lg font-light">Đăng nhập bằng Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen" as never)}
            className="flex-row justify-center items-center space-x-3 bg-blue-500 w-full py-3 rounded-lg border-gray-300 border-[1px]"
          >
            <Image
              source={require("../assets/facebook.png")}
              className="w-6 h-6 rounded-2xl"
            />
            <Text className="text-lg font-normal text-white">
              Đăng nhập bằng Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginComponent;
