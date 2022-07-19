import { StatusBar } from "expo-status-bar";
import { Dimensions, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://clm-roig.github.io/suivie" }}
      style={{
        marginTop: Constants.statusBarHeight,
      }}
    />
  );
}
