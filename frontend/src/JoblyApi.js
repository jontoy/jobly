import axios from 'axios';
import config from './config';
const DATABASE_URL = config.DATABASE_URL || 'https://localhost:3001';

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      paramsOrData._token = JSON.parse(localStorage.getItem('token'));
  
      console.debug("API Call:", endpoint, paramsOrData, verb);
  
      try {
        return (await axios({
          method: verb,
          url: `${DATABASE_URL}/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
    static async signup(data) {
        let res = await this.request(`users`, data, "post");
        return res.token;
      }
    static async login(data) {
        let res = await this.request(`login`, data, "post");
        return res.token;
      }
    static async getUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }
    static async updateUser(username, data) {
        let res = await this.request(`users/${username}`, data, 'patch');
        return res.user;
    }
    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }
    static async getCompanies(params={}) {
        let res = await this.request('companies', params);
        return res.companies;
    }
    static async getJob(id) {
        let res = await this.request(`jobs/${id}`);
        return res.job;
      }
    static async getJobs(params={}) {
        let res = await this.request('jobs', params);
        return res.jobs;
    }
    static async applyToJob(id) {
        let res = await this.request(`jobs/${id}/apply`, {state:'applied'}, 'post');
        return res.message;
    }
    static async unApplyToJob(id) {
        let res = await this.request(`jobs/${id}/apply`, {}, 'delete');
        return res.message;
    }
  }

export default JoblyApi;