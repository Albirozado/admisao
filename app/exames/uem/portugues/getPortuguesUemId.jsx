export default async function getPortuguesUemId(id){
    const res = await fetch(`https://lively-lab-coat-fox.cyclic.app/exames/uem/portugues/${id}`)
    return await res.json()
}