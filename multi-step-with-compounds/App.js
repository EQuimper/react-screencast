import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Wizard from './src/components/Wizard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wizard>
          <Wizard.Step>
            <View
              style={{
                flex: 1,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>Put your username</Text>
            </View>
          </Wizard.Step>
          <Wizard.Step>
            <View
              style={{
                flex: 1,
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>Put your email</Text>
            </View>
          </Wizard.Step>
          <Wizard.Step>
            <View
              style={{
                flex: 1,
                backgroundColor: 'purple',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>Upload avatar</Text>
            </View>
          </Wizard.Step>
        </Wizard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
