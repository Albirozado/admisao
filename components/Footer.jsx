import {AiFillHome} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'







export default function Footer(){
    return(
        <>
<div className="container my-5">

  <footer className="text-center text-lg-start text-black ">
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto background-color: #7c4dff; height: 2px" />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto background-color: #7c4dff; height: 2px" />
            <p>
              <a href="#!" className="text-black">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-black">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-black">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-black">Bootstrap Angular</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto background-color: #7c4dff; height: 2px" />
            <p>
              <a href="#!" className="text-black">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-black">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-black">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-black">Help</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto background-color: #7c4dff; height: 2px" />
            <p className='flex items-center'><AiFillHome/> New York, NY 10012, US</p>
            <p className='flex items-center'><MdEmail/> info@example.com</p>
            <p className="flex items-center"><BsFillTelephoneFill/> + 01 234 567 88</p>
          </div>
        </div>
      </div>
    </section>

    <div className="text-center p-3 0, 0, 0, 0.2)">
      © 2020 Copyright:
      <a className="text-black" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>

</div>
        </>
    )
}