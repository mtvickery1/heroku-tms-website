import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import pdfbol from "../../pdf/BOL.pdf"
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import pic5 from "../../images/int.png"
// import Footer from '../../components/Footer/footer.js/index.js';
import pdffile from '../../pdf/BOL.pdf';
import pdffile2 from '../../pdf/ebtms.pdf';
import pdffile3 from '../../pdf/DAOCCA.pdf';
import { Link } from 'react-router-dom';

class pdf extends Component {
  state = { numPages: null, pageNumber: 1 };


  // Scroll to top on load
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (


      <React.Fragment>


        <div className='container-fluid navspace'>

          <div className="page-header">
            <h1 id="timeline" className="text-primary blue-text"><strong>Documents</strong></h1>
          </div>

          <div className="col-md-5">
            <p className="font-italic"><h2>PDF Downloads</h2></p>
          </div>

          <br></br>

          <br></br>

          <div>

            <table id="example" className="table" style={{ width: '100%' }}>

              <thead>
                <tr>
                  <th>NAME</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th className="text-center">VIEW</th>
                  <th className="text-center">DOWNLOAD</th>
                </tr>
              </thead>

              {/* Terms */}
              <tbody className="table-primary">
                <tr>
                  <td><h4 className="font-italic">TMS Bill of Lading Terms and Conditions Document</h4></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center"><Link to="route" onClick={(event) => { event.preventDefault(); window.open(pdffile); }}><h1 id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary">View</button></strong></h1></Link></td>
                  <td className="text-center"><h1 id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary"><a href={pdffile} download>Download</a></button></strong></h1></td>
                </tr>
              </tbody>

              {/* Brochure */}
              <tbody className="table-success">
                <tr>
                  <td><h4 className="font-italic">TMS (Trade Managements Solutions - LP) Brochure</h4></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center"><Link to="route" onClick={(event) => { event.preventDefault(); window.open(pdffile2); }}><h1 id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary">View</button></strong></h1></Link></td>
                  <td className="text-center"><h1 id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary"><a href={pdffile2} download>Download</a></button></strong></h1></td>
                </tr>
              </tbody>


              {/* <tbody className="table-warning">
                <tr>
                  <td><h4 className="font-italic">DAO & CCA</h4></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center"><Link to="route" onClick={(event) => { event.preventDefault(); window.open(pdffile3); }}><h1 id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary">View</button></strong></h1></Link></td>
                  <td className="text-center"><h1 id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary"><a href={pdffile3} download>Download</a></button></strong></h1></td>
                </tr>
              </tbody> */}


            </table>

            <br></br>

          </div>


        </div>

        {/* <Footer /> */}


      </React.Fragment>


    );
  }
}
export default pdf;