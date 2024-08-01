import React from 'react'

export default function Guitar(props) {

  const guitar = props.guitar
  const image = `./public/img/${guitar.image}.jpg`;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={image}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3>
        <p>
          {guitar.description}
        </p>
        <p className="fw-black text-primary fs-3">${guitar.price}</p>
        <button type="button" className="btn btn-dark w-100">
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}
