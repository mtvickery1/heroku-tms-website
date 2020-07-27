import React, { useState, useCallback, Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
// import Footer from '../../components/Footer/footer.js/index.js';
import img1 from '../../images/int.png';
import incoterms from '../../images/new/inco.png';

class Icote extends Component {

  // Scroll to top on load
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (


      <React.Fragment>

        <div className='container-fluid navspace'>

          {/* Incoterms Image */}
          <div className='row'>
            <div className="col-md-12 text-center">

              <img className="img-fluid rounded mb-3 mb-md-0 text-right" width='70%' height='auto' src={incoterms} alt="" />

            </div>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="text-justify">
                <div className="text-left">
                  <br></br>
                  <p className="text-primary blue-text"><h1><strong>Intcoterms</strong></h1></p>
                  <p><h3>
                    Ex-Works (EXW) – TERMS FOR ANY TRANSPORTATION MODE:
                  Is intended to be used when the buyer is going to take responsibility for loading the goods onto a carrier selected by the buyer without assistance from the seller. If the seller is going to load the goods on the carriers selected and contracted by the buyer, the FCA LOADED should be used.</h3></p>
                  <br></br>
                  <p><h3>
                    FCA (Free Carrier) – TERMS FOR ANY TRANSPORTATION MODE:
                    Goods loaded on the Buyer's Carrier by
                    the Seller, at the Seller's premises or other place of Origin. Buyer is responsible for Inland Transport from the named place.
                  When associated with a place of origin, should only be used when the responsibilities of the seller are limited to loading a carrier provided by the buyer, at the seller's dock. Also, that the buyer is going to take responsibility for transportation once the goods are loaded at the seller's dock.</h3></p>
                  <br></br>
                  <p><h3>
                    FAS (Free Alongside Ship) – TERMS FOR MARITIME ONLY:
                    Seller is responsible for Inland Transport from the place of origin to the Named Port of Export. Seller makes goods available to the buyer, once the goods are placed within the reach of the ship's tackle.
                  Requires the buyer to notify the seller of the arrangements for international transportation and the date and place of delivery. This requires the buyer to have established a relationship with a carrier, forwarder or agent at the ocean port of loading. The seller is responsible for all costs and transport, until goods are placed alongside the vessel. The term FAS should only be used when the buyer is going to take responsibility for international transportation once the goods have been received by the carrier and are placed within the reach of the ship's tackle.</h3></p>
                  <br></br>
                  <p><h3>
                    FOB (Free On Board Ocean Vessel) – TERMS FOR MARITIME ONLY:
                    Seller is responsible for Inland Transport from the place of origin to the Named Port of Export. Seller makes goods available to the buyer when goods are loaded on board the vessel.
                  Is intended for use when it is important that the goods pass the ship's rail to evidence delivery. This term is most commonly used for bulk cargo and port to port shipments of goods not loaded in an ocean container.</h3></p>
                  <br></br>
                  <p><h3>
                    CFR (Cost and Freight) – TERMS FOR MARITIME ONLY:
                    Seller is responsible for placing the goods on board an ocean vessel and paying for international transport to the port of destination.
                    Is intended for use in shipping ocean freight pier to pier cargo that is not containerized, when it is important that the goods pass the ship's rail to evidence delivery, and the seller is contracting and paying for international carriage. Specifically, it would not be an appropriate term to use when the goods have been loaded into an ocean container.
                  As a result, this term is usually limited to oversized goods that cannot be loaded into a container, overweight shipments that would exceed the weight limitations of shipping in a container, or less than container load shipments.</h3></p>
                  <br></br>
                  <p><h3>
                    CIF (Cost, Insurance and Freight) – TERMS FOR MARITIME ONLY:
                    The seller is responsible for placing the goods on board an ocean vessel. Seller must pay for international transport and insurance to the port of destination.
                  Is intended for use in shipping Pier to Pier Ocean cargo that is not containerized, when it is important that the goods pass the ship's rail to evidence delivery, and the seller is contracting for insurance and carriage. The insurance purchased is to be for a minimum amount of coverage, once the goods are loaded on the ocean vessel, and is to include insurance coverage to cover the buyer's insurable interests to the port of destination stated on the bill of lading. The insurance is to cover 110% of the CFR value of the goods.</h3></p>
                  <br></br>
                  <p><h3>
                    CPT (Carriage Paid To) – TERMS FOR ANY TRANSPORTATION MODE:
                    Seller is responsible for placing the goods on an Air or Ocean Carrier (Containerized, Roll-On, Roll Off) at the port of export. Seller must pay for international transport to the named place of destination.
                  Is intended for use in shipping by air freight, and ocean shipments that are containerized or can be rolled on and off the vessel. This term is also used for multimodal ocean shipments. The philosophy in the use of this term is that it is not important that the goods pass the ship's rail to evidence delivery, and the seller is contracting and paying for international carriage to a named place in a foreign country. Also, the term CPT allows for the seller to arrange and pay for transportation from a named place at origin (which could be the seller's dock) to a named place or destination in a foreign country.</h3></p>
                  <br></br>
                  <p><h3>
                    CIP (Carriage and Insurance Paid To) – TERMS FOR ANY TRANSPORTATION MODE:
                  Seller is responsible for placing the goods on an Air or Ocean Carrier (Containerized Roll-On, Roll Off cargo) at the port of export. Seller must pay for international transport and insurance to the named place of destination.</h3></p>
                  <br></br>
                  <p><h3>
                    DAT (Delivered at Terminal) – TERMS FOR ANY TRANSPORTATION MODE:
                  Establish an agreement that includes identification of who will insure the shipment; typically it is the seller under this term. The trade term is named in the contract.</h3></p>
                  <br></br>
                  <p><h3>
                    DAP (Delivered at Place) – TERMS FOR ANY TRANSPORTATION MODE:
                  Establish an agreement that includes identification of who will insure the shipment; typically it is the seller under this term. The trade term is named in the contract.</h3></p>
                  <br></br>
                  <p><h3>
                    DDP (Delivered Duty Paid) – TERMS FOR ANY TRANSPORTATION MODE:
                  Is intended for use in shipping goods by any means of transport to a named place. The term is most typically used when the point of delivery is a place other than the port or airport of unloading for the international transportation of the goods. The further transportation from the destination port can be included under the international bill of landing or a separate bill of lading issued upon arrival of the goods at the air or ocean port. The seller is responsible for all transportation costs, customs formalities, duties, taxes and any other expenses normally incurred in the course of transportation and customs clearance of goods entering the foreign country. The seller is also responsible for obtaining any import permit or import license that may be required to satisfy governmental or industry regulation for entering goods into the foreign country.</h3></p>
                  <br></br>
                  <p><h3>
                    INCOTERMS® IS A REGISTERED TRADEMARK OF THE INTERNATIONAL CHAMBER OF COMMERCE. THIS DOCUMENT IS NOT INTENDED AS LEGAL ADVICE BUT IS BEING PROVIDED FOR REFERENCE PURPOSES ONLY. USERS SHOULD SEEK SPECIFIC GUIDANCE FROM INCOTERMS® 2010 AVAILABLE THROUGH THE INTERNATIONAL CHAMBER OF COMMERCEwww.iccwbo.org</h3></p>

                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <Footer /> */}

      </React.Fragment>

    );
  }
}
export default Icote;