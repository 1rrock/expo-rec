import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Main from './src/Main';
import * as FileSystem from 'expo-file-system';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
export default function App() {
  const [fontsLoaded] = useFonts({
    'NanumGothic-Regular': require('./src/assets/fonts/NanumGothic-Regular.ttf'),
    'NanumGothic-ExtraBold': require('./src/assets/fonts/NanumGothic-ExtraBold.ttf'),
    'NanumGothic-Bold': require('./src/assets/fonts/NanumGothic-Bold.ttf'),
  });
  return (  
    <View>
      {
        fontsLoaded && (
          <View>
            <StatusBar hidden={true} />
            <Main />
          </View>
        )
      }
    </View>
  );
}
