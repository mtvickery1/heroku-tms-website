const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
// router.use("/api", apiRoutes);



// ------------------------------------------------------------
// POST
router.post('/send', (req, res, next) => {

  console.log('--------------------')
  console.log('req:', req.body)
  console.log('--------------------')

  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \nemail: ${email} \nmessage: ${message} `

  // Create PDF
  // ======================================================
  // pdf.create(content)

  console.log('wait 5 seconds')

  // var pdfFile = path.join(__dirname, 'output.pdf');
  // console.log('pdfFile:', pdfFile)

  setTimeout(function () {

    // var data = {
    //   from: 'Excited User <me@samples.mailgun.org>',
    //   to: 'mtvickery@yahoo.com',
    //   subject: 'yooooo',
    //   text: content,
    //   attachment: pdfFile
    // };

    // console.log('data:', data)

    console.log('content:', content)

    //Invokes the method to send emails given the above data with the helper library
    // mailgun.messages().send(data, function (err, body) {
    //   if (err) {
    //     console.log('err:', err)
    //     res.json({
    //       status: 'fail'
    //     })
    //   } else {
    //     res.json({
    //       status: 'success'
    //     })
    //   }

    //   console.log(body);

    //   // Delete PDF after send
    //   // console.log(__dirname + '/output.pdf');
    //   // fs.unlink(__dirname + '/output.pdf', (err) => {
    //   //   if (err) throw err;
    //   //   console.log('successfully deleted' + __dirname + '/output.pdf');
    //   // });

    //   console.log(':)');
    // });

  }, 5000)

});



// ------------------------------------------------------------



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
