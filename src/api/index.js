import axios from 'axios';

export default class Api {
  static fetchFiles() {
    return axios.get('/static/list.json');
  }

  static fetchStory() {
    return axios.get('/static/story.json');
  }

  static fetchAssets() {
    return axios.get('/static/assets.json');
  }
}
