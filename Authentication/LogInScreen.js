import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from "react-native";
// import { getAuth, } from "../firebase";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import app  from '../firebase.js';

const LogInScreen=({navigation})=>{

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")




    // useEffect(()=>{
    //     const auth=getAuth(app);
    //     const unsubscribe=auth.onAuthStateChanged(user=>{
    //         if(user){
    //             navigation.navigate("ProductList")
    //         }
    //     })

    //     return unsubscribe
    // },[])


    const handleSignUp=()=>{
        const auth = getAuth(app)
        
            createUserWithEmailAndPassword(auth,email,password)
            .then(userCredentials=>{
                const user=userCredentials.user;
                console.log('Registered with: ',user.email);
            })
            .catch(error=>alert(error.message))
    }

    const handleLogin=()=>{
        const auth = getAuth(app)
        
        signInWithEmailAndPassword(auth,email,password)
        .then(userCredentials => {
            const user=userCredentials.user;
            console.log('Logged in with: ',user.email);
            navigation.navigate('Products')
        })
        .catch(error=>alert(error.message))
    }

    // const handleSignUp=()=>{
    //     const auth =getAuth();
    //     if(email && password){
    //         createUserWithEmailAndPassword(auth,email,password)
    //         .then((userCreds)=>{
    //             const db=getDatabase();
    //             set(ref(db,"users/"+userCreds.user.uid),{
    //                 email: userCreds.user.email,
    //             });
    //             props.navigation.navigate("Products");
    //         })
    //         .catch((error)=>{
    //             console.log("Firebase Error",error);
    //         });
    //     } else {
    //         alert("FIELDS ARE EMPTY");
    //     }
    // };


    return(
        <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        >
            <View>
            <Text style={styles.baseText}>Welcome To</Text>
            <Text style={styles.innerText}> The Sneaker Store </Text>
            
            <Image
                style={styles.image}
                source={require('../assets/sneaker_open.jpg')}
            />
            </View>
            <View style={styles.inputContainer}>
                
                <TextInput 
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleLogin}
                style={[styles.button,styles.buttonOutline]}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button,styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )
}

export default LogInScreen;

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button:{
        backgroundColor: '0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText:{
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText:{
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    image:{
        width: 300,
        height: 200,
        marginBottom: 40
    },
    baseText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 75,
    },
    innerText: {
        color: '#2ca383',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft:15,
        
    },
    
})