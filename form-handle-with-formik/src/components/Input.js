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
    const { forwardedRef, error, label, ...rest } = this.props;
    return (
      <View style={styles.root}>
        <FormLabel>{label}</FormLabel>
        <FormInput
          onBlur={this._handleTouch}
          onChangeText={this._handleChange}
          placeholder={label}
          ref={forwardedRef}
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

export default React.forwardRef((props, ref) => <Input forwardedRef={ref} {...props} />)

/**
Just for demistration purposes I've included a simplified version of the above using the ref fowarding
*/
const SimplifiedInput = React.forwardRef(({ error, label, name, onChange, onTouch, ...rest }, ref) =>
  <View style={styles.root}>
    <FormLabel>{label}</FormLabel>
    <FormInput
      onBlur={() => onTouch(name)}
      onChangeText={value => onChange(name, value)}
      placeholder={label}
      ref={ref}
      {...rest}
    />
    {error && <FormValidationMessage>{error}</FormValidationMessage>}
  </View>
)
