import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ContainImage, CoverImage } from '../images/StyledImage'
import LAYOUT from '../../../../assets/styles/layout'
import COMMON_ICONS from '../../assets/icons'
import COLORS from '../../../../assets/styles/colors'
import { TextRegular, TextSemiBold } from '../texts/Texts'
import { navigateToScreen } from '../../utils/function'
import SCREENS from '../../../../navigation/screens'

const Product = ({ category, price, description, image, rating, navigation }) => {
    return (
        <LinearGradient
            colors={['#252A32', 'rgba(38, 43, 51, 0.00)']}
            start={{ x: 0.9, y: 0.1 }}
            locations={[0.4, 1]}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigateToScreen(navigation, SCREENS.ProductDetail, {
                category, price, description, image, rating
            })}>

                <View style={styles.image_container}>
                    <CoverImage
                        source={image}
                        isDefault
                        height={126}
                        width={126}
                    />
                    {rating && <View style={styles.rating_view}>
                        <ContainImage
                            source={COMMON_ICONS.star}
                            height={10}
                            width={10}
                            isDefault
                        />
                        <TextSemiBold style={styles.rating}>
                            {rating}
                        </TextSemiBold>
                    </View>}
                </View>
            </TouchableWithoutFeedback>
            <TextRegular style={styles.category}>{category}</TextRegular>
            <TextRegular style={styles.description}>{description}</TextRegular>
            <View style={styles.price_view}>
                <View style={[LAYOUT.alignCenter, LAYOUT.row]}>
                    <TextSemiBold style={styles.dollar_sign}>$</TextSemiBold>
                    <TextSemiBold style={styles.price}> {price}</TextSemiBold>
                </View>
                <View style={styles.plus_btn}>
                    <ContainImage
                        source={COMMON_ICONS.plus}
                        height={8}
                        width={8}
                        isDefault
                    />
                </View>
            </View>
        </LinearGradient>
    )
}

export default Product

const styles = StyleSheet.create({
    plus_btn: {
        height: 28.44,
        width: 28.44,
        borderRadius: 7,
        ...LAYOUT.centers,
        backgroundColor: COLORS.primary
    },
    price: {
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.white
    },
    dollar_sign: {
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.primary
    },
    price_view: {
        marginTop: 2.89,
        ...LAYOUT.row,
        ...LAYOUT.justifyBetween,
    },
    description: {
        fontSize: 9,
        color: COLORS.white,
        lineHeight: 20,
    },
    category: {
        marginTop: 9.86,
        color: COLORS.white,
        fontSize: 13,
        lineHeight: 20
    },
    container: {
        marginRight: 19,
        padding: 12,
        paddingBottom: 22.75,
        borderRadius: 23,
        width: 149,
        height: 245.68
    },
    image_container: {
        height: 126,
        width: 126,
        borderRadius: 16,
        overflow: "hidden"
    },
    rating_view: {
        ...LAYOUT.absolute,
        top: 0,
        right: 0,
        height: 22,
        width: 53,
        backgroundColor: "rgba(0,0,0,0.6)",
        borderBottomLeftRadius: 999,
        ...LAYOUT.centers,
        ...LAYOUT.row
    },
    rating: {
        marginLeft: 4,
        color: COLORS.white,
        fontSize: 10
    }
})