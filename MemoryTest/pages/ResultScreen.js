import React from 'react';
import {Text, View,Dimensions } from 'react-native';
import { globalStyles } from './GlobalStyles';
import { Button} from "native-base";



export  function ResultScreen({navigation, route}) {

 
     const danTrue = route.params.danTrue;//navigation.getParam(danTrue);
     const samTrue = route.params.samTrue;//navigation.getParam(samTrue);
     const daveTrue = route.params.daveTrue;//navigation.getParam(daveTrue);
    
    var msg = "";
    var count = 0;
    //count=0;
    console.log(danTrue);
    console.log(samTrue);
    console.log(daveTrue);
    if(danTrue == true){
      count = count+1;
      
    }
    if(samTrue == true){
      count++;
      
    }
    if(daveTrue == true){
      count++;
    }
    console.log(count);
    if (count == 3)  
    {
      msg = "You got all correct!"
    }        
    else 
     { 
      msg = "You got "+count+"/ 3 correct";
    }
            
    return (
      <View style={globalStyles.container}>
          <Button  style = { {paddingVertical: 5, paddingHorizontal: 5, marginTop: 20, width: Dimensions.get("window").width * 0.8,backgroundColor: "#E79696", borderRadius: 20, marginBottom: 50}} >
           <Text style={{color: "black", fontSize: 24, fontWeight: "bold", justifyContent: "center"}}>
            How well did you do?
           </Text>
          </Button>
          
          <View style = {{marginTop: 20, marginBottom: 20, backgroundColor: "grey", } }>
            <Text style = {[globalStyles.loginHeaderText, {backgroundColor: "grey", fontSize: 20}]}>  </Text> 
            <Text style = {[,globalStyles.loginHeaderText, {backgroundColor: "grey", fontSize: 20, color: danTrue == true ? '#09E805' : 'red'}]}> Dan Smith  </Text>
            <Text style = {[globalStyles.loginHeaderText, {backgroundColor: "grey", fontSize: 20, color: samTrue == true ? '#09E805' : 'red'}]}> Sam Parker </Text>
            <Text style = {[globalStyles.loginHeaderText, {backgroundColor: "grey", fontSize: 20, color: daveTrue == true ? '#09E805' : 'red',}]}> Dave Dillan</Text>
            <Text style = {[globalStyles.loginHeaderText, {backgroundColor: "grey", fontSize: 20}]}>  </Text> 
            <Text style = {[globalStyles.loginHeaderText, {backgroundColor: "grey", fontSize: 24}]}>{msg}</Text>      
          </View>
          <Button onPress={() => navigation.navigate("MyScreen")}    style = {[globalStyles.logInButton, {width: Dimensions.get("window").width * 0.8}]} >
           <Text style={{color: "black", fontSize: 24, fontWeight: "bold", justifyContent: "center"}}>
            Try again?
           </Text>
            
          </Button>
          <Button onPress={() => navigation.navigate("LoginScreen")}    style = {[globalStyles.logInButton, {width: Dimensions.get("window").width * 0.5}]} >
           <Text style={{color: "black", fontSize: 24, fontWeight: "bold", justifyContent: "center"}}>
            Home
           </Text>
            
          </Button>

      </View>
    );
  }