
import state from "./state"

import actions from "./actions"
import getters from "./getter"
import Mutations from "./mutations"

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    Mutations,
    state
}

export default myCustomModule