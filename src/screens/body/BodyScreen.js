import React from 'react'
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ListCard from '../../components/body/ListCard'
import { theme } from '../../core/theme'

export default ListBody = (props) => {

        return <>
                <View style={styles.root}>
                        {/* <ListCard navigation={props.navigation}/> */}
                        <Image
                                source={require('../../assets/screen/img/body.png')}
                                style={{ flex: 1 }}
                        />
                        <TouchableOpacity style={[styles.left,{top:'15%'}]} onPress={()=>props.navigation.navigate('ListBody',{name:'Cổ',id:2})} >
                                <Text style={styles.text}>Cổ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.left,{top:'35%'}]}onPress={()=>props.navigation.navigate('ListBody',{name:'Bụng',id:4})}>
                                <Text style={styles.text}>Bụng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.left,{top:'55%'}]}onPress={()=>props.navigation.navigate('ListBody',{name:'Da',id:6})}>
                                <Text style={styles.text}>Da</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.rigth,{top:'5%'}]}onPress={()=>props.navigation.navigate('ListBody',{name:'Đầu',id:1})}>
                                <Text style={styles.text}>Đầu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rigth,{top:'25%'}]}onPress={()=>props.navigation.navigate('ListBody',{name:'Ngực',id:3})}>
                                <Text style={styles.text}>Ngực</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rigth,{top:'45%'}]}onPress={()=>props.navigation.navigate('ListBody',{name:'Bộ sinh',id:5})}>
                                <Text style={styles.text}>Bộ sinh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rigth,{top:'65%'}]}onPress={()=>props.navigation.navigate('ListBody',{name:'Tứ chi',id:7})}>
                                <Text style={styles.text}>Tứ chi</Text>
                        </TouchableOpacity>
                </View>
        </>
}

const styles = StyleSheet.create({
        root: {
                flex: 1, alignContent: 'center', alignItems: 'center',
                position: 'relative'
        },
        left: {
                position: 'absolute',
                width: 100,
                backgroundColor: theme.colors.appbar,
                height: 35,
                left: '10%',
             
                borderRadius: 3,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 5,
                shadowColor: 'white',
                shadowOpacity: 1,
        },
        rigth: {
                position: 'absolute',
                width: 100,
                backgroundColor: theme.colors.appbar,
                height: 35,
                right: '10%',
                borderRadius: 3,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 5,
                shadowColor: 'white',
                shadowOpacity: 1,
        },
        text: {
                color: theme.colors.activeColor
        }
})
