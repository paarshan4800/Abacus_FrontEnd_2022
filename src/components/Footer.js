import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import footerStyles from "./footer.module.css";
import "./footer.module.css";
export default function Footer() {
  return (
<<<<<<< HEAD
    <MDBFooter className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} color='white'>
      <MDBContainer className='p-4' >
        <section className='mb-4'>
          <h3>
            Contact Us
          </h3>
        </section>
        <section className='mb-4'>
        <div className={footerStyles.Links}>
        <div>
          <a href="https://www.facebook.com/csea.ceg" target="_blank" className='btn btn-outline-light btn-floating m-1' role='button'>
            <i class="fa fa-facebook-f"></i>
            {/* <MDBIcon  icon='fa fa-facebook-f' /> */}
          </a>
        </div>
        <div className={footerStyles.Links1}>
          <a href="https://instagram.com/csea_ceg?igshid=1ez05lkwkupnx" target="_blank" className='btn btn-outline-light btn-floating m-1' role='button'>
            <i class="fa fa-instagram"></i>
            {/* <MDBIcon  icon='fa fa-twitter' /> */}
          </a>
        </div>
          {/* <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
=======
    <MDBFooter className="text-center bg-dark" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <h3>Contact Us</h3>
        </section>
        <section className="mb-4">
          <div className={footerStyles.Links}>
            <div className={footerStyles.Links1}>
              <a
                href="https://www.facebook.com/csea.ceg"
                target="_blank"
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i class="fa fa-facebook-f"></i>
                {/* <MDBIcon  icon='fa fa-facebook-f' /> */}
              </a>
            </div>
            <div className={footerStyles.Links1}>
              <a
                href="https://instagram.com/csea_ceg?igshid=1ez05lkwkupnx"
                target="_blank"
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i class="fa fa-instagram"></i>
                {/* <MDBIcon  icon='fa fa-twitter' /> */}
              </a>
            </div>
            {/* <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
>>>>>>> 8257032ead0c5b272724b57aa50285cf24c08e86
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>
<<<<<<< HEAD
*/}     <div>
          <a href="https://www.linkedin.com/company/abacus-cse" target="_blank" className='btn btn-outline-light btn-floating m-1' role='button'>
            <i class="fa fa-linkedin"></i>
          </a> 
        </div>
          {/* <a className='btn btn-outline-light btn-floating m-1' role='button'> */}
=======
*/}{" "}
            <div className={footerStyles.Links1}>
              <a
                href="https://www.linkedin.com/company/abacus-cse"
                target="_blank"
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
            {/* <a className='btn btn-outline-light btn-floating m-1' role='button'> */}
>>>>>>> 8257032ead0c5b272724b57aa50285cf24c08e86
            {/* <MDBIcon fab icon='github' /> */}
            {/* <i class="fa fa-github"></i>
          </a> */}
          </div>
        </section>

        {/* <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section> */}

        <section className="">
          <MDBRow>
<<<<<<< HEAD
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              {/* <h5 className='text-uppercase'>Links</h5> */}
              <div className={footerStyles.contact}>Adhithya K</div>
              <a href="tel:+91 8883018311" target="_blank" className={`${footerStyles.contact} ${footerStyles.num} `}><i class="fa fa-phone" aria-hidden="true"></i> 8883018311</a>
              {/* <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul> */}
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              {/* <h5 className='text-uppercase'>Links</h5> */}
              <div className={footerStyles.contact}>Usha Varshini Saravanan</div>
              <a href="tel:+91 9894560778" target="_blank" className={`${footerStyles.contact} ${footerStyles.num} `}><i class="fa fa-phone" aria-hidden="true"></i> 9894560778</a>
=======
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              {/* <h5 className='text-uppercase'>Links</h5> */}
              <div className={footerStyles.contact}>Adhithya K</div>
              <a
                href="tel:+91 8883018311"
                target="_blank"
                className={`${footerStyles.contact} ${footerStyles.num} `}
              >
                <i class="fa fa-phone" aria-hidden="true"></i> 8883018311
              </a>
>>>>>>> 8257032ead0c5b272724b57aa50285cf24c08e86
              {/* <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul> */}
            </MDBCol>

<<<<<<< HEAD
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              {/* <h5 className='text-uppercase'>Links</h5> */}
              <div className={footerStyles.contact}>Shankar Kumar S</div>
              <a href="tel:+91 9600568627" target="_blank" className={`${footerStyles.contact} ${footerStyles.num} `}><i class="fa fa-phone" aria-hidden="true"></i> 9600568627</a>
=======
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 pr-4">
              {/* <h5 className='text-uppercase'>Links</h5> */}
              <div className={footerStyles.contact}>
                Usha Varshini Saravanan
              </div>
              <a
                href="tel:+91 9894560778"
                target="_blank"
                className={`${footerStyles.contact} ${footerStyles.num} `}
              >
                <i class="fa fa-phone" aria-hidden="true"></i> 9894560778
              </a>
>>>>>>> 8257032ead0c5b272724b57aa50285cf24c08e86
              {/* <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul> */}
            </MDBCol>

<<<<<<< HEAD
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              {/* <h5 className='text-uppercase'>Links</h5> */}
              <div className={footerStyles.contact}>Thivyha Siv</div>
              <a href="tel:+91 6383645287" target="_blank" className={`${footerStyles.contact} ${footerStyles.num} `}><i class="fa fa-phone" aria-hidden="true"></i> 6383645287</a>
              {/* <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul> */}
=======
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 pl-4">
              {/* <h5 className='text-uppercase'>Links</h5> */}
              <div className={footerStyles.contact}>Shankar Kumar S</div>
              <a
                href="tel:+91 9600568627"
                target="_blank"
                className={`${footerStyles.contact} ${footerStyles.num} `}
              >
                <i class="fa fa-phone" aria-hidden="true"></i> 9600568627
              </a>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              {/* <h5 className='text-uppercase'>Links</h5> */}
              <div className={footerStyles.contact}>Thivyha Siv</div>
              <a
                href="tel:+91 6383645287"
                target="_blank"
                className={`${footerStyles.contact} ${footerStyles.num} `}
              >
                <i class="fa fa-phone" aria-hidden="true"></i> 6383645287
              </a>
>>>>>>> 8257032ead0c5b272724b57aa50285cf24c08e86
            </MDBCol>

            {/* <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5> */}

            {/* <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul> */}
            {/* </MDBCol> */}
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="#">
          ABACUS
        </a>
      </div>
    </MDBFooter>
  );
}

// import React from "react";

// import logo from "../images/logo.png";

// const Footer = () => (
//   <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">

//     <div className="flex justify-center items-center flex-col mt-5">
//       <p className="text-white text-sm text-center">Come join us!</p>
//       <p className="text-white text-sm text-center font-medium mt-2">info@abacus.com</p>
//     </div>

//     <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

//       <p className="text-white text-left text-xs">@abacus2022</p>
//       <p className="text-white text-right text-xs">All rights reserved</p>

//   </div>
// );

// export default Footer;
