import React, { memo, useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text, useWindowDimensions, ScrollView,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import 'moment/locale/vi';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItemRows from '../../components/covid-19/ItemRows';
import ItemRowsVn from '../../components/covid-19/ItemRowsVn'
import ChartView from '../../components/covid-19/ChartView';
import CaseView from '../../components/covid-19/CaseView';
import { theme } from '../../core/theme';
import { get as _get } from 'lodash';

import Loading from '../../components/body/Loading'
import { useSelector, useDispatch } from "react-redux";
import { GetCovidVietNamRequest } from '../../reducer/CovidVietNam/CovidVietNamAction';
import { GetAllCovidWorldRequest } from '../../reducer/CovidWorld/CovidWorldAction';

const HomeCovidScreen = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'Việt Nam' },
        { key: 'second', title: 'Thế giới' },
    ]);

  
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: theme.home.icon, height: 4 }}
            style={{
                backgroundColor: theme.colors.activeColor, elevation: 0,
                shadowOpacity: 0, borderColor: 'none'
            }}
            activeColor={theme.colors.appbar}
            inactiveColor={theme.colors.text}
            pressColor={'white'}
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

const FirstRoute = () => {

    const [dateTime, setDateTime] = useState(new Date());
    const dispatch = useDispatch();
    const covidvietnam = useSelector((state) => _get(state, "covidvn.covidvietnams", []));
    const covidrow = useSelector((state) => _get(state, "covidvn.covidrow", []));

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 60000);
        return () => {
            clearInterval(id);
        }
    }, []);

    useEffect(() => {
        dispatch(GetCovidVietNamRequest());
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
            {
                covidvietnam.length === 0 ? <Loading /> :
                    <ScrollView style={styles.container} horizontal={false}>
                        <View>
                            <Text style={styles.headerDate}>{convertTime(dateTime, 'LLLL')}</Text>
                            <Text style={styles.headerTitle}>Ca nhiễm vi-rút corona Việt Nam</Text>
                            <Text style={styles.headerNumber}>{covidvietnam ? numberWithCommas(covidvietnam.cases) : 0}</Text>
                        </View>
                        <View style={styles.chartContainer}>
                            <ChartView title="Tử vong" num={covidvietnam ? numberWithCommas(covidvietnam.deaths) : 0} color="#E35757"
                                arrownum={covidvietnam ? numberWithCommas(covidvietnam.todayDeaths) : 0} />
                            <ChartView title="Bình phục" num={covidvietnam ? numberWithCommas(covidvietnam.recovered) : 0} color="#6AB276"
                                arrownum={covidvietnam ? numberWithCommas(covidvietnam.todayRecovered) : 0}
                            />
                        </View>
                        <View style={styles.caseContainer} >
                            <CaseView title='Đang điều trị'
                                case={covidvietnam ? numberWithCommas(covidvietnam.active) : 0}
                                nguykich={covidvietnam ? numberWithCommas(covidvietnam.critical) : 0}
                                canhiem={covidvietnam ? numberWithCommas(covidvietnam.todayCases) : 0}
                            />
                            <View style={{ height: 10 }} />
                        </View>
                        {
                        covidrow.length > 0 || !isLoading ?

                            <ScrollView horizontal={true}
                                contentContainerStyle={{
                                    flex: 1, flexDirection: 'column', height: 400,
                                    backgroundColor: '#FFFFFF'
                                }}>
                                <Text style={{ padding: 10, textAlign: 'center', justifyContent: 'center', fontSize: 20, marginBottom:5, fontWeight: 'bold' }} >Số ca nhiễm theo tỉnh thành</Text>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5,
                                    alignItems: 'center', marginBottom: 10, borderBottomColor: theme.colors.backGround, borderWidth: 2,
                                    borderTopColor: 'white', borderLeftColor: 'white', borderRightColor: 'white',
                                }}>

                                    <Text style={{ fontSize: 15, color: '#E35757' }}>⬤ Nhiễm bệnh</Text>
                                    <Text style={{ fontSize: 15, color: '#6AB276' }}>⬤ Bình phục</Text>
                                    <Text style={{ fontSize: 15, color: '#BDBDBD' }}>⬤ Tử vong</Text>
                                </View>
                                <FlatList
                                    data={covidrow.length > 0 ? covidrow.sort((a, b) => (a.cases < b.cases) ? 1 : ((b.cases < a.cases) ? -1 : 0)) : []}
                                    renderItem={({ item }) => <ItemRowsVn item={item} />}
                                    keyExtractor={(item, index) => {
                                        return index;
                                    }}
                                />
                                 <View style={{ height: 10 }}>
                                </View>
                            </ScrollView> : null
                    }
                    </ScrollView>
                    
            }
        </>
    )

};

