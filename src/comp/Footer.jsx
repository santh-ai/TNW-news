import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark border-bottom ">
                <div className="container py-5">
                    <div className="row  ">
                        <div className="col-lg-6">
                            <h1 className='text-white fw-bold'>TNW</h1>
                            <p className='text-white fs-4 pb-5'>The heart of tech</p>
                            <div>
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
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 text-start">
                                    <p className='text-white px-4'>More TNW</p>
                                    <ul className=''>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Media</Link> </li> 
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Events</Link> </li>
                                  <li> <Link className='text-info link-underline link-underline-opacity-0' to="/">Programs</Link> </li>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Spaces</Link> </li>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Newsletters</Link> </li>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Deals</Link> </li>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Jobs in tech</Link> </li>
                                    </ul>
                                 

                                </div>
                                <div className="col-lg-6 text-start">
                                    <p className='text-white px-4'>About TNW</p>
                                    <ul className=''>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Partner with us</Link> </li> 
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Jobs</Link> </li>
                                  <li> <Link className='text-info link-underline link-underline-opacity-0' to="/">Terms & Conditions</Link> </li>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Cookie Statement</Link> </li>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Privacy Statement</Link> </li>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Editorial Policy</Link> </li>
                                  <li><Link className='text-info link-underline link-underline-opacity-0' to="/">Masthead</Link> </li>
                                    </ul>
                                 

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-center ">
                <p className='text-white pt-5'>A Financial Times Company</p>
                <p className='text-secondary pb-5'>Copyright © 2006—2023, The Next Web B.V. Made with 3 in Amsterdam.</p>
            </div>
        </>
    )
}

export default Footer