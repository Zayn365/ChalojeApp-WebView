import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, Button } from "react-native"; // Import ImageBackground
import {Link , Outlet} from 'react-router-native';
// import { useTheme } from "react-native-paper";

export default function HomeScreen() {
//   const theme = useTheme();
//   console.log(theme);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    subContainer: {
      alignItems: "center",
      marginTop: 15,
    },
    img: {
      width: 90,
      height: 90,
    },
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: "100%",
    },
    text: {
      // fontWeight: '900',
      color: '#fff',
    //   fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: 30,
      textAlign: 'center',
      // fontWeight: 550,
      letterSpacing: 0,
      lineHeight: 24,
      paddingHorizontal: 10,
      paddingVertical: 10
    },
    subText : {
    //   ...theme.fonts.labelMedium,
      color: '#ffffffad',
      textAlign: 'center',
      paddingHorizontal: 16 ,
      paddingVertical: 10
    },
    middleContainer : {
      flex: 1,
      textAlign: "center",
      justifyContent: 'flex-end',
      // position: "relative",
      // top: 300,
      lineHeight: 20
    },
    link: {
        backgroundColor: '#2196f3',
        padding: 10,
        // borderRadius: 5,
      },
    buttonText: {
        color: 'white',
        // fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22
      },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/banner.jpg")}
        style={styles.imageBackground}
      >
        {/* TOP LOGO */}
        <View style={styles.subContainer}>
          <Image style={styles.img} source={require("./../assets/adaptive-icon.png")} />
        </View>
        {/* MIDDLE TEXT  */}
        <View style={styles.middleContainer}>
          <Text style={styles.text}>
            Find The Perfect Flight With Just One Click!
          </Text>
          <Text style={styles.subText}>
          Book your flights on-the-go with just a tap on your smartphone!
          </Text>
         <Link to='/webview' style={styles.link}>
            <Text style={styles.buttonText}>Get Started!</Text>
         </Link>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
      <Outlet />
    </View>
  );
}
