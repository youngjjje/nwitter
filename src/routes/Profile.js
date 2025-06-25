import {authService, dbService} from "fbase"
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"

const Profile = ({userObj, refreshUser}) => {
    const navigate  = useNavigate()
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)

    const onLogOutClick = () => {
        authService.signOut()
        navigate("/")
    }

    const onChange = (event) => {

        setNewDisplayName(event.target.value)
    }
    /*
    const getMyNweets = async () => {
        const nweets = await dbService.collection("nweets").where("createId", "==", userObj.uid).orderBy("createdAt", "asc").get()

        console.log(nweets.docs.map((doc) => doc.data()))
    }

    useEffect(() => {
        getMyNweets()
    }, [])

    */

    const onSubmit = async (event) => {
        event.preventDefault()
        if (userObj.displayName !== newDisplayName){
            await userObj.updateProfile({displayName: newDisplayName})
            refreshUser()
        }
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} autoFocus className="formInput"/>
                <input type="submit" value="Update Profile" className="formBtn" style={{marginTop: 10,}} />
            </form>
            <span className={"formBtn cancelBtn logOut"} onClick={onLogOutClick}>
                Log logOut
            </span>
        </div>
    )
};

export default Profile;