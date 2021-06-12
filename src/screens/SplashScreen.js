import React, { useEffect } from 'react';
import Background from '../components/HomeLogin/Background';
import Logo from '../components/HomeLogin/Logo';
import { Snackbar } from 'react-native-paper';
import NetInfo from "@react-native-community/netinfo";
import { BackHandler } from 'react-native'

const SpashScreen1 = (props) => {

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(true);
    const onDismissSnackBar = () => setVisible(false);

    useEffect(() => {
        // getAllData();
        navigateToHome();
    }, [])

    const getAllData = async () => {
        NetInfo.fetch().then(state => {
            if (state.isInternetReachable && state.isConnected) {
                navigateToHome();
            } else {
                onToggleSnackBar();
            }
        });

    }

    navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(2000).then(() => props.navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
        }));
    };

    return (
        <Background>
            <Logo />
            <Snackbar style={{ backgroundColor: '#E35757', width: '100%' }}
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Đóng',
                    onPress: () => {
                        BackHandler.exitApp();
                    },
                }}>
                Bạn đang khả dụng vui lòng kết nối Internet
      </Snackbar>
        </Background>
    )
}
export default SpashScreen1;
