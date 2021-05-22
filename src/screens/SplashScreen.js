import React, {Component} from 'react';
import Background from '../components/HomeLogin/Background';
import Logo from '../components/HomeLogin/Logo';

export default class SplashScreen extends Component {
    render() {
        return (
            <Background>
                <Logo/>
            </Background>
        );
    }
    async componentDidMount() {
        const data = await this.navigateToHome();
        if (data !== null) {
            this.props.navigation.push('Tips1');
        }}
    navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(2000).then(() => this.props.navigation.push('Tips1'));
    };
}
