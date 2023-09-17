export default async function getMatematicaUemId(id){
    const res = await fetch(`https://lively-lab-coat-fox.cyclic.app/exames/uem/matematica/${id}`)
    return await res.json()
}