import axios, { AxiosInstance } from "axios";

// class Http {
//   instance: AxiosInstance;
//   constructor() {
//     this.instance = axios.create({
//       baseURL: "https://api-football-beta.p.rapidapi.com/",
//       timeout: 10000,
//       headers: {
//         'X-RapidAPI-Key': 'f65a9cc4b4msh244390a196cc2a5p172614jsn9146d4ce3083',
//         'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
//       },
//     });
//   }
// }
class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://api-football-beta.p.rapidapi.com/",
      timeout: 10000,
      headers: {
        "X-RapidAPI-Key": "f65a9cc4b4msh244390a196cc2a5p172614jsn9146d4ce3083",
        "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
      },
    });
  }
}

const http = new Http().instance;

export default http;
