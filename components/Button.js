import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Button = () => {
	return (
		<TouchableOpacity style={styles.btn}>
			<Text>button</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btn: {
		backgroundColor: 'blue',
		top: 200,
	},
});

export default Button;
