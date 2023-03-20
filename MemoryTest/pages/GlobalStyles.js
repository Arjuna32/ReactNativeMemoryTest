import { StyleSheet, Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#764EAA',
        alignItems: 'center',
        justifyContent: "center",
    },
    imageStyle: {
        width: Dimensions.get("window").width *.8,
        height: 300,
        marginTop: 20,
    },
    imageView: {
      width: 150,
      height: 50,
      marginTop: 20,
      borderRadius: 20,
  },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    
        paddingHorizontal: 10,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#30C0B7',
        borderWidth: 1,
        borderColor: "#000000",
        width: Dimensions.get("window").width * 0.4,
        marginVertical: 20,
        marginHorizontal: 5

      },
      modalView: {
        alignItems: 'center',
        justifyContent: 'center',
    
        paddingHorizontal: 10,
    
        elevation: 3,
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: "#000000",
        width: Dimensions.get("window").width * 0.4,
        marginVertical: 20,
        marginHorizontal: 5

      },
      headerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#30C0B7',
        width: 0,
        marginVertical: 20,
        marginHorizontal: 5

      },
      logInButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 24,
        color: "white",
        elevation: 3,
        width: 200,
        height: 100,
        backgroundColor: '#30C0B7',
        marginVertical: 10,
        marginHorizontal: 5

      },
      headerText: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        justifyContent: "center",
        marginLeft: 0,
        backgroundColor: "#E79696",
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 20,
        width: Dimensions.get("window").width * 0.58,
      },
      loginHeaderText: {
        fontSize: 12,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        justifyContent: "center",
        marginTop: 0,
        backgroundColor: "#30C0B7",
        paddingHorizontal: 12,
        paddingVertical: 12,
        
        width: Dimensions.get("window").width ,
      },
      textBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white"
      },
      textModal: {
        fontSize: 16,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        backgroundColor: "#056DFA"
      },
      text: {
        fontSize: 12,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
})