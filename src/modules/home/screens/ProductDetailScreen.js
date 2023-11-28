import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ContainImage, Container, CoverImage, Space, TextMedium, TextRegular, TextSemiBold } from '../../common/components'
import { getHitSlop, getRelHeight, screenWidth } from '../../common/utils/function'
import LAYOUT from '../../../assets/styles/layout'
import COMMON_ICONS from '../../common/assets/icons'
import COLORS from '../../../assets/styles/colors'

const InfoCard = ({ icon, text, iconDimensions }) => {
    return (
        <View style={styles.card}>
            <View style={LAYOUT.centers}>
                <ContainImage
                    source={icon}
                    {...iconDimensions}
                    isDefault
                />
            </View>
            <TextMedium style={styles.info_text}>
                {text}
            </TextMedium>
        </View>
    )
}

const ProductDetailScreen = ({ navigation, route }) => {
    const data = route?.params || {}
    return (
        <Container edges={[]}>
            <View style={styles.image_container}>
                <CoverImage
                    source={data.image}
                    isDefault
                    style={styles.image}
                />
                <View style={styles.product_details}>
                    <View style={[LAYOUT.row, LAYOUT.justifyBetween, LAYOUT.alignCenter]}>
                        <View>
                            <TextSemiBold style={styles.category}>{data.category}</TextSemiBold>
                            <TextRegular style={styles.source}>From Africa</TextRegular>
                        </View>
                        <View style={LAYOUT.row}>
                            <InfoCard
                                icon={COMMON_ICONS.beans}
                                iconDimensions={{ height: 22.85, width: 22.33 }}
                                text={"Bean"}
                            />
                            <Space horizontal space={10} />
                            <InfoCard
                                icon={COMMON_ICONS.location}
                                iconDimensions={{ height: 20.5, width: 17.75 }}
                                text={"Africa"}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    image_container: {
        height: getRelHeight(509.23),
        position: "relative"
    },
    image: {
        height: "100%",
        width: "100%",
        ...LAYOUT.absolute
    },
    product_details: {
        ...LAYOUT.absolute,
        bottom: 0,
        left: 0,
        width: screenWidth,
        height: 148.2,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 18.94,
        paddingBottom: 15.6,
        paddingLeft: 22.5,
        paddingRight: 20.06
    },
    card: {
        height: 55.71,
        width: 55.71,
        backgroundColor: "#141921",
        borderRadius: 10,
        ...LAYOUT.centers
    },
    info_text: {
        color: "#AEAEAE",
        fontSize: 10,
        lineHeight: 20
    },
    category: {
        fontSize: 20,
        color: COLORS.white
    },
    source: {
        color: "#AEAEAE",
        fontSize: 12
    }
})