import { View, Text,Image,TouchableOpacity } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
  const navigation = useNavigation()
  return (
    <View className="bg-blue-600 h-full">
      <View className="p-4">
        <Text className="text-white font-medium text-2xl text-center">
          Xinh đẹp nhưng vẫn phải an toàn
        </Text>
        <Text className="text-white font-normal text-base mt-4">
          Tình hình dịch bệnh đang diễn biến phức tạp, việc đến những nơi đông
          người có thể làm tăng nguy cơ lây nhiễm chéo. Do đó, hạn chế đến nơi
          đông người, tiếp xúc các vật dụng công cộng là một cách bảo bảo vệ sức
          khoẻ, vậy làm thế nào để mọi người có thể đáp ứng được nhu cầu làm đẹp
          nhưng vẫn giữ được sức khoẻ cho mình và gia đình một cách tiện lợi &
          an toàn nhất.
        </Text>
        <Text className="text-white font-normal text-base mt-4">
          Cường Beautybooking sẽ là một giải pháp an toàn và hiệu quả giúp cho
          mình:
        </Text>
        <Text className="text-white font-normal text-base ">1. Chủ động sắp xếp thời gian làm đẹp cho mình.</Text>
        <Text className="text-white font-normal text-base ">2. Tiết kiệm được thời gian chờ đợi khi quá tải.</Text>
        <Text className="text-white font-normal text-base ">
          3. Luôn luôn có chỗ trống sử dụng dịch vụ của những nhân viên/ chuyên
          viên lành nghề, giầu kinh nghiệm
        </Text>
        <Text className="text-white font-normal text-base "> 4. Hưởng chất lượng dịch vụ tốt hơn giá thành thấp hơn.</Text>
        <Text className="text-white font-normal text-base mt-4">
          Với những điều trên hy vọng các bạn có thể lựa chọn được dịch vụ làm
          đẹo phù hợp, tiện ích đáp ứng cho nhu cầu của bản thân và gia đình
          nhưng vẫn được đảm bảo sức khoẻ
        </Text>
      <View className="bg-white flex-row space-x-4 p-2 pt-4 rounded-lg mt-4 shadow-lg">
        <View>
          <Image source={require("../assets/beauty.png")} />
        </View>
        <View className="p-4 flex space-y-1">
          <Text className="text-blue-600 text-lg">Xinh đẹp, khoẻ mạnh và an {'\n'} toàn cùng CuongBooking</Text>
          
          
        </View>
      </View>
      </View>
    </View>
  );
};

export default AboutScreen;
