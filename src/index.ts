import express from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 3000);

app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/", (req, res) => {
    res.send("Hello from astro-bookings (Express + TypeScript)\n");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
