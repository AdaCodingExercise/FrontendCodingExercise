import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import LOGO from "../assets/ada_logo.png";
import { StatusBar } from "expo-status-bar";

export const ConditionList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={LOGO} style={styles.logo} />
      <Text style={styles.header}>Tap on a condition to get more info:</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  condition: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
  },
  logo: {
    width: 64,
    height: 64,
    margin: 32,
  },
  header: {
    fontSize: 18,
    marginBottom: 16,
  },
});
