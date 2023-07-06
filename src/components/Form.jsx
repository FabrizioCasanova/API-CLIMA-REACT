import React from "react"

const Form = ({ eventForm }) => {


  return (

    <div className='container'>
      <form id='weatherForm' onSubmit={eventForm}>
        <div className='input-group mb-3 mx-auto'>
          <input type="text" className='form-control' id='city' placeholder="Busque una ciudad aqui" />
          <button className="button-search" type="submit">Buscar</button>
        </div>
      </form>
    </div>

  )

}

export default Form