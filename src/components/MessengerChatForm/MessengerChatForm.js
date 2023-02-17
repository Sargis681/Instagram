import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addText, selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'

function MessengerChatForm() {
	const chatRef = useRef()
	let { allMessages, activeUserId } = useSelector(selectMessages)
	const dispatch = useDispatch()
	const { currentUser } = useSelector(selectUsers)

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addText({
			fromID: currentUser.id,
			text: chatRef.current[0].value,
			username: currentUser.username
		}))
		console.log(allMessages);
		chatRef.current.reset()

	}
	return (
		<>
			{activeUserId
				?
				<form ref={chatRef} onSubmit={handleSubmit} className='Chat-input'>
					<input type='text' placeholder='Message...' />
					<img src={IMAGES.like} alt='' />
					<button type="submit">Send</button>
				</form>
				:
				<h1 style={{ color: 'red' }}>Choose your dialog</h1>
			}
		</>
	)
}

export default MessengerChatForm
