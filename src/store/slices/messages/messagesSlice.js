import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        currentDialog: [],
        activeUserId: '',
        allMessages: []
    },
    reducers: {
        addText(state, { payload: { fromID, text, username } }) {
            const currentMessage = {
                id: new Date().getTime().toString(),
                fromID: fromID,
                toID: state.activeUserId,
                username: username,
                text: text
            }
            state.allMessages.push({ ...currentMessage })
            state.currentDialog.push({ ...currentMessage })
        },
        changeActivUserId(state, { payload: { id, fromId } }) {
            state.activeUserId = id
            state.currentDialog = [
                ...state.allMessages.filter(message => (message.toID === id && message.fromID === fromId) ||
                    (message.toID === fromId && message.fromID === id))
            ]
        },
        reset(state) {
            state.activeUserId = ''
            state.currentDialog = []
        }
    },
})


export const selectMessages = state => state.messages

export const { changeActivUserId, addText, reset } = messagesSlice.actions

export const messagesReducer = messagesSlice.reducer