import React, { memo, useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text, ScrollView, useWindowDimensions
} from 'react-native';
import moment from 'moment';
import 'moment/locale/vi';

import { TabView, SceneMap, TabBar} from 'react-native-tab-view';

import ChartView from '../../components/covid-19/ChartView';
import CaseView from '../../components/covid-19/CaseView';
import { theme } from '../../core/theme';

const HomeCovidScreen = ({ navigation }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'Thế giới' },
        { key: 'second', title: 'Việt Nam' },
    ]);

    _renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
    
        return (
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, i) => {
              const opacity = props.position.interpolate({
                inputRange,
                outputRange: inputRange.map((inputIndex) =>
                  inputIndex === i ? 1 : 0.5
                ),
              });
    
              return (
                <TouchableOpacity
                  style={styles.tabItem}
                  onPress={() => this.setState({ index: i })}>
                  <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      };

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: theme.home.icon ,height:4}}
          style={{ backgroundColor: '#FFFFFF',color:'red' }}
          activeColor={theme.home.icon}
          inactiveColor={theme.home.textbottom}
        />
      );


    return (
        <>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </>
    )
}

const SecondRoute = () => {

    const [dateTime, setDateTime] = useState(new Date());
    const url = 'https://api.covid19api.com/total/country/vn'
    const [data, setData] = useState();
    const [dataLast,setDataLast] = useState();

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 60000);
        return () => {
            clearInterval(id);
        }
    }, []);

    useEffect(() => {
        const fetchCovidData = async () => {
            try {
                const result = await fetch(url);
                const response = await result.json();
                setData(response[response.length - 1]);
                setDataLast(response[response.length - 2]);
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchCovidData();
    }, []);


    const convertTime = (time, formatType) => {
        return jsUcfirst(moment(time).format(formatType));
    }
    function jsUcfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>
          <ScrollView style={styles.container} >
          <View>
                <Text style={styles.headerDate}>{convertTime(dateTime, 'LLLL')}</Text>
                <Text style={styles.headerTitle}>Ca nhiễm vi-rút corona Việt Nam</Text>
                <Text style={styles.headerNumber}>{data ? numberWithCommas(data.Confirmed) : 0}</Text>
            </View>
            <View style={styles.chartContainer}>
                <ChartView title="Tử vong" num={data ? numberWithCommas(data.Deaths) : 0} color="#E35757"
                    arrownum={data && dataLast ? numberWithCommas(data.Deaths-dataLast.Deaths) : 0} />
                <ChartView title="Bình phục" num={data && dataLast ? numberWithCommas(data.Recovered) : 0} color="#6AB276"
                    arrownum={data && dataLast ? numberWithCommas(data.Recovered-dataLast.Recovered) : 0}
                />
            </View>
            <View style={styles.caseContainer}>
                <CaseView title='Đang điều trị'
                    case={data ? numberWithCommas(data.Active) : 0}
                    nguykich={data ? numberWithCommas(0) : 0}
                    canhiem={data && dataLast ? numberWithCommas(data.Confirmed-dataLast.Confirmed) : 0}
                />
                <View style={{ height: 10 }} />
            </View>
            <View style={{ height: 30 }}>
            </View>
          </ScrollView>
        </>
    )
   
};

const FirstRoute = () => {

    const [dateTime, setDateTime] = useState(new Date());

    const url = "https://disease.sh/v3/covid-19/all";
  
    const [data, setData] = useState();

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 60000);
        return () => {
            clearInterval(id);
        }
    }, []);

    useEffect(() => {
        const fetchCovidData = async () => {
            try {
                const result = await fetch(url);
                const response = await result.json();
                setData(response)
                
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchCovidData();
    }, []);

    const convertTime = (time, formatType) => {
        return jsUcfirst(moment(time).format(formatType));
    }
    function jsUcfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return <>
        <ScrollView style={styles.container} >
            <View>
                <Text style={styles.headerDate}>{convertTime(dateTime, 'LLLL')}</Text>
                <Text style={styles.headerTitle}>Ca nhiễm vi-rút corona thế giới</Text>
                <Text style={styles.headerNumber}>{data ? numberWithCommas(data.cases) : 0}</Text>
            </View>
            <View style={styles.chartContainer}>
                <ChartView title="Tử vong" num={data ? numberWithCommas(data.deaths) : 0} color="#E35757"
                    arrownum={data ? numberWithCommas(data.todayDeaths) : 0} />
                <ChartView title="Bình phục" num={data ? numberWithCommas(data.recovered) : 0} color="#6AB276"
                    arrownum={data ? numberWithCommas(data.todayRecovered) : 0}
                />
            </View>

            <View style={styles.caseContainer}>
                <CaseView title='Đang điều trị'
                    case={data ? numberWithCommas(data.active) : 0}
                    nguykich={data ? numberWithCommas(data.critical) : 0}
                    canhiem={data ? numberWithCommas(data.todayCases) : 0}
                />
                <View style={{ height: 10 }} />
            </View>
            <View style={{ height: 30 }}>
            </View>
        </ScrollView>
    </>
};




const styles = StyleSheet.create({
    headerDate: {
        fontSize: 14,
        fontWeight: '400',
        color: '#35343A',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: '#35343A',
        marginVertical: 8,
    },
    headerNumber: {
        fontSize: 36,
        fontWeight: '500',
        color: '#35343A',
    },


    img: {
        width: 30,
        height: 30,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flex: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    container: {
        padding: 20,
        flex: 1,
    },



    chartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    caseContainer: {
        marginTop: 20,
    },
});
export default memo(HomeCovidScreen);
