import { StyleSheet } from 'react-native';

export const ItemStyle = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	itemContainer: {
		backgroundColor: '#FFFFFF',
		padding: 10,
		marginVertical: 10,
		borderRadius: 5,
		height: 98,
		flexDirection: 'row',
		justifyContent: 'space-between',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2.84,
		elevation: 5,
	},
	materialDetails:{
	},
	controls:{
		width:'65%',
		flexDirection: 'row', 
		alignItems: 'center',
		justifyContent: 'center'
	},
	materialType: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		width: '100%',
		borderRadius: 16,
		fontSize: 10,
		textAlign: 'center',
	},
	button: {
		//height:35,
		borderRadius: 10,
		margin: 5,
		width: '40%',

		padding: 10,
	},
	buttonText: {
		fontWeight: 'bold',
		color: '#FFFFFF',
		textAlign: 'center',
		fontSize: 15,
	},
});
