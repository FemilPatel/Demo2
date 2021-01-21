import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native'

const FirstPage = ({navigation}) => {
  const [userName, setUserName] = useState()
  const [id, setUserId] = useState()

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          React Native Pass Value From One Screen to Another Using React
          Navigation
        </Text>
        <Text style={styles.textStyle}>
          Please insert your name to pass it to second screen
        </Text>

        <TextInput
          value={id}
          onChangeText={id => setUserId(id)}
          placeholder={'Enter ID'}
          style={styles.inputStyle}
        />
        <TextInput
          value={userName}
          onChangeText={username => setUserName(username)}
          placeholder={'Enter Name'}
          style={styles.inputStyle}
        />

        <Button
          title='Go Next'
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey1: id,
              paramKey2: userName,
            })
          }
        />
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  )
}

export default FirstPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
})
