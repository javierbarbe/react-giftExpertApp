// import React, { useState,useEffect } from 'react'
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

// usando un customHook
    const {data:images, loading} = useFetchGifs(category);
    //#region 
                // console.log('el state ',data, loading);
                // const [images, setImages] = useState([]);
                // const recuperaGifsHttp_Async = async(category) => {
                //         const imgs = await getGifs(category);
                //         setImages(imgs);
                // }
                // // EXPLICACION USE EFFECT
                // // EJECUTA EL CODIGO DE MANERA CONDICIONAL... si no... podríamos entrar en un bucle infinito
                // // porque cuando modifico algo del contenido del componente, lo re-renderiza
                // // mandando un arreglo vacio como segundo argumento... hace que el codigo solo se ejecute 
                // // cuando el codigo es renderizado por 1a vez
                // useEffect( () => {
                //     // getGifs(category).then((imgss)=> {
                //     //     setImages(imgss);
                //     // })
                //     recuperaGifsHttp_Async(category);
                // },[ category ]);
  //#endregion
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}

            <div className="card-grid ">
                {images.map((img)=> {
                    return (
                            <GifGridItem 
                                key={img.id} 
                                // nepe={img.id}
                                {...img} // esto manda como propiedad toooodas las del objeto img
                                /// como si mandase url= {img.url} id= {img.id}
                            />
                       
                        )
                })}
            </div>
        </>
    )
}
