import NewNoteForm from './NewNoteForm'
import { useGetUsersQuery } from '../users/usersApiSlice'
import PacmanLoader from 'react-spinners/PacmanLoader'

const NewNote = () => {
    const { users } = useGetUsersQuery('usersList', {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!users?.length) return <PacmanLoader color={'#FFF'} />

    const content = <NewNoteForm users={users} />

    return content
}

export default NewNote