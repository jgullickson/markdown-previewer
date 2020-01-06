import { UPDATE_TEXT } from '../actions/index'

const defaultState = {
    markdown: '# Type markdown here \n ## and see output in the preview to the right!'
}

const mainReducer = (state = defaultState, action) => {
    switch (action.type){
        case UPDATE_TEXT:
            return Object.assign({}, {markdown: action.text});
        default:
            return state
    }
}

export default mainReducer