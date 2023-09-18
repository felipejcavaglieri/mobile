import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
const MoreDetails = ({ route }) => {
  const country = route.params.country;
  return (
    <SafeAreaView
      style={{
        backgroundColor: "lightgray",
        marginTop: 32,
        marginHorizontal: 16,
        padding: 8,
      }}
    >
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          marginBottom: 30,
          borderRadius: 10,
          backgroundColor: "gray",
          boxSizing: "border-box",
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
          }}
          source={{ uri: `${country.flags.png}` }}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.formItemTitle}>Sigla: </Text>
        <Text>{country.cca2}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.formItemTitle}>País independente: </Text>
        <Text>{country.independent ? "Sim" : "Não"}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.formItemTitle}>Subregião: </Text>
        <Text>{country.subregion}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    padding: 4,
    backgroundColor: "cyan",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  formItemTitle: {
    fontWeight: "bold",
  },
  item: {
    marginBottom: 8,
  },
});

export default MoreDetails;
