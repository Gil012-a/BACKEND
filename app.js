import express from "express";
import bookRoute from "./routes/bookRoutes.js";

const app = express();

app.use("/books", bookRoute);

try {
    const port = 3000;

    app.listen(port, () => {
        console.log(`Listening to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}
