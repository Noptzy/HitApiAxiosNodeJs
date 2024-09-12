import axios from "axios";
import express, { response } from "express";

const app = express()
const port = 3500

app.listen(port, (req, res)=>{
    console.log(`server berjalan di port ${port}`)
})

app.get('/quran', (req, res)=>{
    const url = "https://quran-api.santrikoding.com/api/surah"

    axios.get(url)
    .then(response => {
        res.json(response.data)
    })
    .catch(err => {
        console.log('error memanggil data', err)
    })
})