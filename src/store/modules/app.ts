import store from "@/store";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";

enum MutationTypes {
  UpdateCount = "UPDATE_COUNT"
}

export interface State {
  increment: () => void;
  decrement: () => void;
  counter: number;
}

@Module({
  dynamic: true,
  namespaced: true,
  name: "app",
  store
})
class App extends VuexModule implements State {
  count = 0;

  @Action({ commit: MutationTypes.UpdateCount })
  increment(): number {
    return 2;
  }

  @Action
  decrement() {
    this.context.commit(MutationTypes.UpdateCount, -5);
  }

  get counter(): number {
    return this.count;
  }

  // Mutations ---------------------------
  @Mutation
  [MutationTypes.UpdateCount](delta: number) {
    this.count += delta;
  }

  // @MutationAction({ mutate: ["events", "conferences"] })
  // async fetAll() {
  //   const response: Response = await fetch("https://hasgeek.github.io/events/api/events.json");
  //   return response;
  // }
}

export const appModule: State = getModule(App);
