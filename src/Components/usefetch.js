import {useState,useEffect } from "react"

const useFetch=(url)=>{
    let [Data,setData]=useState(null)
    let [error,seterror]=useState(null)
    let [Ispending,setIspending]=useState(true)

   
      useEffect(()=>{
        let abortCtrl=new AbortController()
        setTimeout(()=>{
            fetch(url,{signal:abortCtrl.signal})
            .then(
               res=>
                 {
                    if(!res.ok){
                        throw Error("Could not fetch")
                    }
                    
                    return res.json()})

                 .then(data=>{
                    setData(data)
                    setIspending(false)
                    seterror(null)
                 }) 
                 
                 .catch(err=>{
                    if(err.name==="AbortError"){
                      console.log("fetch aborted")
                    }
                    else{
                        seterror(err.message)
                        setIspending(false)
                    }

                 })
        },1000)

        return()=> abortCtrl.abort()
        
      },[url])

   return{Data,error,Ispending}
}


export default useFetch;

