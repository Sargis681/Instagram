import { useDispatch, useSelector } from 'react-redux'
import { changeActivUserId, selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage({ username, id, img }) {
	const dispatch = useDispatch()
	const { activeUserId } = useSelector(selectMessages)
	const { currentUser } = useSelector(selectUsers)
	const openDialog = () => {
		dispatch(changeActivUserId({ id, fromId: currentUser.id }))
	}

	return (
		<div className='Messenger-left-col-people-message' style={{ backgroundColor: activeUserId === id ? 'lightGray' : '' }} onClick={openDialog}>
			<div className='Messsage-img'>
				<img src={img} alt='' />
			</div>
			<div className='Message-info'>
				<p>{username}</p>
				<p>{id}</p>
			</div>
		</div>
	)
}

export default MessengerPeoplesMessage
