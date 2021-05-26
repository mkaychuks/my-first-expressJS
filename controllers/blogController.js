const blogHome = (req, res) => {
  res.status(200).json({ success: true, message: 'Hello world' })
}

const homePage = (req, res) => {
  res.status(200).json({ success: true, message: 'Welcome to the whole world' })
}

module.exports = { blogHome, homePage }
