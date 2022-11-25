import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";

const CreateTrackScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View style={styles.container}>
        <Text
          h3
          style={{ marginTop: 50, textAlign: "center", marginBottom: 30 }}
        >
          create track screen
        </Text>

        <Map />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
});

export default CreateTrackScreen;
