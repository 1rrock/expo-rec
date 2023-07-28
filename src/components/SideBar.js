import { Text, TouchableOpacity, View } from "react-native";
import HomeIcon from '../assets/images/home.svg';
import MicIcon from '../assets/images/mic.svg';
import FolderIcon from '../assets/images/folder.svg';
import styles from "../style/StyleSheet";
const SideBar = ({navigation, onClickRec, isRecBtnVisible}) => {
    const onClickHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.sideBar}>
            <TouchableOpacity onPress={onClickHome} style={styles.sideBarBtn}>
                <HomeIcon />
            </TouchableOpacity>
            <View style={styles.sideBarBottom}>
                <TouchableOpacity onPress={onClickRec} style={isRecBtnVisible ? styles.sideBarBtn : styles.sideBarBtnDisabled}>
                    <MicIcon />
                </TouchableOpacity>
                <TouchableOpacity style={isRecBtnVisible ? styles.sideBarBtn : styles.sideBarBtnDisabled}>
                        <FolderIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
};
export default SideBar;