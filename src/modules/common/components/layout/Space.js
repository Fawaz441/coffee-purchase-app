import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'

const Space = ({ horizontal = false, space }) => {
    const style = useMemo(() => {
        if (horizontal) {
            return { width: space }
        }
        return { height: space }
    }, [])
    return (
        <View style={style} />
    )
}

export default Space

const styles = StyleSheet.create({})