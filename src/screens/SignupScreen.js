import { useContext, useState } from "react";
import { paths } from "../paths";
import { Context as AuthContext } from "../context/AuthContext";
import AuthenticationForm from "../components/AuthenticationForm";
import { NavigationEvents } from "react-navigation";

const SignupScreen = () => {
  const { sign_up, clearErrorMessage } = useContext(AuthContext);

  const handleSubmit = ({ email, password }) => sign_up({ email, password });

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
          text: "Sign up",
          extras: {
            description: "Already have an account?",
            text: "Sign in",
            path: paths.signin,
          },
        }}
        headerText="Sign up for Tracker"
      />
    </>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
