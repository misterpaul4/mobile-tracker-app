import { paths } from "../paths";
import { Context as AuthContext } from "../context/AuthContext";
import AuthenticationForm from "../components/AuthenticationForm";
import { useContext, useEffect } from "react";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { sign_in, clearErrorMessage } = useContext(AuthContext);

  const handleSubmit = ({ email, password }) => sign_in({ email, password });

  return (
    <>
      <NavigationEvents
        onWillFocus={() => {}} // called anytime you attempt to navigate to this screen
        onDidFocus={() => {}} // called after successful navigation to this screen
        onWillBlur={clearErrorMessage} // called anytime you attempt to navigate away from this screen
        onDidBlur={() => {}} // called after successfully navigating away from this screen
      />
      <AuthenticationForm
        handleSubmit={handleSubmit}
        action={{
          text: "Sign in",
          extras: {
            description: "Don't have an account?",
            text: "Sign up",
            path: paths.signup,
          },
        }}
        headerText="Sign in to your account"
      />
    </>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
