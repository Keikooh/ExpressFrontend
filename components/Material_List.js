import { View, Text, FlatList, RefreshControl, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

import Material_Item from './Material_Item';
import { getMaterials, deleteMaterial } from '../api.js';

const Material_List = ({ type }) => {
	const [material, setmaterial] = useState([]);
	const [refreshing, setrefreshing] = useState(false);

	const loadMaterial = async () => {
		const data = await getMaterials();
		setmaterial(data);
	};

	useEffect(() => {
		loadMaterial();
	}, []);

	const handleDelete = async id => {
		await deleteMaterial(id);
		await loadMaterial();
	};

	const renderItem = ({ item }) => {
		if (item.type === type)
			return <Material_Item material={item} handleDelete={handleDelete} />;
	};

	const Materials = () => {
		return (
			<FlatList
				style={{ width: '100%' }}
				data={material}
				keyExtractor={item => item._id}
				renderItem={renderItem}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				ListEmptyComponent={<Text>No hay elementos</Text>}
			/>
		);
	};

	const Empty = () => {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Image
					source={require('../assets/images/empty.png')}
					style={{ width: 100, height: 100, alignSelf: 'center' }}
				/>
			</View>
		);
	};

	const onRefresh = React.useCallback(async () => {
		setrefreshing(true);
		await loadMaterial();
		setrefreshing(false);
	});

	return Materials();
};

export default Material_List;
