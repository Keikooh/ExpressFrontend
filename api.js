const API = 'http://192.168.0.9:9000/api'; // IP DE MI CASA
//const API = 'http://192.168.27.162:9000/api' // IP DE LA ESCUELA

export const getMaterials = async () => {
	const res = await fetch(`${API}/materials`);
	return await res.json();
};

export const getMaterial = async (id) => {
	const res = await fetch(`${API}/materials/${id}`);
	return await res.json();
}

export const saveMaterial = async newMaterial => {
	const res = await fetch(`${API}/materials`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newMaterial),
	});
	console.log(newMaterial);
	console.log(res);
	return await res.json();
};

export const deleteMaterial = async id => {
	await fetch(`${API}/materials/${id}`, {
		method: 'DELETE',
	});
};

export const updateMaterial = async (id, material) => {
	const res = await fetch(`${API}/materials/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(material),
	});
	return res;
}