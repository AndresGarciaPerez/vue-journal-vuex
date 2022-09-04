// ESTE ES EL STORE DEL MODULO QUE SE LLAMA JOURNAL
import state from "./state"

import actions from "./actions"
import getters from "./getter"
import Mutations from "./mutations"

const journalModule = {
    namespaced: true,
    actions,
    getters,
    Mutations,
    state
}

export default journalModule