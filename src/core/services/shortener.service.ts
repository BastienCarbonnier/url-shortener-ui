import axios from 'axios'
import { BackendResponse } from '../models/response.model';

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const shortenUrl = async (urlToShorten: string): Promise<BackendResponse> => {
  return (await axios.post(`${import.meta.env.VITE_URL_SHORTNER_API_URL}/url-shortener/shorten`, { urlToShorten }, { headers })).data;
}

export const getFullUrl = async (shortUrl: string): Promise<BackendResponse> => {
  return (await axios.get(`${import.meta.env.VITE_URL_SHORTNER_API_URL}/url-shortener/`, {headers, params: { shortUrl }})).data;
}