const SecondRoute = () => {

    const dispatch = useDispatch();
    const covidworld = useSelector((state) => _get(state, "covidworld.covidworlds", []));
    const covidcountrys = useSelector((state) => _get(state, "covidworld.covidcountrys", []));
    const [isLoading, setIsLoading] = useState(true);

    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 60000);
        return () => {
            clearInterval(id);
        }
    }, []);

    useEffect(() => {
        dispatch(GetAllCovidWorldRequest());

    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])

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
        {
            covidworld.length === 0 ? <Loading /> :
                <ScrollView style={styles.container} horizontal={false}  >
                    <View>
                        <Text style={styles.headerDate}>{convertTime(dateTime, 'LLLL')}</Text>
                        <Text style={styles.headerTitle}>Ca nhiễm vi-rút corona thế giới</Text>
                        <Text style={styles.headerNumber}>{covidworld ? numberWithCommas(covidworld.cases) : 0}</Text>
                    </View>
                    <View style={styles.chartContainer}>
                        <ChartView title="Tử vong" num={covidworld ? numberWithCommas(covidworld.deaths) : 0} color="#E35757"
                            arrownum={covidworld ? numberWithCommas(covidworld.todayDeaths) : 0} />
                        <ChartView title="Bình phục" num={covidworld ? numberWithCommas(covidworld.recovered) : 0} color="#6AB276"
                            arrownum={covidworld ? numberWithCommas(covidworld.todayRecovered) : 0}
                        />
                    </View>

                    <View style={styles.caseContainer} >
                        <CaseView title='Đang điều trị'
                            case={covidworld ? numberWithCommas(covidworld.active) : 0}
                            nguykich={covidworld ? numberWithCommas(covidworld.critical) : 0}
                            canhiem={covidworld ? numberWithCommas(covidworld.todayCases) : 0}
                        />
                        <View style={{ height: 10 }} />
                    </View>

                    {
                        covidcountrys.length > 0 || !isLoading ?

                            <ScrollView horizontal={true}
                                contentContainerStyle={{
                                    flex: 1, flexDirection: 'column', height: 400,
                                    backgroundColor: '#FFFFFF'
                                }}>
                                <Text style={{ padding: 10, textAlign: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }} >Số ca nhiễm theo quốc gia</Text>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5,
                                    alignItems: 'center', marginBottom: 10, borderBottomColor: theme.colors.backGround, borderWidth: 2,
                                    borderTopColor: 'white', borderLeftColor: 'white', borderRightColor: 'white',
                                }}>

                                    <Text style={{ fontSize: 15, color: '#E35757' }}>⬤ Nhiễm bệnh</Text>
                                    <Text style={{ fontSize: 15, color: '#6AB276' }}>⬤ Bình phục</Text>
                                    <Text style={{ fontSize: 15, color: '#BDBDBD' }}>⬤ Tử vong</Text>
                                </View>
                                <FlatList
                                    data={covidcountrys.length > 0 ? covidcountrys.sort((a, b) => (a.cases < b.cases) ? 1 : ((b.cases < a.cases) ? -1 : 0)) : []}
                                    renderItem={({ item }) => <ItemRows item={item} />}
                                    keyExtractor={(item, index) => {
                                        return index;
                                    }}
                                />
                            </ScrollView> : null
                    }
                    <View style={{ height: 10 }}>
                    </View>

                </ScrollView >

        }
    </>
};




const styles = StyleSheet.create({
    container: {
        padding: 10,
        // flex: 1,
        backgroundColor: theme.colors.backGround
    },
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
    chartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    caseContainer: {
        marginTop: 20,
    },
    textAll: {
        fontSize: 15,
        marginLeft: 10,
        textAlign: 'center',
        justifyContent: 'center',
        width: '100%',
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
    }
});
export default memo(HomeCovidScreen);
