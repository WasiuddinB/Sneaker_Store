import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartContext } from '../../CartContext.js';

export function LogOut({navigation}) {
  const { loggedOut }=useContext(CartContext);
  function onLogout() {
    loggedOut(product.id);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          onLogout;
          navigation.navigate('Login');
        }}
      >LogOut</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    backgroundColor: 'red',
    height: 42,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});