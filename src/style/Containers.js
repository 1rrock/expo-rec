import { StyleSheet, Dimensions } from "react-native";

const containers = StyleSheet.create({
    home: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
    },
    contents: {
        width: Dimensions.get('window').width - 100
    }
});

export default containers;