import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=au,gb";

export default {
  searchAll: function () {
    return axios.get(BASEURL);
  },
};
