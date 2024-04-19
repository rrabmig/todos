import React from 'react'

const Modal = ({filter}) => {
    switch (filter) {
        case 'Active':
            return (
                <div style={{height:'100%',display:'flex', justifyContent:'center', alignItems:'center', color:'rgb(223,223,223', fontSize:'35px'}}>
                    All tasks are done
                </div>
            )
        case 'Completed':
            return (
                <div style={{height:'100%',display:'flex', justifyContent:'center', alignItems:'center', color:'rgb(223,223,223', fontSize:'35px'}}>
                    There is no completed tasks
                </div>
            )
        default:
            return (
                <div style={{height:'100%',display:'flex', justifyContent:'center', alignItems:'center', color:'rgb(223,223,223', fontSize:'35px'}}>
                    No tasks
                </div>
            )
    }
}

export default Modal
