import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        error: "",
        presets: [],
        links: []
    },
    mutations: {
        _updatePresets(state, payload) {
            state.presets = payload;
        },
        _updateLinks(state, payload) {
            state.links = payload;
        }
    },
    actions: {
        getUserSettings: async function ({ commit, state }, payload) {
            chrome.storage.local.get({
                links: [],
                presets: []
            }, items => {
                commit("_updatePresets", items.presets);
                commit("_updateLinks", items.links);
            });
        },
        setSampleUserSettings: async function ({ commit, state }, payload) {
            chrome.storage.local.set({
                links: ["google.be", "youtube.com", "nani.tsk"],
                presets: [
                    {
                        id: 1,
                        name: "preset1",
                        links: ["q.com", "w.com", "e.com"]
                    },
                    {
                        id: 2,
                        name: "preset2",
                        links: ["r.com", "t.com", "y.com"]
                    },
                    {
                        id: 3,
                        name: "preset3",
                        links: ["google.be", "youtube.com", "nani.tsk"]
                    },
                    {
                        id: 4,
                        name: "preset4",
                        links: ["jeff.bezos"]
                    }
                ]
            }, () => {

            });
        },
    },
    modules: {
    }
})
