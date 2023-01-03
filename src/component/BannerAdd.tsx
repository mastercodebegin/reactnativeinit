import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import { interstitialAd } from './Admob';

export default function BannerAdd() {
    useEffect(()=>{
        interstitialAd.load()
    },[])
  return (
    <View>
      <Text>BannerAdd</Text>
      <BannerAd
        unitId={TestIds.REWARDED}
        size={BannerAdSize.BANNER}
        requestOptions={{
        requestNonPersonalizedAdsOnly: true,}}
        onAdLoaded={() => {
        console.log('Advert loaded');}}
        onAdFailedToLoad={(error) => {
        console.error('Advert failed to load: ', error);}}
        />
    </View>
  )
}