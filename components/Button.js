import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Button = () => {
	return (
		<TouchableOpacity style={styles.btn}>
			<Text>button</Text>
		</TouchableOpacity>
	);
};

<<<<<<< HEAD

=======
const styles = StyleSheet.create({
	btn: {
		backgroundColor: 'blue',
		top: 200,
	},
});
>>>>>>> 744519e2d93616d5f3da7a9988883d8f61d92c20

export default Button;
