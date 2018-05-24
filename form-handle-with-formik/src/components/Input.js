import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  FormInput,
  FormValidationMessage,
  FormLabel,
} from 'react-native-elements';

class Input extends PureComponent {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };

  render() {
    const { label, error, ...rest } = this.props;
    return (
      <View style={styles.root}>
        <FormLabel>{label}</FormLabel>
        <FormInput
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          placeholder={label}
          {...rest}
        />
        {error && <FormValidationMessage>{error}</FormValidationMessage>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default Input;
