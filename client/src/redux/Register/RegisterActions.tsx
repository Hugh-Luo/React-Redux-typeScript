import {REGISTER} from "./RegisterTypes";


interface info {
    type: string
}

let Register_action = ():info=> {
    return {
        type: REGISTER
    }
}

export default Register_action;