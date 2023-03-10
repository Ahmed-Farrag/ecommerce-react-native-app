import React from 'react';
import {Text, View} from 'react-native';
import AppButton from '../AppButton';
import styles from './styles';

export default function AddToCartButtonFunc(props) {
  const [quantity, setQuantity] = React.useState(0);

  const incrementQuantityHandler = () => {
    setQuantity(quantity + 1);
  };
  const DecrementQuantityHandler = () => {
    setQuantity(quantity - 1);
  };

  const renderInitialButton = () => {
    return (
      <AppButton
        onPress={incrementQuantityHandler}
        title="ADD TO CART"
        wrapperStyle={styles.button}
      />
    );
  };
  const renderIncreaseBecreaseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.button]}>
        <Text style={styles.plusMinus} onPress={incrementQuantityHandler}>
          +
        </Text>
        <Text>{quantity}</Text>
        <Text style={styles.plusMinus} onPress={DecrementQuantityHandler}>
          -
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      {quantity === 0 ? renderInitialButton() : renderIncreaseBecreaseButton()}
    </View>
  );
}
