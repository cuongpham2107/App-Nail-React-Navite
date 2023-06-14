import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './pages/HomeScreen';
import { Provider } from 'react-redux';
import ScheduleScreen from './pages/ScheduleScreen';
import UserScreen from './pages/UserScreen';
import EditAccountSrceen from "./pages/EditAccountSrceen";
import BookingDetailScreen from './pages/BookingDetailScreen';
import AboutScreen from './pages/AboutScreen';
import SearchScreen from './pages/SearchScreen';
import MapScreen from './pages/MapScreen';
import store from './redux/store';
import ShopDetailScreen from './pages/ShopDetailScreen';
import LoginScreen from './pages/LoginScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function Tabs () {
  return (
     <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          else if (route.name === 'User') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{title: "Trang Chủ"}} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} options={{title: "Đặt lịch"}}/>
      <Tab.Screen name="User" component={UserScreen} options={{title: "Tài khoản"}}/>
    </Tab.Navigator>
  );
}
function Main() {
  return (
    <Stack.Navigator>

       <Stack.Screen name="HomeScreen" component={Tabs}   options={{ headerShown: false }}/>
       <Stack.Screen name="EditAccount" component={EditAccountSrceen} options={{ headerShown: false }}/>
       <Stack.Screen name="BookingDetail" component={BookingDetailScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="ShopDetail" component={ShopDetailScreen} options={{ headerShown: false }}/>
       <Stack.Screen 
          name='About' 
          component={AboutScreen}
          options={{presentation: "modal", headerShown: false}} />
        <Stack.Screen 
          name='Search' 
          component={SearchScreen}
          options={{presentation: "modal", headerShown: false}} />
        <Stack.Screen 
          name='Map' 
          component={MapScreen}
          options={{presentation: "fullScreenModal", headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>

    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
     
  );
}