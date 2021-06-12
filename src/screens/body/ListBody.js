import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import ListCard from '../../components/body/ListCard';
import Loading from '../../components/body/Loading';

import { useSelector, useDispatch } from "react-redux";
import { get as _get } from 'lodash';
import { getBodyByIdRequest } from '../../reducer/Body/BodyAction';

export default ListBody = (props) => {



    const dispatch = useDispatch();
    const body = useSelector((state) => _get(state, "body.bodys", []));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [])
   

    const getData = async () => {
        await dispatch(getBodyByIdRequest(props.route.params.id));
        setLoading(false)
    }

    return <>
        <View style={{ flex: 1 }}>
            {
                loading || body.length === 0 ? <Loading /> :
                    <ListCard navigation={props.navigation} data={body} />
            }
        </View>
    </>
}
