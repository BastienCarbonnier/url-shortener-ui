import axios from 'axios'

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const shortenUrl = async (urlToShorten: string, resourceHost: string): Promise<any> => {
  return await axios.post(`${import.meta.env.VITE_URL_SHORTNER_API_URL}/url-shortener/shorten`, { urlToShorten, resourceHost }, { headers });
}