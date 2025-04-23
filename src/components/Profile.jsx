import { useState } from 'react'
import Avatar from '../assets/images/photo-avatar-mini.jpg'

const Profile = () => {

    const [myProfile, setMyProfile] = useState({
        firstname: "Diegs",
        lastname: "Kanté",
        job: " Stagiaire ISTQB",
        city: "Villeneuve"
    })

    const { firstname, lastname, job, city } = myProfile

    return (
        <header>
            <img src={Avatar} alt="ma photo de profil" />
            <div id="profile">
                <h1>{firstname} {lastname}</h1>
                <h2>{job}</h2>
                <h2>{city}</h2>
            </div>

        </header>
    )
}

export default Profile