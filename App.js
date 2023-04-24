import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import { ScrollView } from 'react-native';
import {  Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput,View } from 'react-native';
import {GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
// import { NativeBaseProvider } from "native-base";






export default function App() {
  
  const[data,setData] = useState([])
  const[text,setText] = useState("")
  
  const leftQuentent = (ids)=>{

    const DeleteData = (ids)=>{
      const daleteData = data.filter((item,id)=> id !== ids)
      setData(daleteData)
    }
    return(
      <Pressable onPress={()=>DeleteData(ids)}>
      <View style={styles.delete}>
        <Text style={{color:"white"}}>Click to Delete</Text>
      </View>
      </Pressable>
    )
    
  }
  const Add = () =>{
    if(text ==="" || text === " " || text ==="  "){
      return alert("Enter Task.")
    }
    setData([...data,text])
    Keyboard.dismiss()
    setText("")
  }
  return (
    <>
    {/* <NativeBaseProvider> */}
      <SafeAreaView>
        <StatusBar hidden={true} />
        <View style={styles.main}>
          <View style={styles.sub}>
            <Text style={styles.text}>TODO-TASK</Text>
          </View>

          <View style={styles.input}>
          
            <TextInput onChangeText={texts => setText(texts)}
                       value={text} placeholder='Enter task' />
              <Pressable onPress={Add}>
                
                  <View style={styles.button}>
                   <Text>Add</Text>
                  </View>
                
              </Pressable>
          </View>

        <ScrollView>
          <View style={styles.task}>

            {
              data.map((val,id)=>
              <GestureHandlerRootView>
              <Swipeable renderLeftActions={()=>leftQuentent(id)} >
                <View key={id} style={styles.data}>
                  <Text >
                    {val}
                  </Text>
                </View>
              </Swipeable>
            </GestureHandlerRootView>)
            }

          </View>
        </ScrollView>  

          <View style={styles.footer}>
            <Text>Swip right to Delete.</Text>
          </View>
        </View>
      </SafeAreaView>
    {/* </NativeBaseProvider>   */}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ECC9EE",
    width: "100%",
    height: "100%"
  },
  sub: {
    display: "flex",
    marginTop: Platform.OS === "android" ? 50 : 30,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
  input:{
    display:"flex",
    flexDirection:"row",
    padding:20,
    justifyContent:"space-between",
    backgroundColor:"#9384D1",
    margin:15,
    borderRadius:25,
    shadowOpacity:0.05,
    elevation:10,
    shadowOffset:{
      height:10
    },
    shadowRadius:20
  },
  button:{
    backgroundColor:"#FFDCB6",
    borderRadius:20,
    width:100,
    height:50,
    alignItems:"center",
    justifyContent:"center"
  },
  task:{
    // marginTop:,
    flex:1,
    padding:20
  },
  data:{
    backgroundColor:"#FFDCB6",
    margin:10,
    padding:25,
    color:"#9384D1",
    borderRadius:20,
    shadowOpacity:0.10,
    elevation:10,
  },
  footer:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:15
  },
  delete:{
    backgroundColor:"red",
    justifyContent:"center",
    width:100,
    flex:1,
    borderRadius:25,
    alignItems:"center"
  }
});
