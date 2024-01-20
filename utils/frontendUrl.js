const frontendUrl =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_PRODUCTION
    : process.env.FRONTEND_DEV;

export default frontendUrl;