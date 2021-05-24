import React,{useEffect,useState} from 'react'
import { View } from 'react-native';
import ListCard from '../../components/body/ListCard'
import Loading from '../../components/body/Loading'
export default ListBody = (props) => {

      
        const [data, setData] = useState()
        const url = `https://trinh.toolgencode.com/public/api/bodies/${props.route.params.id}`;
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            if (data === undefined) {
                fetchData();
            }
        }, [data === undefined])
    
    
        const fetchData = async () => {
            try {
                const result = await fetch(url);
                const response = await result.json();
                setData(response)
                setLoading(false)
        console.log(response.length,'rresponse')

            } catch (error) {
                setLoading(false)
            }
        }

    return <>
            <View style={{flex:1}}>
                    {
                            loading && data=== undefined? <Loading/> :
                         <ListCard navigation={props.navigation} data={data}/>
                    }
                   
            </View>
        </>
}
