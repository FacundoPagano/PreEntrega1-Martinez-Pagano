
import React, { useEffect } from 'react'

const Promise = () => {

    useEffect(() => {
        getRandom()  
    }, [])

    const getRandom = () => {
        const itemsPromise = new Promise( (resolve,reject) => {
            const rand = Math.random()
            console.log(rand);
            if (rand>0.5) {
                resolve("Se resolvio satisfactoriamente")
            }
            reject("Rechazada!")
        })

        itemsPromise.then((response)=> {
            console.log( 'Respuesta: ' + response);
        }).catch((err)=> {
            console.log("Error:",err);
        })
    }

return (
    <div>Promise</div>
  )
}
export default Promise