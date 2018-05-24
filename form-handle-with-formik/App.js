import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from './src/components/Input';

const api = user =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.email === 'hello@gmail.com') {
        reject({ email: 'Email already use' });
      } else {
        resolve();
      }
    }, 3000);
  });

export default class App extends React.Component {
  _handleSubmit = async (values, bag) => {
    try {
      await api(values);
      Alert.alert('Welcome');
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Not valid email')
              .required('Email is required'),
            password: Yup.string()
              .min(6)
              .required('Password is required'),
            confirmPassword: Yup.string()
              .oneOf(
                [Yup.ref('password', null)],
                'Confirm Password must matched Password',
              )
              .required('Confirm Password is required'),
          })}
          render={({
            values,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
            setFieldTouched,
            isValid,
            isSubmitting,
          }) => (
            <React.Fragment>
              <Input
                label="Email"
                autoCapitalize="none"
                value={values.email}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="email"
                error={touched.email && errors.email}
              />
              <Input
                label="Password"
                autoCapitalize="none"
                secureTextEntry
                value={values.password}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="password"
                error={touched.password && errors.password}
              />
              <Input
                label="Confirm Password"
                autoCapitalize="none"
                secureTextEntry
                value={values.confirmPassword}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="confirmPassword"
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <Button
                backgroundColor="blue"
                buttonStyle={styles.button}
                title="Submit"
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              />
            </React.Fragment>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
});
