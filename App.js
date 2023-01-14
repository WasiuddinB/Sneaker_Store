import React from 'react';
import { StyleSheet ,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './src/screens/ProductsList.js';
import { ProductDetails } from './src/screens/ProductDetails.js';
import { CartProvider } from './CartContext.js';


const Stack = createNativeStackNavigator();

function App() {
  return (

  

      <CartProvider>
         <NavigationContainer>

            <Stack.Navigator>
              <Stack.Screen name='Products' component={ProductsList} 
              options={({ navigation }) => ({
                title: '              Products',
                headerTitleStyle: styles.headerTitle,
              })}/>
              <Stack.Screen name='ProductDetails' component={ProductDetails} 
              options={({ navigation }) => ({
                title: '          Product details',
                headerTitleStyle: styles.headerTitle,
              })} />
              
              
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
    
  )
};
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
export default App;