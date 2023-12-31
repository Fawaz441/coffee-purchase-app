import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { ContainImage, Container, CoverImage, TextSemiBold } from '../../common/components'
import LAYOUT from '../../../assets/styles/layout'
import HOME_ICONS from '../assets/icons'
import HOME_IMAGES from '../assets/images'
import COLORS from '../../../assets/styles/colors'
import { CoffeeBeans, SearchBar, CoffeeList } from '../components'

const HomeScreen = ({ navigation }) => {
    return (
        <Container edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.padded}>
                    <View style={[LAYOUT.row, LAYOUT.justifyBetween, { marginVertical: 30 }]}>
                        <ContainImage
                            source={HOME_ICONS.menu}
                            height={30}
                            width={30}
                            isDefault
                        />
                        <View style={styles.profileImage}>
                            <CoverImage
                                source={HOME_IMAGES.user}
                                height={30}
                                width={30}
                                isDefault
                            />
                        </View>
                    </View>
                    <TextSemiBold style={styles.header}>Find the best coffee for you</TextSemiBold>
                    <SearchBar />
                </View>
                <CoffeeList navigation={navigation} />
                <CoffeeBeans navigation={navigation} />
            </ScrollView>
        </Container>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    padded: {
        paddingHorizontal: 30
    },
    profileImage: {
        height: 30,
        width: 30,
        overflow: "hidden",
        borderRadius: 10
    },
    header: {
        color: COLORS.white,
        maxWidth: 195,
        fontSize: 28,
        lineHeight: 36,
        marginBottom: 28
    }
})