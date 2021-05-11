import React from 'react';
import { Text, View, StatusBar } from 'react-native';
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
import { theme } from './core/theme'
import { Drawer } from 'react-native-paper';


const DrawerPage = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



function DrawerContent() {
    const [active, setActive] = React.useState('');
    return (
        <>
            <StatusBar backgroundColor={theme.colors.statusbar}
             barStyle="dark-content" translucent={false} 
             showHideTransition="fade"
             />
            <Drawer.Section title="Some title" style={{ flex: 1,}}>
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

function HomeMainScreen() {

    return (
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

            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />

            <Stack.Screen name="Home" options={{
                headerShown: false
            }} component={RootNavigator} />

            <Stack.Screen name="HomeCovidScreen" options={{
                headerShown: false
            }} component={HomeCovidScreen} />



        </Stack.Navigator>
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
        <React.Fragment>
            <Tab.Navigator initialRouteName="Home"
                shifting={true}
                sceneAnimationEnabled={false}
                screenOptions={{
                    tabBarColor: theme.colors.appbar
                }}
            >
                <Tab.Screen name="Trang chủ" component={Home} options={{
                    tabBarIcon: 'home',
                }} />
                <Tab.Screen name="Bài viết" component={ForgotPasswordScreen} options={{
                    tabBarIcon: 'message-text-outline',
                }} />
            </Tab.Navigator>
        </React.Fragment>
    );
}
export default HomeMainScreen;