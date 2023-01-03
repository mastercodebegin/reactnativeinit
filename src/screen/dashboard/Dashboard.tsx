/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Pdf from 'react-native-pdf';
import DocumentPicker from 'react-native-document-picker'
const Dashboard=(props)=>{
  const [uri,setUri]=React.useState()
  useEffect(()=>{

  },[])

  const handleDocumentSelection = React.useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      props.navigation.navigate('Pdf',{data:response[0]?.uri})
      console.log("response>>>>>>>>>>>>",response[0]?.uri);
      //@ts-ignore
      setUri(response[0]?.uri)
      // setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      
    {/* <TouchableOpacity onPress={()=>props.navigation.navigate('Pdf')}> */}
    <TouchableOpacity onPress={handleDocumentSelection}>
      <Text>Next</Text>
    </TouchableOpacity>

      </View>

  )
}



//  export  class PdfView extends React.Component {
//     render() {
//         const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
//         //const source = require('./test.pdf');  // ios only
//         //const source = {uri:'bundle-assets://test.pdf' };
//         //const source = {uri:'file:///sdcard/test.pdf'};
//         //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
//         //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
//         //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

//         return (
//             <View style={styles.container}>
//                 <Pdf
//                 trustAllCerts={false}
//                     source={source}
//                     onLoadComplete={(numberOfPages,filePath) => {
//                         console.log(`Number of pages: ${numberOfPages}`);
//                     }}
//                     onPageChanged={(page,numberOfPages) => {
//                         console.log(`Current page: ${page}`);
//                     }}
//                     onError={(error) => {
//                         console.log(error);
//                     }}
//                     onPressLink={(uri) => {
//                         console.log(`Link pressed: ${uri}`);
//                     }}
//                     style={styles.pdf}/>
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})

export default Dashboard;
