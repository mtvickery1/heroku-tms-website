import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import pdfbol from "../../pdf/BOL.pdf"
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import pic5 from "../../images/int.png"
// import Footer from '../../components/Footer/footer.js/index.js';
import pdffile from '../../pdf/BOL.pdf';
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
      <>
        

        <div className='container-fluid navspace'>

          <div className="page-header">
            <h1 id="timeline" className="text-primary blue-text"><strong>Terms & Conditions</strong></h1>
          </div>
          <p><h3 className="font-italic"><small>
            Our invoices are payable upon receipt except with pre-approved credit terms. In certain cases, payment in advance may be required.</small></h3></p>
          <br></br>
          <p className="font-italic"><strong><h3><small>Payment Options</small></h3></strong></p>
          <br></br>
          <p className="font-italic"><h4><small>Wire Transfers </small></h4></p>
          <p className="font-italic"><h4><small>Money Order / Bank Draft </small></h4></p>
          <p className="font-italic"><h4><small>Domestic Check (may delay shipment) </small></h4></p>
          <br></br>
          <p className="font-italic"><h4><small>Transactions from territories outside the U.S. will be conducted via wire transfer only.</small></h4></p>
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
              <tbody className="table-primary">
                <tr>
                  <td><h4 className="font-italic">Transactions from territories outside the U.S.</h4></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                  <td className="text-center">
                    <Link to="route" onClick={(event) => { event.preventDefault(); window.open(pdffile); }}>
                      <h1 id="timeline" className="text-primary">
                        <strong><button type="button" className="btn btn-outline-primary">View</button></strong>
                      </h1>
                    </Link>
                  </td>

                  <td className="text-center"><h1 id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary"><a href={pdffile} download>Download</a></button></strong></h1></td>
                </tr>
              </tbody>
            </table>
            <br></br>
          </div>
        </div>
      </>


    );
  }
}
export default pdf;