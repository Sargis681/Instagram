import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerChat.css'

function MessengerChat() {
  const { currentDialog } = useSelector(selectMessages)
  const { currentUser } = useSelector(selectUsers)

  return (
    <div className='MessengerChat'>
      {
        currentDialog.map(el => (
          <Fragment key={el.id}>
            <h2 style={{ color: "orange" }}>{el?.username}</h2>
            <h2 style={{ backgroundColor: el.fromID === currentUser.id ? 'lightGreen' : 'lightBlue' }} >{el?.text} </h2>
          </Fragment>

        ))
      }
    </div>
  )
}

export default MessengerChat
