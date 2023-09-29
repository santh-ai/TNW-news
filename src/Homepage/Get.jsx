import React from 'react'

function Get() {
  return (
    <>
    <div className="container-fluid get">
        <div className="container text-center py-5">
            <h1 className='fw-bold text-white'>Get the TNW newsletter</h1>
            <p className='text-white'>Getting to the heart of the European tech and startup scene.</p>
            <form className=''><div className="mb-3">
    <input type="password" className="form-control w-50 bg-transparent mx-auto" placeholder='you@gmail.com'  id="" />
  </div>
  
</form>
<div className='text-secondary fs-4'>
                                    <i className="bi bi-facebook " />
                                    <i className="bi bi-instagram p-3" />
                                    <i className="bi bi-twitter" />
                                    <i className="bi bi-youtube p-3" />
                                    <i className="bi bi-envelope-fill" />
                                    <i className="bi bi-linkedin p-3" />
                                </div>

        </div>
    </div>
    </>
  )
}

export default Get
