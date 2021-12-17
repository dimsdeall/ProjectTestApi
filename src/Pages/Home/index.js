import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { Card, InputSearch, Render } from '../../Components'
import { NextPage, SearchImage } from '../../Configs/Redux/Action/UnsplashAction'

export default function Home() {
    const { data } = useSelector(state => state.UnsplashReducer)
    const [Search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(SearchImage(Search, page), dispatch)
    }, [Search, dispatch])

    useEffect(() => {
        dispatch(NextPage(Search, page, data), dispatch)
    }, [page, dispatch])

    return (
        <SafeAreaView style={{ backgroundColor: 'lightgray', height: '100%' }}>
            <View style={styles.wrapperTop}>
                <InputSearch onChange={res => setSearch(res)} />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={item => item.id}
                ListFooterComponent={() => <Render data={data.length} />}
                onEndReached={() => {
                    setPage(page + 1)
                }}
                // onScrollEndDrag
                // onEndReachedThreshold={0}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapperTop: {
        backgroundColor: '#14A39A',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginBottom: 10
    },

})
