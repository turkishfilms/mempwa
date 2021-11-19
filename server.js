const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`here at ${port}!`))
app.use(express.static('public'))


/*make install able
Be served over HTTPS
Includes a web app manifest that includes:
short_name or name
icons - must include a 192px and a 512px icon check
start_url
display - must be one of fullscreen, standalone, or minimal-ui
prefer_related_applications must not be present, or be false
Registers a service worker with a fetch handler


*/