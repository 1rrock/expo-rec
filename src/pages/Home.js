import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import * as FileSystem from 'expo-file-system';
import styles from "../style/StyleSheet";
import { Image } from 'expo-image';
import bgImg from '../assets/images/bg.png';
import bgImg2 from '../assets/images/bg2.png';
import containers from "../style/Containers";
import SideBar from "../components/SideBar";

const Home = ({ navigation }) => {

    // rec폴더에서 대 제목 리스트
    const homeListData = [
        {
            key: 1,
            title: '대 제목 001', // 대 제목 폴더 명
            subTitle: '해당내용의 부제1' // 대 제목 안의 부제 txt 파일
        },
        {
            key: 2,
            title: '대 제목 002',
            subTitle: '해당내용의 부제2'
        },
        {
            key: 3,
            title: '대 제목 003',
            subTitle: '해당내용의 부제3'
        }
    ];
    // const test = async () => {
    //     // await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+'/rec2', {intermediates: true});
    //     // const t = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory+'rec')
    //     // createFileAsync(FileSystem.documentDirectory+'rec', , mimeType)
    //     // FileSystem.getContentUriAsync(FileSystem.documentDirectory)

    //     const t = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory)
    //     // FileSystem.deleteAsync(FileSystem.documentDirectory+'/rec2')
    //     console.log(t)
    // };

    const onClickList = (e) => {
        const result = {
            idx: e.key,
            title: e.title,
            subTitle: e.subTitle
        };
        navigation.navigate("List", result);
    }

    return (
        <View style={containers.home}>
            <SideBar navigation={navigation} />
            <View style={containers.contents}>
                <Image style={styles.bg} contentPosition={"top right"} contentFit='contain' source={bgImg } />
                <Image style={styles.bg2} contentPosition={"bottom left"} contentFit='contain' source={bgImg2 } />
                <ScrollView style={styles.homePage}>
                    <View style={styles.ul}>
                        {
                            homeListData.map(data=>{
                                return (
                                    <TouchableOpacity key={data.key} style={styles.li} onPress={() => onClickList(data)}>
                                        <View style={styles.liDot} />
                                        <Text style={styles.listText}>{data.title}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};
export default Home;