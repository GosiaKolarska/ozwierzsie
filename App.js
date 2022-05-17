import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { AuthProvider } from "./src/hooks/useAuth";
import CardNav from "./navigator/CardNav";

const Hello = () => {
  return (
      <NavigationContainer>
          <CardNav />
      </NavigationContainer>
  );
}

export default Hello;