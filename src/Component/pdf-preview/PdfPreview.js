import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Worker URL for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewerComponent = (props) => {
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent context menu (right-click) on the PDF
  };
  

  return (
    <div onContextMenu={handleContextMenu}>
      <Document
        file={props.pdfUrl} // Replace with the URL or data of the PDF you want to display
        onLoadSuccess={() => console.log("PDF loaded successfully")}
        onLoadError={(error) => console.error("Error loading PDF:", error)}
      >
        <Page
          pageNumber={1}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} // Set the width to the device's width for better mobile responsiveness
        />
        <Page
          pageNumber={2}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth}
        />
        <Page
          pageNumber={3}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth}
        />
        <Page
          pageNumber={4}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
        <Page
          pageNumber={5}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
        <Page
          pageNumber={6}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
        <Page
          pageNumber={7}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
        <Page
          pageNumber={8}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
        <Page
          pageNumber={9}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
        <Page
          pageNumber={10}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
        <Page
          pageNumber={11}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
        <Page
          pageNumber={12}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
            <Page
          pageNumber={13}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
            <Page
          pageNumber={14}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
            <Page
          pageNumber={15}
          renderTextLayer={false} // Disable text layer to make it read-only
          renderAnnotationLayer={false}
          width={window.innerWidth} 
        />
      </Document>
    </div>
  );
};

export default PdfViewerComponent;
