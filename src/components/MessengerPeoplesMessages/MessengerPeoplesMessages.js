import './MessengerPeoplesMessages.css'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'

function MessengerPeoplesMessages() {
	const { usersData, currentUser } = useSelector(selectUsers)
	return (
		<div className='Messenger-left-col-peoples-messages'>
			{
				usersData.filter(el => el.id !== currentUser.id)
					.map(el => <MessengerPeoplesMessage
						key={el.id}
						id={el.id}
						img={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`}
						username={el.username}
					/>)
			}
		</div>
	)
}

export default MessengerPeoplesMessages
