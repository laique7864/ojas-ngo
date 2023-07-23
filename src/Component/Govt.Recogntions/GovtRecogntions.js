import React from 'react';
import ojaspdf from '../../assets/Navbarlogo/OJAS NGO CERTIFICATIONS.pdf';
import PdfViewerComponent from '../pdf-preview/PdfPreview';
// import PDFViewerWithHighlight from '../components/PDFViewerWithHighlight'; 

const GovtRecogntions = () => {
  const disableContextMenu = (e) => {
    e.preventDefault();
  };


  return (
    <div onContextMenu={disableContextMenu} >
 

            <p className="mt-2 text-slate-500 p-8" >
              At our NGO (OJAS BAHU UDDESHIYE SEVA BHAVI SANSTHA, PARBHANI - MAHARASHTRA), We are committed to making a positive impact on society through various social activities. With a strong belief in the power of collective action, we actively engage in initiatives that promote education, healthcare, environmental sustainability, and community development. Our dedicated team of passionate volunteers works tirelessly to implement projects that address pressing social issues, fostering a sense of empowerment and inclusivity within the communities we serve. Through collaboration and partnerships, we strive to create a ripple effect of positive change, touching the lives of those in need and inspiring others to join us in our mission. Together, we can build a brighter, more equitable future for all. Join us today and be part of the change!
            </p>

      {/* PDF Viewer with Read-Only Highlight Feature */}
      <div >


      <PdfViewerComponent pdfUrl={ojaspdf} />
      </div>
    </div>
  );
};

export default GovtRecogntions;
