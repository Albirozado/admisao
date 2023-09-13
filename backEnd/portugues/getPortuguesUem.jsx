export default async function getPortuguesUem(){
    const response = await fetch ("https://lively-lab-coat-fox.cyclic.app",{
        cache: "no-cache"
    })
    if(!response.ok){
        throw new Error ("ocoreu uma falha")
    }
    
    
}