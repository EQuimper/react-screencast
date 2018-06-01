import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Wizard from './src/components/Wizard';
import Input from './src/components/Input';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Wizard
          initialValues={{
            username: '',
            email: '',
            avatar: '',
          }}
        >
          <Wizard.Step>
            {({ onChangeValue, values }) => (
              <View style={styles.container}>
                <Input
                  onChangeValue={onChangeValue}
                  placeholder="Username here..."
                  value={values.username}
                  name="username"
                />
              </View>
            )}
          </Wizard.Step>
          <Wizard.Step>
            {({ onChangeValue, values }) => (
              <View style={styles.container}>
                <Input
                  onChangeValue={onChangeValue}
                  placeholder="Email here..."
                  value={values.email}
                  name="email"
                />
              </View>
            )}
          </Wizard.Step>
          <Wizard.Step>
            {({ onChangeValue, values }) => (
              <View style={styles.container}>
                <Input
                  onChangeValue={onChangeValue}
                  placeholder="Avatar here..."
                  value={values.avatar}
                  name="avatar"
                />
              </View>
            )}
          </Wizard.Step>
        </Wizard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
