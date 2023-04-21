import {
	View,
	ScrollView,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import React from 'react';

//import Add from './icons/Logo'

const layout = ({ children }) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EBEFF8',
		padding: 20,
		flex: 1,
	},
});

export default layout;
