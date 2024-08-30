import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const searchHotels = async (query: string) => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://tripadvisor-scraper.p.rapidapi.com/hotels/list',
    params: {
      query: query,
      page: '1',
    },
    headers: {
      'x-rapidapi-key': 'b81b85f2b7msh2762d906e0ac700p1a567bjsn338860bf0f89',
      'x-rapidapi-host': 'tripadvisor-scraper.p.rapidapi.com',
    },
  };

  try {
    const response: AxiosResponse<any> = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getHotelDetails = async (id: string) => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://tripadvisor-scraper.p.rapidapi.com/hotels/detail',
    params: { id: id },
    headers: {
      'x-rapidapi-key': 'b81b85f2b7msh2762d906e0ac700p1a567bjsn338860bf0f89',
      'x-rapidapi-host': 'tripadvisor-scraper.p.rapidapi.com',
    },
  };

  try {
    const response: AxiosResponse<any> = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};