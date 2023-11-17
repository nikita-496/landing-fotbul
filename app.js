import express from "express"
import path from 'path'
import { fileURLToPath } from 'url';

const server = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(express.static(path.join(__dirname,'/public')));

server.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
})

server.listen(5000, async () => {
    console.log(`Server started on port 5000`)
})