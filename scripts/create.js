const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
// const doc = new PDFDocument();

var pdf = {

  create: function (content) {

    var doc = new PDFDocument();

    // Pipe its output somewhere, like to a file or HTTP response
    // See below for browser usage
    doc.pipe(fs.createWriteStream('output.pdf'));
    // MIGHT NEED TO CHANGE TO HTTP LOCATION??

    // Embed a font, set the font size, and render some text
    doc
      // .font('fonts/PalatinoBold.ttf')
      .fontSize(25)
      .text(content, 100, 100);

    // Finalize PDF file
    doc.end();
    console.log('doc.end')

  }
}


module.exports = pdf;