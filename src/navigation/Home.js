import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { theme } from '../core/theme'
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMate from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUI from 'react-native-vector-icons/Ionicons'
import SkipButton from '../components/SplashScreen/SkipButton';
import StatusBar from '../components/StatusBar/StatusBar';
import { Drawer } from 'react-native-paper';
import Loading from '../components/body/Loading'
import {
  Tips1,
  Tips2,
  Tips3,
  Body,
  ListBody,
  BodyScreen,
  CategoryNewScreen,
  CategoryScreen,
  DrugDetailsScreen,
  DrugScreen,
  HomeCovidScreen,
  QrCodeScreen,
  Home,
  WeatherScreen,
  Weather,
  HistoryScreen
} from '../screens/export';
import { Avatar, Text } from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import { get as _get } from 'lodash';
import { GetAllUserRequest } from '../reducer/User/UserAction';
import auth from '@react-native-firebase/auth';

const DrawerPage = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function LoginSuccess(props) {

  const [isLoading, setIsloading] = useState(true)
  const headerStyle = {
    backgroundColor: theme.colors.appbar,
    height: 60,
  }
  const headerTitleStyle = {
    fontSize: 18,
    color: theme.colors.activeColor,
    elevation: 5,
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold'
  }

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 1000);
  }, [])
  return (
    <>
      { isLoading ? <Loading /> :
        <Stack.Navigator initialRouteName={props.router ? 'Home' : 'Tips1'}
          headerMode="screen"
          animation="fade"
        >
          <Stack.Screen
            name="Tips1"
            component={Tips1}
            headerMode="float"
            options={({ navigation }) => ({
              headerLeft: null,
              title: '',
              headerStyle: { backgroundColor: '#FCF6EE', elevation: 0 },
              headerRight: () => (
                <SkipButton text='Bỏ qua' onClick={() => navigation.reset({
                  index: 0,
                  routes: [{ name: 'Home' }],
                })}
                />
              )
            })}
          />
          <Stack.Screen
            name="Tips2"
            component={Tips2}
            animation="none"
            options={({ navigation }) => ({
              mode: 'screen',
              title: '',
              headerStyle: { backgroundColor: '#FCF6EE', elevation: 0 },
              headerLeft: () => (
                <SkipButton text='Bước trước' onClick={() => navigation.navigate('Tips1')} />
              ),
              headerRight: () => (
                <SkipButton text='Bỏ qua' onClick={() => navigation.reset({
                  index: 0,
                  routes: [{ name: 'Home' }],
                })} />
              )
            })}
          />
          <Stack.Screen
            name="Tips3"
            component={Tips3}
            options={({ navigation }) => ({
              mode: 'screen',
              headerLeft: () => (
                <SkipButton text='Bước trước' onClick={() => navigation.navigate('Tips2')} />
              ),
              title: '',
              headerStyle: { backgroundColor: '#FCF6EE', elevation: 0 },
              headerRight: null
            })}
          />
          <Stack.Screen name="Home" options={{
            headerShown: false
          }} component={RootNavigator} />


          <Stack.Screen name="HomeCovidScreen" options={{
            headerShown: true,
            title: 'Viêm đường hô hấp Covid-19',
            headerHideShadow: false,
            headerTintColor: theme.colors.activeColor,
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
          }} component={HomeCovidScreen} />

          <Stack.Screen name="HistoryScreen" options={{
            headerShown: true,
            title: 'Lịch sử',
            headerHideShadow: false,
            headerTintColor: theme.colors.activeColor,
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
          }} component={HistoryScreen} />

          <Stack.Screen name="DrugScreen" options={{
            headerShown: true,
            title: 'Thuốc ',
            headerHideShadow: true,
            headerTintColor: theme.colors.activeColor,
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
          }} component={DrugScreen} />

          <Stack.Screen name="CategoryScreen" options={{
            headerShown: true,
            title: 'Bài viết',
            headerHideShadow: true,
            headerTintColor: theme.colors.activeColor,
            headerTintColor: theme.colors.activeColor,
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
          }} component={CategoryScreen} />

          <Stack.Screen name="CategoryNewScreen" options={{
            headerShown: true,
            title: 'Chi tiết',
            headerHideShadow: true,
            headerTintColor: theme.colors.activeColor,
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
          }} component={CategoryNewScreen} />

          <Stack.Screen name="DrugDetailsScreen" options={{
            headerShown: true,
            title: 'Chi tiết',
            headerHideShadow: true,
            headerTintColor: theme.colors.activeColor,
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
          }} component={DrugDetailsScreen} />

          <Stack.Screen name="BodyScreen" options={{
            headerShown: true,
            title: 'Bệnh theo vùng cơ thể',
            headerHideShadow: true,
            headerTintColor: theme.colors.activeColor,
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
          }} component={BodyScreen} />

          <Stack.Screen name="ListBody"
            options={(props) => ({
              headerShown: true,
              title: props.route.params.name,
              headerHideShadow: true,
              headerTintColor: theme.colors.activeColor,
              headerTitleStyle: headerTitleStyle,
              headerStyle: headerStyle,
            })} component={ListBody} />

          <Stack.Screen name="Body"

            options={(props) => ({
              headerShown: true,
              title: props.route.params.discriptions,
              headerHideShadow: true,
              headerTintColor: theme.colors.activeColor,
              headerTitleStyle: headerTitleStyle,
              headerStyle: headerStyle,
            })} component={Body} />

          <Stack.Screen name="WeatherScreen"
            options={{
              headerShown: true,
              title: 'Bệnh theo mùa',
              headerHideShadow: true,
              headerTintColor: theme.colors.activeColor,
              headerTitleStyle: headerTitleStyle,
              headerStyle: headerStyle,
            }} component={WeatherScreen} />

          <Stack.Screen name="Weather"

            options={(props) => ({
              headerShown: true,
              title: props.route.params.descriptions,
              headerHideShadow: true,
              headerTintColor: theme.colors.activeColor,
              headerTitleStyle: headerTitleStyle,
              headerStyle: headerStyle,
            })} component={Weather} />
        </Stack.Navigator>
      }
    </>
  );
}

