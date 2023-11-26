import { Text } from "react-native";
import { FONTS } from "../../../../assets/styles/texts";


export const TextRegular = ({ children, style }) => <Text style={[style, { fontFamily: FONTS.regular }]}>{children}</Text>
export const TextMedium = ({ children, style }) => <Text style={[style, { fontFamily: FONTS.medium }]}>{children}</Text>
export const TextSemiBold = ({ children, style }) => <Text style={[style, { fontFamily: FONTS.semibold }]}>{children}</Text>
export const TextBold = ({ children, style }) => <Text style={[style, { fontFamily: FONTS.bold }]}>{children}</Text>