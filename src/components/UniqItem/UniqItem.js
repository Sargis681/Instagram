import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './UniqItem.css'

function UniqItem() {
    // const {id} = useParams()
    // const users = useSelector(state => state.users)

    return (
        <>
            <header>
                <div className="container">
                    <div className="profile">

                    </div>
                </div>
            </header>

            <div className="container">
                <div className="gallery">

                </div>
            </div>

        </>
    )
}

export default UniqItem