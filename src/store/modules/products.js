import { createApp } from "vue";
import { createStore } from "vuex";

import axios from "../../service/axios";

export const products = createStore({
  state() {
    return {
      products: [],
      message: "",
    };
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.isAuth = payload;
      window.localStorage.setItem("auth", state.isAuth);
    },

  },
  actions: {
    GET_PRODUCTS: async ({ commit }, payload) => {
      try {
        const response = await axios.get("/product",);
        commit("SET_ROLE", response.data.role);
        return response;

      } catch (err) {
        console.log(err);
        commit("SET_ROLE", "");
      }
    },
  },
});
