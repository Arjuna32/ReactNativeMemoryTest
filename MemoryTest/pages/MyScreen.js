import React, {useState} from 'react';
import { Pressable,  Text, View, Image, Modal, Dimensions } from 'react-native';
import { Button} from "native-base";
import { globalStyles } from './GlobalStyles';

var database = [
{id:"0", name:"Dan Smith",image:require("../assets/DanSmith.png")},
{id:"1", name:"Sam Parker",image:require("../assets/SamParker.png")},
{id:"2", name:"Dave Dillan",image:require("../assets/DaveDillan.png")},
{id:"3", name:"John Parker",image:require("../assets/splash.png")},
{id:"4", name:"John Doe",image:require("../assets/Forest Buffer.jpg")},
{id:"5", name:"Samantha Segway ",image:require("../assets/WAterFowl.jpg")}
];
var incorrectImage = require("../assets/incorrect.png");
function MyButton( props ){
    return (
     <Pressable 
        onPress={() => {
          props.onPressed();
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'darkcyan' : 'cyan',
          },
          globalStyles.button,
        ]}>
        {({pressed}) => (
          <Text style={globalStyles.text}>{ props.name }</Text>
        )}
      </Pressable>        
    );
}



export  function MyScreen({navigation}) {

    const [timesPressed, setTimesPressed ] = useState(0);
    const [ imageId, setImageId ] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [danTrue, setDanTrue] = useState(false);
    const [samTrue, setSamTrue] = useState(false);
    const [daveTrue, setDaveTrue] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    //const [ guess, setGuess ] = useState( imageId );


    function DoMe( i ){
        //setGuess( i );
        setTimesPressed(timesPressed+1);
        if (imageId==i){
          if(i==0){
            setDanTrue(true);
          }
          else if(i==1){
            setSamTrue(true);
          }
          else if(i==2){
            setDaveTrue(true);
          }
          setModalVisible( false );
          setModalVisible2(true);
  
          //setImageId( Math.floor(Math.random() * database.length ) );
        } else {
          if(imageId==0){
            setDanTrue(false);
          }
          else if(imageId==1){
            setSamTrue(false);
          }
          else if(imageId==2){
            setDaveTrue(false);
          }
          setModalVisible( true );
          setModalVisible2(false);
        }
      
    }

    return (
      <View style={globalStyles.container}>
           <Button  style = { {paddingVertical: 5, paddingHorizontal: 5, marginTop: 20, width: Dimensions.get("window").width * 0.8,backgroundColor: "#E79696", borderRadius: 20, marginBottom: 50}} >
           <Text style={{color: "black", fontSize: 24, fontWeight: "bold", justifyContent: "center"}}>
            What is their name?
           </Text>
          </Button>
          <Image style={globalStyles.imageStyle } source={database[imageId].image} />
      

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
        }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={globalStyles.modalView}>
              <Image style = {globalStyles.imageView}source = {require("../assets/incorrect.png")}/>
              
              <Pressable 
                style={[globalStyles.button, {width: 130,backgroundColor: "#056DFA"}]}
                onPress={() => {
                   setModalVisible(!modalVisible);
                   if(timesPressed<3){
                    setImageId( timesPressed);
                   }
                   else{
                    setTimesPressed(0);
                    setImageId(0);
                    navigation.navigate("ResultScreen", {danTrue: danTrue, samTrue:samTrue, daveTrue:daveTrue});
                   }
                } }>
                <Text style={globalStyles.textModal}>Next</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible2(!modalVisible2);
        }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={globalStyles.modalView}>
              <Image style = {globalStyles.imageView}source = {require("../assets/correct.png")}/>
              
              <Pressable 
                style={[globalStyles.button, {width: 130,backgroundColor: "#056DFA"}]}
                onPress={() => {
                   setModalVisible2(!modalVisible2);
                   if(timesPressed<3){
                    setImageId( timesPressed);
                   }
                   else{
                    setTimesPressed(0);
                    setImageId(0);
                    navigation.navigate("ResultScreen", {danTrue: danTrue, samTrue:samTrue, daveTrue:daveTrue});
                   }
                } }>
                <Text style={globalStyles.textModal}>Next</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={{flex:0, flexDirection:"row", flexWrap:"wrap",justifyContent:"space-evenly"}}>
            { database.map( (item)=>{
                return (
                <MyButton onPressed={()=>DoMe( item.id )} key={item.id} name={item.name} id={item.id} />
                );
            })}
        </View>
        <Button onPress={() => navigation.navigate("ResultScreen", {danTrue: {danTrue}, samTrue: {samTrue}, daveTrue: {daveTrue}})}    style = { {paddingVertical: 5, paddingHorizontal: 5, marginTop: 50, backgroundColor: "#E79696", borderRadius: 20}} >
           <Text style={{color: "black", fontSize: 24, fontWeight: "bold", justifyContent: "center", paddingHorizontal: 50}}>
            Finish Quiz
           </Text>
            
          </Button>
      </View>
    );
  }