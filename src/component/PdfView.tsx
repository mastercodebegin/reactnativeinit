import { View, Text ,Dimensions,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import Pdf from 'react-native-pdf';
import ModalView from './modalView';

export default function PdfView(props) {
    const [uri,setUri]=React.useState()
    const [password,setPassword]=React.useState()
    const [visible, setVisible] = useState(false)
    const [text, setText] = useState('')
    const [num, setNumber] = useState(0)

    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };

 useEffect(()=>{
    console.log('props>>>',props?.route?.params?.data);
setUri(props?.route?.params?.data)
    
},[])
const add = (value: any) => {
    setText(value.replace(/[^a-zA-Z0-9 ]/g, "").replace(" ", ""))
  }
    return (
        <View style={styles.container}>
            {!visible?<Pdf
               trustAllCerts={false}
                source={{uri:uri}}
                password={text}
                onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                // onError={(error) => {
                //     console.log(error);
                // }}
                onError={(error) => {
                    setTimeout(() => {
                      setVisible(true)
                    }, 380);

                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf}/>:
                <ModalView
            visible={visible}
            onChangeText={text
            }
            // onText={add}
            num={num}
            onOpen={() => text.length > 0 && setVisible(false)}
            onClose={() => {
              setNumber(0), setVisible(false),
                props?.navigation?.goBack()
            }}
            close={'CLOSE'}
            open={'OPEN'} />}
        </View>
    )
}

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