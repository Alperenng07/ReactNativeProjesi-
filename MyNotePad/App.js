import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  StyleSheet, Text, Image, SafeAreaView,Button, View,TouchableOpacity} from 'react-native';
// *** Uygulamayı inşa ederken kullanacağımız componentleri burada import ederek kullanabiliyoruz.

function Coustumebutton(props){
 return( <TouchableOpacity style={[styles.newbutton,props.style]} onPress={props.onPress}>
         <Text style={styles.buttontext} >{props.title}</Text>
      
       </TouchableOpacity>);
}/*Uygulamada kullanmak için button eklenebilir fakat dizayn ve düzenleme şansı olması adına TouchableOpacity kullandık 
 Ayrıca her buton oluşturumda tekrar tekrar buton inşa etmemek için Coustumebutton inşa ettik ve props kullanarak her butona kendine özgü 
 özellikler ekleyebildik*/  
export default function App() {

  const [count, setCount] = useState(0);
//*** Uygulamada dinamik değişken kullanmak için react dan import ettiğimiz useState'i kullanıyoruz.

  const arttır=() => {
    setCount(count + 1)
 
  }
  const azalt=() => {
  setCount(count - 1)
 

  
    }

  return (
    <SafeAreaView style={styles.container}>
       <Text style = {styles.subtitle}> SAYAC </Text>
       <Image source = {require("./assets/saat.png") }  style={styles.image}/>
      
       <Text style = {styles.subtitle}>DEGER:{count} </Text>
       <View style={styles.View}> 
     
     
      <Coustumebutton title="ARTTIR" onPress={arttır}> </Coustumebutton>
      <Coustumebutton title="AZALT" style={{backgroundColor:"pink"}} onPress={azalt}> </Coustumebutton>
       </View>
     
      <StatusBar style="auto" />
     
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  /* Kullandığımız elemanların özelliklerini düzenlemek ve dizayn etmek için styles kullandık */ 
    container: {  /* gh */
    flex:1,
    marginTop :40,
    height: 400,
    width: 400,
    
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:250, width:365,height:450, margin:16,borderRadius:15
  },
  subtitle:{
color:"#000000",
textAlign:"center",

fontSize:30

  },
  View:{
    flexDirection:"row",
  },
  
  containerbutton:{
    
    marginTop:56,
    backgroundColor: 'darkblue'
  },
   newbutton:{
     flex:1,
   marginTop:12,
   marginHorizontal:12,
    backgroundColor:"lightblue",
  
    width:100,
    height:30,
    borderRadius:10,
    textAlign:"center"
  },
  buttontext:{
    textAlign: "center",
    fontStyle:"italic",
    fontSize:25
    
  },
 
});
