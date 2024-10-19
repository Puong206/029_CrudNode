import express from 'express';

const router = express.Router();

const mobil = [
    {
        merk: "Toyota",
        model: "Avanza",
        warna: "Hitam",
        Tahun: 2021
    },
    {
        merk: "Porsche",
        model: "Sport",
        warna: "Kuning",
        Tahun: 2024
    }
];

const lokomotif = [
    {
        Seri: "CC201",
        Pabrikan: "General Electric",
        Tipe: "GE U18C",
        Tahun: 1977
    },
    {
        Seri: "CC203",
        Pabrikan: "General Electric",
        Tipe: "GE U20C",
        Tahun: 1995
    },
    {
        Seri: "CC204",
        Pabrikan: "General Electric",
        Tipe: "GE C18MMi",
        Tahun: 2003
    },
    {
        Seri: "CC206",
        Pabrikan: "General Electric",
        Tipe: "GE CM20EMP",
        Tahun: 2013
    }
];

router.get("/mobil", (req, res) => {
    res.send(mobil);
});

router.get("/lokomotif", (req, res) => {
    res.send(lokomotif);
});

export default router;