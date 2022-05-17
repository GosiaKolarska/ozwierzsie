import {
  createStackNavigator,
} from "@react-navigation/stack";
import * as React from "react";
import CardExtended from "../src/Catalog/Card/cardExtended";
import Catalog from "../src/Catalog/Catalog";
import TabNavigator from "../TabNavigator";

const Stack = createStackNavigator();

function CardNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CatalogTab"
        component={TabNavigator}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CardExtended"
        component={CardExtended}
      />
    </Stack.Navigator>
  );
}

export default CardNav;
