import React from 'react';
import { Text, View,  TextInput } from 'react-native';
import { globalStyles } from './GlobalStyles';
import { Button} from "native-base";




export  function LoginScreen({navigation}) {

   const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    
    return (
      <View style={globalStyles.container}>
        
          <Text style = {globalStyles.loginHeaderText}> Welcome! Please Log in using your canvas credentials</Text>
          
          <View style = {{marginTop: 160, marginBottom: 20, backgroundColor: "#30C0B7"} }>
            <Text style = {[globalStyles.loginHeaderText, {fontSize: 20,paddingHorizontal: 130 }]}> Username: </Text>
            <TextInput style={[globalStyles.textBox, {marginLeft: 30, marginRight: 30}]}
                onChangeText={onChangeUsername}
                value={username}
                />
            <Text style = {[globalStyles.loginHeaderText, {fontSize: 20, paddingHorizontal: 130}]}> Password: </Text>
            <TextInput secureTextEntry={true} style={[globalStyles.textBox, {marginLeft: 30, marginRight: 30, marginBottom: 20}]}
                onChangeText={onChangePassword}
                value={password}
            />
          </View>
          <Button onPress={() => navigation.navigate("ClassSelect")}    style = {[globalStyles.logInButton, {marginBottom: 200}]} >
           <Text style={{color: "black", fontSize: 24, fontWeight: "bold", justifyContent: "center"}}>
            Log in
           </Text>
            
          </Button>

      </View>
    );
  }