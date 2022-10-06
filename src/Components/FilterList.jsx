import React from 'react'
import '../Styles/FilterList.css'

const FilterList = ({sugestedList, setSearchInput}) => {

    const handleclick = id => setSearchInput(id)

    return (
        <div>
            <ul className='Filter'>
                {
                    sugestedList?.map(location => (
                        <li className='Filter-List' onClick={() => handleclick (location.id)} 
                        key={location.id}>{location.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilterList