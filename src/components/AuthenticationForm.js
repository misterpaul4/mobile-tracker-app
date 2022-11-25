import { useContext, useState } from "react";
import { View, Button as RB } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { paths } from "../paths";
import { Context as AuthContext } from "../context/AuthContext";
import { withNavigation } from "react-navigation";

const AuthenticationForm = ({
  navigation,
  action,
  handleSubmit,
  headerText,
}) => {
  const [email, setEmail] = useState("user-2@test.com");
  const [password, setPassword] = useState("password123");

  const { state } = useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginBottom: 200,
      }}
    >
      <Spacer>
        <Text style={{ marginBottom: 50, marginLeft: 10 }} h3>
          {headerText}
        </Text>

        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        {state.errorMessage && (
          <Text style={{ textAlign: "center", marginBottom: 30, color: "red" }}>
            {state.errorMessage}
          </Text>
        )}

        <Button
          title={action.text}
          onPress={() => handleSubmit({ email, password })}
        />

        <Text style={{ textAlign: "center", marginTop: 50 }}>
          {action.extras.description}
        </Text>

        <RB
          title={action.extras.text}
          onPress={() => navigation.navigate(action.extras.path)}
        />
      </Spacer>
    </View>
  );
};

export default withNavigation(AuthenticationForm);
