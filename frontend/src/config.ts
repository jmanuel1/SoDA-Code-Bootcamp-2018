let baseApiUrl;
if (process.env.NODE_ENV === "development") {
  baseApiUrl = "http://127.0.0.1:8000";
} else {
  baseApiUrl = "http://todonelist-env.tdihg2raf3.us-east-1.elasticbeanstalk.com";
}

export {
  baseApiUrl
};
