import pdffile from '../../pdf/BOL.pdf';
import pdffile2 from '../../pdf/ebtms.pdf';
import samplePDF from './sample.pdf';

import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';


import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Test() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (

    <React.Fragment>

      <div className='container-fluid navspace'>

        {/* Header */}
        <div className="page-header">
          <h1 id="timeline" className="text-primary blue-text"><strong>Documents</strong></h1>
        </div>

        {/* Sub-header */}
        {/* <div className="row">
          <div className="col-md-12">
            <p className="font-italic"><h2>PDF Downloads</h2></p>
          </div>
        </div> */}


        <div className='row'>

          {/* TMS Bill of Lading */}
          <div className='col-xl-6'>

            {/* PDF Title */}
            <div className='row'>
              <div className='col-xl-12'>
                <h4 className="font-italic">TMS Bill of Lading Terms and Conditions Document</h4>
              </div>
            </div>

            {/* Display Document */}
            <div className='row'>
              <div className='col-12'>
                <Document
                  file={pdffile}
                  onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={1} height={600} />
                </Document>
              </div>
            </div>

            <div className='row'>

              {/* View/Download */}
              <div className='col-xl-12'>
                {/* View */}
                <Link to="route" onClick={(event) => { event.preventDefault(); window.open(pdffile); }}><span id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary">View</button></strong></span></Link>

                {/* Download */}
                <span id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary"><a href={pdffile} download>Download</a></button></strong></span>
              </div>
            </div>

            <br />

          </div>


          {/* TMS Brochure */}
          <div className='col-xl-6'>

            {/* PDF Title */}
            <div className='row'>
              <div className='col-xl-12'>
                <h4 className="font-italic">TMS (Trade Managements Solutions - LP) Brochure</h4>
              </div>
            </div>

            {/* Display Document */}
            <div className='row'>
              <div className='col-xl-12'>
                <Document
                  file={pdffile2}
                  onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} height={600} />
                </Document>
              </div>
            </div>

            <div className='row'>

              {/* Next/Previous */}
              <div className='col-6'>
                <p>
                  Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>

                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                >Previous</button>

                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                >Next</button>
              </div>

              {/* View/Download */}
              <div className='col-6'>
                {/* View */}
                <Link to="route" onClick={(event) => { event.preventDefault(); window.open(pdffile2); }}><span id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary">View</button></strong></span></Link>

                {/* Download */}
                <span id="timeline" className="text-primary"><strong><button type="button" className="btn btn-outline-primary"><a href={pdffile2} download>Download</a></button></strong></span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <br />

    </React.Fragment>

  );
}