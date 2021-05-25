import React,{useState} from 'react';
import Background from '../components/HomeLogin/Background';
import BackButton from '../components/HomeLogin/BackButton';
import Logo from '../components/HomeLogin/Logo';
import Header from '../components/HomeLogin/Header';
import TextInput from '../components/HomeLogin/TextInput';
import { emailValidator, passwordValidator } from '../core/utils';
import {TouchableOpacity,View,Text,StyleSheet,ScrollView} from 'react-native';
import Button from '../components/HomeLogin/Button';
import { theme } from '../core/theme';
const LoginScreen =({ navigation })=> {

    const  goBack =()=>{
        navigation.goBack();
    }

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const _onLoginPressed = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }
        navigation.navigate('DashBoardScreen');
    };

    return (
        <>

        <BackButton props={{goBack}} />
            <Background>
                <View style={styles.container}>
                    <Header>Welcome</Header>
                    <TextInput
                        label="Email"
                        returnKeyType="next"
                        value={email.value}
                        onChangeText={text => setEmail({ value: text, error: '' })}
                        error={!!email.error}
                        errorText={email.error}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                    <TextInput
                        label="Password"
                        returnKeyType="done"
                        value={password.value}
                        onChangeText={text => setPassword({ value: text, error: '' })}
                        error={!!password.error}
                        errorText={password.error}
                        secureTextEntry
                    />

                    <View style={styles.forgotPassword}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgotPasswordScreen')}
                        >
                            <Text style={styles.label}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                    <Button mode="contained" onPress={_onLoginPressed}>
                        Đăng nhập
                    </Button>
                </View>
            </Background>

</>

    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});
export  default  LoginScreen;
