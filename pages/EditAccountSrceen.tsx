import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useAuthStore from "../store/auth/authStore";

const EditAccountSrceen = () => {
  const navigation = useNavigation();
  const [name, onChangeName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [email, onChangeEmail] = useState("");
  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const userCurrent = useAuthStore((state)=> state.user)
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
    let tempDate = date.toString().split(" ");
    return date !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : "";
  };
  useEffect(() => {
    if(userCurrent != null){
        onChangeName(userCurrent.name)
        onChangePhone(userCurrent.phone)
        onChangeEmail(userCurrent.email)
        setDate(userCurrent.date?.toString())
    }

  }, [userCurrent]);

  return (
    <SafeAreaView>
      <View className="mx-4">
        <TouchableOpacity onPress={navigation.goBack}>
          <View className="bg-white w-9 h-9 flex justify-center items-center rounded-lg shadow-xl">
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View className="mt-8 flex justify-center items-center">
          <Text className="font-medium text-4xl">Thông tin cá nhân</Text>
        </View>
        <View className="mt-10 flex space-y-6">
          <View>
            <Text className="font-light">Họ và tên</Text>
            <TextInput
              onChangeText={onChangeName}
              value={name}
              placeholder="Họ và tên"
              className="p-4 bg-white mt-2 rounded-lg text-base"
            />
          </View>
          <View>
            <Text className="font-light">Số điện thoại</Text>
            <TextInput
              onChangeText={onChangePhone}
              value={phone}
              placeholder="Số điện thoại"
              className="p-4 bg-white mt-2 rounded-lg text-base"
            />
          </View>
          <View>
            <Text className="font-light">Ngày sinh</Text>
            <View>
              <TextInput
                value={getDate()}
                placeholder="Ngày sinh..."
                className="p-4 bg-white mt-2 rounded-lg text-base"
              />
              <TouchableOpacity
                onPress={showDatePicker}
                className="absolute right-4 top-6"
              >
                <Ionicons name="calendar" size={24} color="blue" />
              </TouchableOpacity>
            </View>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <View>
            <Text className="font-light">Email</Text>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
              className="p-4 bg-white mt-2 rounded-lg text-base"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditAccountSrceen;
