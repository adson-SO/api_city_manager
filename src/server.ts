import { App } from "./app";

const app = new App().server;

app.listen(3000, () => console.log("Server is running"));