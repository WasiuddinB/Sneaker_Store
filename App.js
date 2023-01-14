import React from 'react';
import { StyleSheet ,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './src/screens/ProductsList.js';
import { ProductDetails } from './src/screens/ProductDetails.js';
import { Cart } from './src/screens/Cart.js';
import { CartIcon } from './src/components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import LogInScreen from './Authentication/LogInScreen.js';
import { LogOut } from './src/components/LogOut.js';



const Stack = createNativeStackNavigator();

function App() {
  return (

  

      <CartProvider>
         <NavigationContainer>

            <Stack.Navigator>
              <Stack.Screen name='Login' component={LogInScreen} />
              <Stack.Screen name='Products' component={ProductsList} 
              options={({ navigation }) => ({
                title: '              Products',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation}/>
                ,headerLeft: ()=><LogOut navigation={navigation}/>
              })}/>
              <Stack.Screen name='ProductDetails' component={ProductDetails} 
              options={({ navigation }) => ({
                title: '          Product details',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation}/>
                ,headerLeft: ()=><LogOut navigation={navigation}/>
              })} />
              <Stack.Screen name='Cart' component={Cart} 
              options={({ navigation }) => ({
                title: '                 My Cart',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation}/>
                ,headerLeft: ()=><LogOut navigation={navigation}/>
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