import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './View/page';
import Dev from './View/dev';
const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <stack.Screen
          name='home'
          component={Main}
          options={{
            title: '홈',
          }}
        />
        <stack.Screen
          name='dev'
          component={Dev}
          options={{
            title: '개발',
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
