import React from 'react'
import useAxios from '../hooks/useAxios'
import CardInterface from '../Styles/CardInterface.css'

const ResidentInfo = ({ url }) => {

    const resident = useAxios(url)

    return (
        <div className='card'>
            <img className='card-img' src={resident?.image} alt="Photo character" />
            <h2 className='card-tittle'><span></span>{resident?.name}</h2>
            <ul className='card-info'>
                <li className='card-data'><span>Estado</span>{resident?.status}</li>
                <li className='card-data'><span>Origen</span>{resident?.species}</li>
                <li className='card-data'><span>Lugar de origen</span>{resident?.origin.name}</li>
                <li className='card-data'><span>Aparicion en Episodios</span>{resident?.episode.length}</li>
            </ul>
        </div>
    )
}

export default ResidentInfo