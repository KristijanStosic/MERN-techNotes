import { useParams } from 'react-router-dom'
import { useGetUsersQuery } from './usersApiSlice'
import PacmanLoader from 'react-spinners/PacmanLoader'
import EditUserForm from './EditUserForm'

const EditUser = () => {
    const { id } = useParams()

    const { user } = useGetUsersQuery('usersList', {
        selectFromResult: ({ data }) => ({
            user: data?.entities[id]
        }),
    })

    if (!user) return <PacmanLoader color={'#FFF'} />

    const content = <EditUserForm user={user} />

    return content
}

export default EditUser