const nodeMailer = require('nodemailer')

export default (req, res) => {
  const { message } = req.body
  const { fullName } = req.body
  const { email } = req.body
  const { phone } = req.body

  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'dimassibassem99@gmail.com',
    subject: `New Message from ${fullName}`,
    text: `Message: ${message} \n\n Email: ${email} \n\n Phone: ${phone}`
  }

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(200).json({
        success: false,
        message: error
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Message sent successfully'
      })
    }
  })

}
