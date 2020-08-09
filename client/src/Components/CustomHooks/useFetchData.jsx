import React , { useState } from 'react'
import Axios from 'axios'

export default function useFetchData(url){
    const [ data, setData ] = useState([])
    const [ loading , setLoading ] = useState(false)
    const [ error , setError ] = useState(false)

    function init(){
        setData([])
        setLoading(false)
        setError(false)
    }

    async function load() {
        init()
        setLoading(true)
        try {
            const result = await Axios.get(url).data 
            setData(result)
        } catch (e) {
            setError(true)
        }
        setLoading(false)
    }

    return { data , loading , error , load } 
}

