import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import PocketBase from "pocketbase";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import pb from "../config/PocketBase";

const HomeScreen = () => {
  
  const navigation = useNavigation();
 
  const [categories,setCategories] = useState([])
  const [shops,setShops] = useState([])
  
  const [isActive,setIsActive] = useState(null);
  let filteredShops = null
  function selectedCategory(id) {
    
      if(id != null){
        
        setIsActive(id)
      }
      else{
        setIsActive(null)
      }
  }
  if(isActive != null){
    filteredShops = shops.filter(
      (shop) => shop.category_id === isActive
    );
  }
  else{
    filteredShops = shops
  }
  const arrayCount = filteredShops.length
  
  useEffect(() => {
    (async () => {
      // you can also fetch all records at once via getFullList
      const categories = await pb.collection('categories').getFullList({
        sort: '-created',
      });
      setCategories(categories)
      // you can also fetch all records at once via getFullList
      const shops = await pb.collection('shops').getFullList({
        sort: '-created',
      });
      setShops(shops)
    })();
  }, []);
  
  return (
    <SafeAreaView className="bg-gray-100 pt-5 mx-4 flex-1 ">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-3xl font-medium">Trang chủ</Text>
        <View className=" flex-row space-x-2">
          <View className="bg-white px-2 py-2 w-30 h-30 rounded-lg shadow-md">
            <TouchableOpacity
              onPress={() => navigation.navigate("Search" as never)}
            >
              <Ionicons name="search-outline" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <View className="bg-white px-2 py-2 w-30 h-30 rounded-lg shadow-md">
            <TouchableOpacity
              onPress={() => navigation.navigate("Map" as never)}
            >
              <Ionicons name="earth-outline" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="bg-green-700 flex-row space-x-4 p-2 pt-4 rounded-lg mt-4">
        <View>
          <Image source={require("../assets/beauty.png")} />
        </View>
        <View className="p-3 flex space-y-1">
          <Text className="text-white text-lg">Bảo vệ sức khoẻ</Text>
          <Text className="text-white text-sm">
            Xinh đẹp nhưng vẫn phải an toàn.
          </Text>
          <TouchableOpacity
            className="pt-4"
            onPress={() => navigation.navigate("About" as never)}
          >
            <Text className="text-xs text-blue-200 font-semibold underline">
              Xem thêm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-none">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 0,
            paddingTop: 20,
          }}
        >
          <TouchableOpacity  onPress={() => selectedCategory(null)}  className={` px-3 py-3 rounded-xl mr-3 ${!isActive ? "border border-indigo-600 " : "bg-blue-200"}`}>
            <Text className="text-base text-indigo-600">Tất cả dịch vụ</Text>
          </TouchableOpacity>
          { categories.map((x) => (
           <TouchableOpacity 
           key={x.id} 
           className={` px-3 py-3 rounded-xl mr-3 ${isActive == x.id ? "border border-indigo-600 " : "bg-blue-200"}`}
           onPress={() => selectedCategory(x.id)}
           >
           <Text className="text-base text-indigo-600">{x.name}</Text>
         </TouchableOpacity>
        ))} 
          
        </ScrollView>
      </View>
      <View className="pt-5 px-1 mb-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-semibold">Cửa hàng gần đây</Text>
          <Text className="text-blue-600 text-base">Tất cả ({arrayCount})</Text>
        </View>
      </View>
      <View className="flex-1">
        <ScrollView>
          <View className={`mb-5 flex  ${ filteredShops.length !== 0 ? "space-y-4" : "items-center justify-center h-80"}`}>
          {
            filteredShops.length !== 0 ?
            filteredShops.map((x) => (
              <TouchableOpacity
                key={x.id}
                onPress={() => navigation.navigate("ShopDetail" as never,{
                  id : x.id,
                  name: x.name,
                  address: x.address,
                  rating: x.rating,
                  count_rating : x.count_rating,
                  imgUrl: pb.files.getUrl(x, x.image, {'thumb': '100x250'}),
                  description: x.description,
                  body: x.body,
                  category_id: x.category_id,
                  phone: x.phone,
                  status : x.status,
                  time_start: x.time_start,
                  time_end: x.time_end,
                  long: x.long,
                  lat: x.lat,
                }as never)}
              >
                <View className="bg-white p-4 rounded-xl ">
                  <View className="flex-row space-x-4">
                    <Image
                      source={{
                        uri: pb.files.getUrl(x, x.image, {'thumb': '100x100'})
                      }}
                      className="w-24 h-24 rounded-2xl"
                    />
                    <View className="flex space-y-1 ">
                      <Text className="text-base">{x.name}</Text>
                      <Text className="text-xs font-extralight mb-2">
                      {x.address}
                      </Text>
                      <View className=" border-2 border-white border-t-indigo-500 w-10"></View>
                      <View className="flex-row justify-between items-center space-x-6">
                        <View className="flex-row items-center space-x-2">
                          <Ionicons name="md-star" size={22} color="#f59e0b" />
                          <Text className="text-xs">{x.rating}</Text>
                          <Text className="text-gray text-xs font-light ">
                            ({x.count_rating} đánh giá)
                          </Text>
                        </View>
                        <View>
                          <Text>{x.status === 'dangHoatDong' ? "Đang hoạt động" : "Đã nghỉ"}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))
            :
            <Text>Không có Shop nào</Text>
          }
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
