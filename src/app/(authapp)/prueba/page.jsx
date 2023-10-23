import React from 'react'

const page = () => {
    const prueba = process.env.PRUEBA
  return (
    <div>page {prueba}

    Segunda variable {process.env.NEXT_PUBLIC_API_URL}
    </div>
  )
}

export default page
