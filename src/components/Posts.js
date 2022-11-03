import React from 'react'

export const Posts = ({ state }) => {
    return (
        <div className='postContainer'>
            {
                state.map(object => {
                    return (
                        <>
                            <div className='card'>
                                <p> <strong>Title :</strong> {object.title}</p>
                                <p><strong>Body :</strong> {object.body}</p>
                            </div>
                        </>
                    )
                })
            }
        </div >
    )
}
