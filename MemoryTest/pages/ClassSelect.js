import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Button} from "native-base";
import { globalStyles } from './GlobalStyles';
import SelectDropdown from 'react-native-select-dropdown';


const classes = ["CMSC 475", "CMSC 340", "CMSC 255", "CMSC 571"];

export  function ClassSelect({navigation}) {


    return (
      <View style={globalStyles.container}>
          <Text style = {[globalStyles.loginHeaderText]}> Please choose what class you want to practice with</Text>
      
          <View style={[globalStyles.loginHeaderText, {marginTop: 290, paddingHorizontal: 100 }]}>
            <Text style = {[globalStyles.loginHeaderText, {fontSize: 24, justifyContent: "center", alignContent: "center",paddingHorizontal: 50,}]}> Class</Text>
            <SelectDropdown style = {{width: Dimensions.get("window").width * 0.5}} 
              data={classes}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
    
            />
          </View>
          <Button onPress={() => navigation.navigate("MyScreen")}    style = {[globalStyles.logInButton, {marginTop: 150, marginBottom: 20, width: Dimensions.get("window").width * 0.8}]} >
           <Text style={{color: "black", fontSize: 24, fontWeight: "bold", justifyContent: "center"}}>
            Start
           </Text>
            
          </Button>
      </View>
    );
  }