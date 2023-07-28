import { Dimensions, Text, View } from "react-native";
import styles from "../style/StyleSheet";
const Media = ({ route }) => {
    return (
        <View style={{marginTop: 42, marginLeft: 57, marginRight: 57, marginBottom: 42, height: Dimensions.get('window').height-84, display: 'flex'}}>
            <View style={styles.listTitleWrap}>
                <View style={styles.listLine} />
                <View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{route.params.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>{route.params.subTitle}</Text>
                </View>
            </View>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40, flex: 1, width: '100%', height: null, borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
                <Text>영상, 사진 영역</Text>
            </View>
        </View>
    )
};
export default Media;