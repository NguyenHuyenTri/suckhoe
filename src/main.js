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
    Home
} from '../src/screens/export';
import SkipButton from './components/SplashScreen/SkipButton';
import StatusBar from './components/StatusBar/StatusBar'

import { theme } from './core/theme'
import { Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, TouchableOpacity } from 'react-native';


const DrawerPage = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



function DrawerContent() {
    const [active, setActive] = React.useState('');
    return (
        <>
            <StatusBar />
            <Drawer.Section title="Some title" style={{ flex: 1, }}>
                <Drawer.Item
                    label="First Item"
                    active={active === 'first'}
                    onPress={() => setActive('first')}
                />
                <Drawer.Item
                    label="Second Item"
                    active={active === 'second'}
                    onPress={() => setActive('second')}
                />
            </Drawer.Section>

        </>

    );
}

function IntroScreen() {

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
                    headerShown: false
                }} component={HomeCovidScreen} />

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
            activeColor='white'
            // inactiveColor="white"
            barStyle={{ backgroundColor: theme.colors.appbar }}
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
            <Tab.Screen name="Bài viết" component={ForgotPasswordScreen} options={{
                tabBarLabel: 'Bài viết',
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="newspaper"
                        size={20}
                        color={color}
                    />
                ),
            }} />
            <Tab.Screen name="Thông tin" component={ForgotPasswordScreen} options={{
                tabBarLabel: 'Thông tin',
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="sliders-h"
                        color={color}
                        size={20}
                    />
                ),
            }} />
        </Tab.Navigator>
    );
}
export default IntroScreen;