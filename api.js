const API = 'http://192.168.0.9:9000/api'; // IP DE MI CASA
//const API = 'http://192.168.27.162:9000/api' // IP DE LA ESCUELA

export const getMaterial = async () => {
	const res = await fetch(`${API}/materials`);
	return await res.json();
};

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
