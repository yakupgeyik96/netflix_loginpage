import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import FormInput from './components/FormInput';
import LoginButton from './components/LoginButton';

const {width, height} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.main_container} >
      <View style={styles.page_header}>
        <Image style={styles.image} source={require("./resources/netflix.png")}></Image>
      </View>

      <Text style={styles.signin_text}>Sign In</Text>

      <View style={styles.page_body}>
        <FormInput
          color={"#333333"} 
          width={0.9} 
          height={0.065} 
          placeholder="Email or phone number"
          placeholderTextColor={"#7a7a7a"}
          style={styles.form_input} />

        <FormInput
          color={"#333333"} 
          width={0.9} 
          height={0.065} 
          placeholder="Password"
          placeholderTextColor={"#7a7a7a"}
          style={styles.form_input} />

        <LoginButton
          color={"#E50712"} 
          width={0.9} 
          height={0.07}
          value = {"Sign In"}
          textColor = {"white"}
          style = {styles.login_button} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: 'black',
    flex: 1 
  },
  page_header: {
    flex:0.15,
    marginTop:height * 0.035,
    marginLeft: width * 0.001,
  },
  page_body: {
    flex:0.5,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent: 'center',
    //backgroundColor:'',
  },  
  image: {
    width: width * 0.4,
    height: height * 0.1
  },
  signin_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft: width * 0.06,
  },
  form_input: {
    marginTop: 20,
    borderRadius: 5
  },
  login_button: {
    alignItems:'center',
    justifyContent:'center',
    marginTop: height * 0.08,
    borderRadius: 4
  },
});