function DrawerContent() {

  const dispatch = useDispatch();
  const user = useSelector((state) => _get(state, "user.users", []));

  React.useEffect(() => {
    dispatch(GetAllUserRequest());
  }, [])

  const logout = async () => {
    await auth().signOut().then(() => {
    }).catch(error => {
    })
  }

  return (
    <>
      <StatusBar />
      <Drawer.Section style={{
        alignItems: 'center', justifyContent: 'center',
        height: 150, width: '100%', backgroundColor: theme.colors.appbar
      }}>
        <Avatar.Image size={60} source={user.emailVerified ? { uri: user.photoURL } : require('../assets/andanh.png')}
          style={{ backgroundColor: 'white' }}
        />
        {
          user.emailVerified ? <Text style={{ fontSize: 18, marginTop: 5, color: theme.colors.activeColor }}>{user.displayName}</Text> : null
        }
      </Drawer.Section>
      <Drawer.Section style={{ flex: 1, color: 'red' }}>
        <Drawer.Item
          icon={() => <Icon name='comments' size={24} />}
          label="Góp ý"
        />
        <Drawer.Item
          label="Báo lỗi"
          icon={() => <Icon name='bug' size={24} />}
        />
        <Drawer.Item onPress={logout}
          icon={() => <IconMate name='logout-variant' size={24} />}
          label='Đăng xuất'
        />
      </Drawer.Section>
    </>
  );
}

function RootNavigator() {
  return (
    <>
      <DrawerPage.Navigator drawerContent={() => <DrawerContent />}>
        <DrawerPage.Screen name="Home" component={MyTabs} />
      </DrawerPage.Navigator>

    </>
  );
};


function MyTabs() {

  return (
    <Tab.Navigator initialRouteName="Home"
      labeled={true}
      sceneAnimationEnabled={true}
      activeColor={theme.colors.appbar}
      inactiveColor={theme.colors.inActiveColor}
      barStyle={{ backgroundColor: theme.colors.activeColor }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Trang Chủ',
        tabBarIcon: ({ color }) => (
          <IconUI
            name="home"
            size={20}
            color={color}
          />
        ),
      }} />
      <Tab.Screen name="Bài viết" component={CategoryScreen} options={{
        tabBarLabel: 'Bài viết',
        tabBarIcon: ({ color }) => (
          <IconUI
            name="newspaper"
            size={20}
            color={color}
          />
        ),
      }} />
      <Tab.Screen name="Quét mã QR" component={QrCodeScreen} options={{
        tabBarLabel: 'Quét mã',
        tabBarIcon: ({ color }) => (
          <IconUI
            name="barcode-outline"
            color={color}
            size={20}
          />
        ),
      }} />
    </Tab.Navigator>
  );
}

