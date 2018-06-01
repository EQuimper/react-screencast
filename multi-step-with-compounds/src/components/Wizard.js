import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

class Step extends PureComponent {
  state = {};
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}
        <Button
          title="Prev"
          disabled={this.props.currentIndex === 0}
          onPress={this.props.prevStep}
        />
        <Button
          title="Next"
          disabled={this.props.isLast}
          onPress={this.props.nextStep}
        />
      </View>
    );
  }
}

class Wizard extends PureComponent {
  static Step = props => <Step {...props} />;

  state = {
    index: 0,
  };

  _nextStep = () => {
    if (this.state.index !== this.props.children.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }));
    }
  };

  _prevStep = () => {
    if (this.state.index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }));
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {React.Children.map(this.props.children, (el, index) => {
          if (index === this.state.index) {
            return React.cloneElement(el, {
              currentIndex: this.state.index,
              nextStep: this._nextStep,
              prevStep: this._prevStep,
              isLast: this.state.index === this.props.children.length - 1,
            });
          }

          return null;
        })}
      </View>
    );
  }
}

export default Wizard;
