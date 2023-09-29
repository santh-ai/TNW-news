import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Deep from '../Pages/Deep'
import Start from '../Pages/Start'
import Investor from '../Pages/Investor'
import Government from '../Pages/Government'



function Header() {
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-4" to="/">TNW</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
         <Link className="nav-link fw-bold" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link fw-bold" to="/deep">Deep tech</Link>
        </li>
        <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle fw-bold" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   More
  </Link>
  <ul className="dropdown-menu ">
    <li><Link className="dropdown-item fw-bold" to="/start">Startups and technology</Link></li>
    <li><Link className="dropdown-item fw-bold" to="/investor">Investors and funding</Link></li>
    <li><Link className="dropdown-item fw-bold" to="/govern">Government and policy</Link></li>
  </ul>
</li>

      </ul>
    </div>
  </div>
</nav>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/deep' element={<Deep/>}/>
  <Route path='/start' element={<Start/>}/>
  <Route path='/investor' element={<Investor/>}/>
  <Route path='/govern' element={<Government/>}/>
 </Routes>
</>
  )
}

export default Header