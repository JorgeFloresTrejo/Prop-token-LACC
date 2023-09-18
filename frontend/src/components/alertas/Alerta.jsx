import React from 'react'

const Alerta =({alerta}) => {
  return (
    <>
       <div className= {`${alerta.error ? 'bg-red-600' : 'bg-blue-700'} text-center p-3 rounded-xl uppercase text-white font-bold mb-5`}>{alerta.msg}</div>
    </>
  )
}

export default Alerta