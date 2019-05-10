import { State as AppState } from '@/store/modules/app';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface RootState {
  app: AppState;
  // user: UserState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({});

// export default new Store({
//   state: {},
//   mutations: {},
//   actions: {}
// });
