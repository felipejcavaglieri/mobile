import axios from "axios";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const CountryDetails = ({ route, navigation }) => {
  const [countryInfo, setCountryInfo] = useState();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${route.params.countryName}`
        );
        setCountryInfo(data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getCountry();
  }, []);

  return (
    <SafeAreaView>
      {countryInfo && countryInfo.name ? (
        <View
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
              source={{ uri: `${countryInfo.flags.png}` }}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Nome oficial: </Text>
            <Text>{countryInfo.name.official}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Região: </Text>
            <Text>{countryInfo.region}</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Area: </Text>
            <Text>{countryInfo.area}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>População: </Text>
            <Text>{countryInfo.population}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Capital: </Text>
            <Text>{countryInfo.capital}</Text>
          </View>
          <Text
            style={{ textDecorationLine: "underline", color: "blue" }}
            onPress={() =>
              navigation.navigate("MoreDetails", { country: countryInfo })
            }
          >
            Mais informações
          </Text>
        </View>
      ) : (
        <></>
      )}
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

export default CountryDetails;
