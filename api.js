const API = 'http://192.168.0.10:9000/api'   // IP DE MI CASA
//const API = 'http://192.168.253.162:9000/api' // IP DE LA ESCUELA

export const getMaterial = async () => {
    const res = await fetch(`${API}/materials`)
    return await res.json()
  }

export const deleteMaterial = async (id)=> {
  await fetch(`${API}/materials/${id}`, {
    method:'DELETE',
  })
}