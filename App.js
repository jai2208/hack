import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import intro from './screens/intro';
import home from './screens/home';
import home2 from './screens/home2';
import trimesters from './screens/trimesters';
import vaccination from './screens/vaccination';
import diet from './screens/diet';
import home3 from './screens/home3';
import weight from './screens/weight';
import Parturition from './screens/parturition';
import postpartum from './screens/postpartum';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Introduction" component={intro} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Care During Pregnancy" component={home2} />
        <Stack.Screen name="The Three Trimesters" component={trimesters} />
        <Stack.Screen name="Importance Of Vaccination" component={vaccination} />
        <Stack.Screen name="Proper Nutrition N Diet" component={diet} />
        <Stack.Screen name="Consequences" component={home3} />
        <Stack.Screen name="Weight" component={weight} />
        <Stack.Screen name="Parturition" component={Parturition} />
        <Stack.Screen name="Post-Partum" component={postpartum} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
