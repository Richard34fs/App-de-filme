import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242a32',
    },
    header:{
        padding: 25,
    },
    headerText:{
        marginTop: 30,
        fontSize: 24,
        lineHeight: 45,
        color: '#fff',
    },
    containerImput:{
        backgroundColor: "#67686d",
        height:42,
        padding: 10,
        borderRadius: 16,
        marginTop: 24,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    input:{
        color: '#fff',
        width: '80%',
        paddingLeft: 15,

    },
    noResult:{
    color: "#fff",
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10
    },
  });