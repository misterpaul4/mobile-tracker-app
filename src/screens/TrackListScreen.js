import { View, Text, Button } from "react-native";
import { paths } from "../paths";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>track list screen</Text>

      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate(paths.trackDetails)}
      />
    </View>
  );
};

export default TrackListScreen;
