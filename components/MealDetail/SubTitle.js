import { StyleSheet, View, Text } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    margin: 6,
    padding: 6,
    marginHorizontal: 1,
    marginVertical: 4,
  },

  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    padding: 6,
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: "#e2b497",
  },
});
