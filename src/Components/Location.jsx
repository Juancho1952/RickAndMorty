import React from 'react'
import ResidentInfo from './ResidentInfo'
import '../Styles/DataLocation.css'

const Location = ({ ubication }) => {

    return (
        <header>
            <article className='header'>
                <ul className='header-info'>
                    <li className='header-data'><span>Nombre</span>{ubication?.name}</li>
                    <li className='header-data'><span>Tipo</span>{ubication?.type}</li>
                    <li className='header-data'><span>Dimensión</span>{ubication?.dimension}</li>
                    <li className='header-data'><span>Población total</span>{ubication?.residents.length}</li>
                </ul>
            </article>
            <div className='body-card'>
                {
                    ubication?.residents.map(url => (
                        <ResidentInfo
                            key={url}
                            url={url}
                        />
                    ))
                }
            </div>
        </header>
    )
}

export default Location