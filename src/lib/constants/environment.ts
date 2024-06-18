const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;

const DEV_URL = "http://localhost:3000";
const PROD_URL = "https://kisok-fe-app.vercel.app";

const APP_URL = ENVIRONMENT === "DEV" ? DEV_URL : PROD_URL;

export { DEV_URL, PROD_URL, APP_URL };
