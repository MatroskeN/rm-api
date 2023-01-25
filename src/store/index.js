import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        episodes: [],
        single_episode: []
    },
    getters: {
        EPISODES: state => {
            return state.episodes;
        },
        SINGLE_EPISODE: state => {
            return state.single_episode;
        }
    },
    mutations: {
        SET_EPISODES: (state, payload) => {
            Array.prototype.push.apply(state.episodes, payload)
        },
        SET_SINGLE_EPISODE: (state, payload) => {
            state.single_episode = payload;
        }
    },
    actions: {
        SET_EPISODES: async (context, page) => {
            try {
                let {data} = await axios.get('https://rickandmortyapi.com/api/episode?page=' + page)
                if (data) {
                    context.commit('SET_EPISODES', data.results)
                }
            } catch (err) {
                console.log(err)
            }
        },
        SET_SINGLE_EPISODE: async (context, id) => {
            try {
                let {data} = await axios.get('https://rickandmortyapi.com/api/episode/'+id)
                if (data) {
                    context.commit('SET_SINGLE_EPISODE', data)
                }
            } catch (err){
                console.log(err)
            }
        }
    },
    modules: {}
})
