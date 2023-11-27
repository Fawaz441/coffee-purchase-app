import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import LAYOUT from '../../../assets/styles/layout'
import COLORS from '../../../assets/styles/colors'
import { ContainImage } from '../../common/components'
import HOME_ICONS from '../assets/icons'
import { FONTS } from '../../../assets/styles/texts'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View pointerEvents='none'>
                <ContainImage
                    source={HOME_ICONS.search}
                    height={20}
                    width={20}
                    style={styles.icon}
                    isDefault
                />
            </View>
            <TextInput
                style={styles.input}
                cursorColor={COLORS.white}
                placeholder='Find Your Coffee...'
                placeholderTextColor={COLORS.faintWhite}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        ...LAYOUT.row,
        height: 45,
        backgroundColor: COLORS.faintBlack,
        borderRadius: 15
    },
    input: {
        paddingLeft: 57,
        height: 45,
        flex: 1,
        fontFamily: FONTS.medium,
        color: COLORS.white
    },
    icon: {
        ...LAYOUT.absolute,
        top: 12,
        left: 18,
    }
})