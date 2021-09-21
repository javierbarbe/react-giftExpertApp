import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const categorias =['One Punch'];
    
    const [categories, setCategories] = useState(categorias);
    //#region eXTRA EXPLICACION
                // const handleAdd=() => {
                //     let aux = categories.slice();
                    
                //     //EXPLICACION
                //     // otra manera con el operador spread
                //     let aux2 = [...categories,'He-man'];
                //     // otra manera... si no tuviera el categories referenciado
                //     setCategories((cates=> [...cates,'heman']));
                //     // aux.push('He-man');
                //     // setCategories(aux);
                //     console.log(categories);
                // }
    //#endregion
    return (
        <>
            <h2 className="animate__animated animate__fadeIn ">GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            
            <ol>
                      {
                          categories.map( (categoria,i) => {
                              return (
                                    <GifGrid 
                                        key={categoria} 
                                        category={ categoria }/>
                              )
                          })
                      }
                  </ol>

        </>
    )
}
