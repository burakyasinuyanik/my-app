import { StyleSheet, Image, Text, View, TextInput ,ScrollView} from 'react-native';
import React from 'react';
import Welcome from '../components/welcome';


const deneme=()=>{

    return (
        <ScrollView>
          <Text>Some text</Text>
          <View>
            <Text>Some more text</Text>
            <Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={{width: 200, height: 200}}
            />
          </View>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            defaultValue="You can type in me"
          />
        </ScrollView>
      );
}
export default deneme
const styles = StyleSheet.create({
   
  });