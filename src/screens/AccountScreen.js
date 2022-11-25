import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context } from "../context/AuthContext";

const AccountScreen = () => {
  const { sign_out } = useContext(Context);
  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 50,
      }}
    >
      <Text style={{ fontSize: 30 }}>Account Screen</Text>
      <Button title="Sign Out" onPress={sign_out} />
    </SafeAreaView>
  );
};

export default AccountScreen;
