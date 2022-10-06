import axios from "axios";
import { useEffect, useState } from "react";


const useAxios = (url) => {
    const [petition, setPetition] = useState()
    
    useEffect(() => {
        axios.get(url)
        .then(res => setPetition(res.data))
        .catch(err => console.log(err))
    }, [])
    return petition
}

export default useAxios
