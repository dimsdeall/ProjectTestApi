import { Alert, BackHandler } from "react-native";

const exit = () =>{
    Alert.alert(
        'Unsplash Nyonyaa API',
        'Keluar Aplikasi?', [{
            text: 'Batal',
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
     )
     return true;
}

export {exit}