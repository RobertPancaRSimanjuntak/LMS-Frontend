import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            courseTitles: []
        };
    },
    mutations: {
        setCourseTitle(state, title) {
            state.courseTitle = title;
        }
    },
    actions: {
        updateCourseTitle({ commit }, title) {
            commit('setCourseTitle', title);
        }
    },
    getters: {
        getCourseTitle: (state) => state.courseTitle
    }
});

export default store;
