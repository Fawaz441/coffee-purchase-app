import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../../../assets/styles/colors';
import { StatusBar } from 'expo-status-bar';


const Container = ({ edges = ['top'], backgroundColor = COLORS.background, children, barStyle = "light" }) => {
    return (
        <SafeAreaView edges={edges} style={{ flex: 1, backgroundColor }}>
            <StatusBar style={barStyle} />
            {children}
        </SafeAreaView>
    )
}

export default Container