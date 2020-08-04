import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import FormInput from './components/FormInput';
import LoginButton from './components/LoginButton';
import Checkbox from './components/Checkbox';
import { ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default class App extends React.Component {

  state = {
    email: '',
    password: '',
    rememberMe: false,
  };

  render() {
    return (
      <SafeAreaView style={styles.main_container} >
        <ScrollView contentContainerStyle={{flex:1, alignItems: 'center'}}>

          <View style={styles.page_header}>
            <Image style={styles.image} source={require("./resources/netflix.png")}></Image>
          </View>

          <Text style={styles.signin_text}>Sign In</Text>

          <View style={styles.page_body}>
            <FormInput
              color={"#333333"} 
              width={0.9} 
              height={0.065}
              value={this.state.email}
              placeholder="Email or phone number"
              placeholderTextColor={"#7a7a7a"}
              style={styles.form_input}
              onChangeText={(email) => {this.setState({email: email})}} />

            <FormInput
              color={"#333333"} 
              width={0.9} 
              height={0.065}
              value={this.state.password}
              type="password" 
              placeholder="Password"
              placeholderTextColor={"#7a7a7a"}
              onChangeText={(value) => {this.setState({password: value})}}
              style={styles.form_input} />

            <LoginButton
              color={"#E50712"} 
              width={0.9} 
              height={0.07}
              value = {"Sign In"}
              textColor = {"white"}
              style = {styles.login_button} />
          </View>

          <View style={styles.checkbox_line}>
            <Checkbox 
              text='Remember me!'
              style={{marginLeft:width * 0.05}} 
              onPress={() => {this.setState({rememberMe: !rememberMe})}} 
              status={this.state.rememberMe} />
            <TouchableOpacity activeOpacity={0.5} style={{marginLeft:182, marginTop:10}}>
              <Text style={{color:'#808080'}}>
                Need Help?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.page_bottom}>
            <View style={{flexDirection : 'row', alignItems : 'center'}}> 
              <Image style={{width: width * 0.07, height: height * 0.03}}
                    source={require("./resources/facebook.png")} />
               
              <Text style={{color:'#808080',
                            fontWeight: '600',
                            marginLeft : 10}}>
                Login with Facebook
              </Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Text style={{color: '#808080', fontSize: 18, marginTop: 30, fontWeight:'600'}}>
                New to Netflix?
              </Text>
              <Text style={{color: 'white', marginTop: 30, fontSize:17, marginLeft:5}}>
                Sign up now.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
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
    alignSelf: 'flex-start',
  },
  checkbox_line : {
    flex : 0.05,
    flexDirection : 'row',
    width : width * 0.9,
    marginTop : 10,
    justifyContent : 'space-between'
   },
  page_body: {
    flex:0.4,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent: 'center',
    //backgroundColor:'',
  },
  page_bottom : {
    flex: 0.3,
    alignItems:'flex-start',
    justifyContent:'center',
    backgroundColor:'black',
    marginTop: 40,
    width: width * 0.9,
  },
  image: {
    width: width * 0.4,
    height: height * 0.1,
  },
  signin_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: width * 0.1,
    marginBottom: width * 0.02,
    marginLeft: width * 0.06,
    alignSelf: 'flex-start',
  },
  form_input: {
    marginTop: 20,
    borderRadius: 5
  },
  login_button: {
    alignItems:'center',
    justifyContent:'center',
    marginTop: height * 0.06,
    borderRadius: 4
  },
});

