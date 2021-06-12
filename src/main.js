import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SplashScreen,
    LoginScreen,
} from '../src/screens/export';

const Stack = createStackNavigator();

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
                 <Stack.Screen name="LoginScreen" component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </>
    );
}

export default IntroScreen;