import { StyleSheet, Dimensions } from "react-native";

import colors from './Colors';
const styles = StyleSheet.create({
    bg: {
        width: '40%',
        height: '58%',
        position: 'absolute',
        right: 0,
        top: 0,
    },
    bg2: {
        width: '25%',
        height: '38%',
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    recordBg: {
        width: '40%',
        height: '58%',
        position: 'absolute',
        right: 0,
        top: 0,
    },
    sideBarBottom: {
        display: 'flex',
        gap: 20
    }, 
    sideBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        width: 80,
        height: '100%',
        backgroundColor: colors.mainColor,
        paddingTop: 15,
        paddingBottom: 15
    },
    sideBarBtn: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#66BEFD",
    },
    sideBarBtnDisabled: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#666E72",
    },
    main: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        backgroundColor: colors.mainColor
    },
    homePage: {
        marginTop: 42,
        marginLeft: 57,
        marginBottom: 52,
    },
    listPage: {
        marginTop: 42,
        marginLeft: 57,
        marginBottom: 52
    },
    discriptPage: {
        marginTop: 42,
        marginLeft: 57,
        marginRight: 57,
        height: Dimensions.get('window').height - 40,
    },
    discriptMediaPage: {
        marginLeft: 57,
        marginBottom: 52,
        display: 'flex',
        flexDirection: 'row',
        gap: 28,
        height: '100%',
        width: Dimensions.get('window').width - 80,
    },
    ul: {
        display: 'flex',
        gap: 10,
    },
    li: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 22
    },
    liDot: {
        width: 22,
        height: 22,
        borderRadius: 50,
        backgroundColor: '#D9D9D9',
    },
    liDot2: {
        width: 22,
        height: 22,
        borderRadius: 50,
        backgroundColor: '#D9D9D9',
        marginBottom: 15
    },
    list: {
        marginTop: 40,
        marginLeft: 40,
        marginBottom: 100
    },
    listTitleWrap: {
        display: 'flex',
        flexDirection: 'row',

    },
    listLine: {
        width: 9,
        height: 86,
        backgroundColor: colors.mainColor
    },
    listTextWrap: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    listText: {
        fontSize: 24,
        fontFamily: 'NanumGothic-Bold',
        color: colors.fontColor
    },
    listScript: {
        fontSize: 18,
        fontFamily: 'NanumGothic-Regular',
        color: colors.fontColor
    },
    title: {
        fontSize: 48,
        fontFamily: 'NanumGothic-Bold',
        color: colors.fontColor,
        marginLeft: 8.42,
        
    },
    subTitle: {
        fontSize: 24,
        fontFamily: 'NanumGothic-Regular',
        marginTop: 12,
        marginLeft: 7.93
    },
    text: {
        fontFamily: 'NanumGothic-Bold',
        color: colors.fontColor,
    },
    discriptTextScroll: {
        marginLeft: 20,
        marginBottom: 40,
        marginTop: 40,
    },
    discriptTextWrap: {
        display: 'flex'
    },
    discriptMediaLeft: {
        marginTop: 42,
        flex: .45,
    },
    discriptMediaRight: {
        flex: .55,
    },
    discriptMediaScroll: {
        marginTop: -10,
    },
    image: {
        maxWidth: '80%',
        maxHeight: 280,
        minHeight: 180,
        marginTop: 10,
        marginBottom: 10
    },

    recordContainer: {
        display: 'flex',
        flexDirection: "row",
        hegiht: '100%',
        width: Dimensions.get('window').width - 80,
        backgroundColor: colors.mainColor
    },
    recordLeft: {
        flex: .5,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
    },
    recordRight: {
        flex: .5,
        borderTopLeftRadius: 15, 
        borderBottomLeftRadius: 15, 
        backgroundColor: '#fff'
    },
    recordIconWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: colors.mainColor,
        elevation: 30
    },
    recordIconCircle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 180,
        borderRadius: 100,
        backgroundColor: '#fff',
    },
    recTitleWrap: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 30
    },
    recTitle: {
        fontSize: 40,
        fontFamily: 'NanumGothic-Bold',
        color: colors.fontColor,
        marginLeft: 8.42,
    },
    recLine: {
        width: 10,
        height: 42,
        backgroundColor: colors.mainColor
    },
    recScroll: {
        marginTop: 20,
        marginRight: 40,
        marginBottom: 40,
        height: Dimensions.get('window').height - 120

    },
    recStt: {
        fontSize: 16,
    }
})

export default styles;
