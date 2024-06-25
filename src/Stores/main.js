// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uploadedVideo: null
  },
  mutations: {
    setUploadedVideo(state, videoSrc) {
      state.uploadedVideo = videoSrc;
    }
  },
  actions: {
    uploadVideo({ commit }, videoFile) {
      // Lakukan proses upload video di sini (misalnya, menggunakan Axios)
      // Setelah video diunggah, simpan URL video di store
      const videoSrc = URL.createObjectURL(videoFile);
      commit('setUploadedVideo', videoSrc);
    }
  },
  getters: {
    getUploadedVideo(state) {
      return state.uploadedVideo;
    }
  }
});
