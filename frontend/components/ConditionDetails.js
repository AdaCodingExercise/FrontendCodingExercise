import { SafeAreaView, StyleSheet } from "react-native";

export const ConditionDetails = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  contentWrapper: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
