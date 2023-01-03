import { AdEventType, RewardedAdEventType } from "@react-native-firebase/admob";
import React, { useEffect, useState } from "react";
import { AsyncStorage, Text, TouchableOpacity, View } from "react-native";
import { rewardInterstitialAd } from "./Admob";
import BannerAdd from "./BannerAdd";

const DisplayAdd = (props: any) => {
    const [data, setData] = useState('')
    const [count, setCount] = useState(0)
    const [rewardedAdLoaded, setRewardedAdLoaded] = React.useState(false);
    useEffect(() => {
        (async()=>{
        // const res = await AsyncStorage.getItem('Adds')
        // const json = res && JSON.parse(res)
        // setCount(json)
       
        // let value = [...images]
        // const eventListener = rewardInterstitialAd.onAdEvent(async (type, error, reward) => {
        //     if (type === RewardedAdEventType.LOADED) {
        //         setRewardedAdLoaded(true);
        //     }
        //     if (type === RewardedAdEventType.EARNED_REWARD) {
        //         console.log("rewarded with=================================================", reward);
        //         // value.map((int: any) => {
        //         //     return int.count = 0
        //         // })
        //         // setData(value)
        //     }
        //     if (type === AdEventType.OPENED) {
        //         setRewardedAdLoaded(false);
        //     }
        //     if (type === AdEventType.CLOSED) {
        //         setRewardedAdLoaded(false);
        //         rewardInterstitialAd.load();
        //     }
        // });

        // Start loading the rewarded ad straight away
        // if (rewardInterstitialAd.loaded) {
        //     setRewardedAdLoaded(true);
        // } else {
        //     console.log("Loaded>>>>>>>>>");
            
            rewardInterstitialAd.load();
        // }

        // Unsubscribe from events on unmount
        // return () => {
        //     eventListener();
        // };
    })()
    }, [])
  const  show=()=>{
    console.log("Press>>>>>>>>>");
    
    rewardInterstitialAd.show()
    }
    return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>show()}>
            <Text>
                SHow
            </Text>
        </TouchableOpacity>
        <View style={{flex:.8}}>

        </View>
         <View style={{flex:.2}}>
             <BannerAdd/>

         </View>
    </View>)}

export default DisplayAdd