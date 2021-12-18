import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { Card, HomeFirst, InputSearch, Render } from '../../Components'
import { NextPage, SearchImage } from '../../Configs/Redux/Action/UnsplashAction'

export default function Home() {
    const { data, renderAPI } = useSelector(state => state.UnsplashReducer)
    const [Search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'RENDER_PAGE', payload: true })
        dispatch(SearchImage(Search, 1), dispatch)
    }, [Search, dispatch])

    useEffect(() => {
        if (page > 1) dispatch(NextPage(Search, page, data), dispatch)
    }, [page, dispatch])


    // console.log((Search == ''));
    return (
        <SafeAreaView style={{ backgroundColor: 'azure', height: '100%' }}>
            <View style={styles.wrapperTop}>
                <InputSearch onChange={res => setSearch(res)} />
            </View>
            {
                (renderAPI) ?
                    <Render data={10} />
                    :
                    (data.length == 0 && Search == '') ?
                        <HomeFirst status={1} />
                        :
                        (data.length == 0) ?
                            <HomeFirst status={2} />
                            :
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <Card item={item} />}
                                keyExtractor={item => item.id}
                                ListFooterComponent={() => <Render data={data.length} />}
                                onEndReached={() => {
                                    setPage(page + 1)
                                }}

                            />
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapperTop: {
        backgroundColor: '#14A39A',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginBottom: 3
    },

})
