import { NavigationContainer } from "@react-navigation/native";
import { ConditionList } from "./components/ConditionList";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/reduxStore";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ConditionList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
