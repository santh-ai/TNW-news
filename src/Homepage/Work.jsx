import React from 'react'

function Work() {
  return (
    <>
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
        <h2 className='fw-bold text-primary'>Work with us</h2>
        <p>TNW takes center stage in the tech industry, offering creative media<br/> campaigns, sizzling tech events, bespoke innovation programs, and<br/> prime office locations in Amsterdam. Want to engage your<br/> audience more effectively, innovate your business, and position <br/>your brand in front of a digital-savvy audience?</p>
        <button type="button" class="btn btn-primary btn-lg"> Get in touch</button>
        </div>
        <div className="col-lg-6">
          <div className="row align-items-center">
            <div className="col-lg-3"><img className='w-100' src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/pillar-media.svg" alt="" srcset="" /></div> 
            <div className="col-lg-3"><p>Media</p></div>
            <div className="col-lg-3"><img className='w-100' src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/companies/pillar-events.svg" alt="" srcset="" /></div> 
            <div className="col-lg-3"><p>Events</p></div>
          </div>
          <div className="row align-items-center pt-2">
            <div className="col-lg-3"><img className='w-100' src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/pillar-spaces.svg" alt="" srcset="" /></div> 
            <div className="col-lg-3"><p>Spaces</p></div>
            <div className="col-lg-3"><img className='w-100' src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/companies/pillar-programs.svg" alt="" srcset="" /></div> 
            <div className="col-lg-3"><p>Programs</p></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Work