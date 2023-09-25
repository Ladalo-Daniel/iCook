import React from "react"

export async function fetchRecipes(query){
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
    const res = await fetch(url)
    if(!res.ok){
        throw{
            message: "Faild to fectch Pizza",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.data.recipes

}


export async function fetchPizza(){
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
    const res = await fetch(url)
    if(!res.ok){
        throw{
            message: "Faild to fectch Pizza",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.data.recipes

}
export async function fetchTomato(){
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=tomato`
    const res = await fetch(url)
    if(!res.ok){
        throw{
            message: "Faild to fectch Tomato",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.data.recipes

}
export async function fetchCarrot(){
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=carrot`
    const res = await fetch(url)
    if(!res.ok){
        throw{
            message: "Faild to fectch Carrot",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.data.recipes

}
// export async function fetchRecipesData(){
//     const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&Key=f68a2db1-4fea-4b34-86f7-0e437a683913`
//     const res = await fetch(url)
//     if(!res.ok){
//         throw{
//             message: "Faild to fectch Pizza",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.data

// }

