import { StyleSheet, Dimensions } from "react-native";
import colors from "./Colors";
const containers = StyleSheet.create({
    home: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        backgroundColor: colors.mainColor
    },
    contents: {
        width: Dimensions.get('window').width - 80,
        backgroundColor: colors.white,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
});

export default containers;