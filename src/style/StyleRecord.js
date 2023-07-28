import { StyleSheet, Dimensions } from "react-native";
export default recordStyles = StyleSheet.create({
    range: {
        width: '50%',
        height: 13,
        backgroundColor: '#354A97',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#146AB5',
        marginTop: 140
    },
    btnWrap: {
        position: 'relative',
        height: 68,
        marginTop: 54,
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    dot: {
        width: 34,
        height: 34,
        borderWidth: 10,
        borderColor: '#5AB8FF',
        backgroundColor: '#fff',
        borderRadius: 100,
        position: 'absolute',
        left: 0,
        top: -13    
    }
})