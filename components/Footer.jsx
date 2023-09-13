import {AiFillHome} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import Link from 'next/link'







export default function Footer(){
    return(
        <>
<div className="container">

  <footer className="text-center text-lg-start bg-[#333] pt-2 mt-2">
    <section className="">
      <div className="container text-center text-md-start mt-2">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold text-[#ccc]">Company name</h6>
            <hr  className='mb-3 mt-0 text-[#ccc]'/>
            <p className="text-[#ccc]">
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold text-[#ccc]">Exames</h6>
            <hr  className='mb-3 mt-0 text-[#ccc]' />
            <p>
              <Link href="#!" className="text-[#ccc]">Univercidade E. Mondlane</Link>
            </p>
            <p>
              <Link href="#!" className="text-[#ccc]">Univercidade Pedagogica</Link>
            </p>
            <p>
              <Link href="#!" className="text-[#ccc]">Univercidade J. Chissano</Link>
            </p>
            <p>
              <Link href="#!" className="text-[#ccc]">Academia Militar</Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold text-[#ccc]">Material & Livros</h6>
            <hr  className='mb-3 mt-0 text-[#ccc]'/>
            <p>
              <Link href="#!" className="text-[#ccc]">Your Account</Link>
            </p>
            <p>
              <Link href="#!" className="text-[#ccc]">Become an Affiliate</Link>
            </p>
            <p>
              <Link href="#!" className="text-[#ccc]">Shipping Rates</Link>
            </p>
            <p>
              <Link href="#!" className="text-[#ccc]">Help</Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
            <h6 className="text-uppercase fw-bold text-[#ccc]">Contactos</h6>
            <hr  className='mb-3 mt-0 text-[#ccc]'  />
            <p className='flex items-center md:justify-start justify-center text-[#ccc]'><AiFillHome/> New York, NY 10012, US</p>
            <p className='flex items-center md:justify-start justify-center text-[#ccc]'><MdEmail/> info@example.com</p>
            <p className="flex items-center md:justify-start justify-center text-[#ccc]"><BsFillTelephoneFill/> + 01 234 567 88</p>
          </div>
        </div>
      </div>
    </section>

    <div className="text-center p-1 0, 0, 0, 0.2) text-[#ccc]">
      © 2020 Copyright:
      <Link className="text-[#ccc]" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
    </div>
  </footer>

</div>
        </>
    )
}