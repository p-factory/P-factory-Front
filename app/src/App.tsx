import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './View/page';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name='Home'
          component={Main}
          // options={{
          //   title: '홈',
          //   headerStyle: {
          //     backgroundColor: '#fff',
          //   },
          //   headerTintColor: '#000',
          // }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
