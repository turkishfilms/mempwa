const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`here at ${port}!`))
app.use(express.static('public'))


/*make install able
Registers a service worker with a fetch handler
*/