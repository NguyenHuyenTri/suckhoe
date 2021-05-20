import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import {
    Tips1,
    Tips2,
} from '../screens/export';

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tips1" component={Tips1} />
      <Tab.Screen name="Tips2" component={Tips2} />
    </Tab.Navigator>
  );
}

