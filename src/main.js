import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    SplashScreen,
    ForgotPasswordScreen,
    HomeCovidScreen,
    Tips1,
    Tips2,
    Tips3,
    Home,
    DrugScreen,
    CategoryScreen,
    CategoryNewScreen,
    DrugDetailsScreen,
    BodyScreen,
    ListBody,
    Body,
    WeatherScreen,
    Weather,
    LoginScreen,
    QrCodeScreen,
} from '../src/screens/export';
import SkipButton from './components/SplashScreen/SkipButton';
import StatusBar from './components/StatusBar/StatusBar'

import { theme } from './core/theme'
import { Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native'

const DrawerPage = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



function DrawerContent() {
    const [active, setActive] = React.useState('');
    return (
        <>
            <StatusBar />
            <Drawer.Section>
            <Image
                source={require('./assets/anhbia.jpg')}
                size={60}
                style={{ alignItems: 'center', justifyContent: 'center',
                 height: 150, width: '100%', backgroundColor: 'white' }}
            />
            </Drawer.Section>
            <Drawer.Section title='Đông Á' style={{ flex: 1, }}>
                <Drawer.Item
                    label="Báo lỗi"
                    active={active === 'first'}
                    onPress={() => setActive('first')}
                />
                <Drawer.Item
                    label="Góp ý"
                    active={active === 'second'}
                    onPress={() => setActive('second')}
                />
            </Drawer.Section>
        </>
    );
}

function IntroScreen() {

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

    return (
        <>
            <Stack.Navigator initialRouteName="SplashScreen"
                headerMode="screen"
                animation="fade"
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen}
                    options={{
                        headerShown: false
                    }}
                />
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

                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />

                <Stack.Screen name="HomeCovidScreen" options={{
                    headerShown: true,
                    title: 'Viêm đường hô hấp Covid-19',
                    headerHideShadow: false,
                    headerTintColor: theme.colors.activeColor,
                    headerTitleStyle: headerTitleStyle,
                    headerStyle: headerStyle,
                }} component={HomeCovidScreen} />

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
        </>
    );
}


function RootNavigator() {
    return (
        <>
            <DrawerPage.Navigator drawerContent={() => <DrawerContent />}>
                <DrawerPage.Screen name="Home" component={MyTabs} />
                {/* <Drawer.Screen name="Home" component={MyTabs} /> */}
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
            <Tab.Screen name="Trang chủ" component={Home} options={{
                tabBarLabel: 'Trang Chủ',
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="home"
                        size={20}
                        color={color}
                    />
                ),
            }} />
            <Tab.Screen name="Bài viết" component={CategoryScreen} options={{
                tabBarLabel: 'Bài viết',
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="newspaper"
                        size={20}
                        color={color}
                    />
                ),
            }} />
            <Tab.Screen name="Quét mã QR" component={QrCodeScreen} options={{
                tabBarLabel: 'Quét QR',
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="barcode"
                        color={color}
                        size={20}
                    />
                ),
            }} />
        </Tab.Navigator>
    );
}
export default IntroScreen;