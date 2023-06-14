import { View, Text, SafeAreaView, TouchableOpacity,Image, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");

  return (
    <SafeAreaView className="mx-4 flex-1">
      <View className="flex flex-row justify-between items-center mt-8">
        <Text className="text-3xl font-medium ">Tìm kiếm</Text>

        <View className="bg-white px-2 py-2 w-30 h-30 rounded-lg shadow-md ">
          <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-2">
        <View className="flex justify-between">
            <TextInput
                value={text}
                placeholder="Từ khoá tìm kiếm ..."
                className="p-4 bg-white mt-4 rounded-lg text-base"
            />
        <Image className="h-2/3 w-full" source={require("../assets/search.gif")} />
        <Text className="font-bold text-2xl text-center">Bạn đang tìm kiếm gì đấy ?</Text>
        <Text className="text-base font-light text-center">Các cửa hàng yêu thích, dịch vụ hoặc sản phẩm làm đẹp đều tìm ở đây nha.</Text>
          <TouchableOpacity className="flex-row items-center justify-center bg-blue-600 p-4 rounded-2xl mt-2">
            <Ionicons name="search" size={24} color="white" />
            <Text className="text-white font-medium text-lg"> Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
