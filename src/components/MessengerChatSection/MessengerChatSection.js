import { useSelector } from 'react-redux'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'

function MessengerChatSection() {
	const { usersData } = useSelector(selectUsers)
	const { activeUserId } = useSelector(selectMessages)
	return (
		<div className='Messenger-right-col'>
			<div className='UserSction'>
				<p>{usersData.find(user => user.id === activeUserId)?.username}</p>
				<p>i</p>
			</div>
			<div className='Chat'>
				<MessengerChat />
			</div>
			<MessengerChatForm />
		</div>
	)
}

export default MessengerChatSection
