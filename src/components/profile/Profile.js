import "./Profile.css"
import {profileData} from "./profile-data";
import { useState } from "react";
import {FaTrashAlt} from "react-icons/fa"


const Profile =()=>{

    const [userProfile, setUserProfile] = useState(profileData)
    const [search, setSearch] = useState("")

    const removeProfile = (id) =>{
        const newListProfile = userProfile.filter((profile) => profile.id !== id)
        setUserProfile(newListProfile)
    }

    const handleInputChange = e =>{
        setSearch(e.target.value)
    }

    return(
        <section className="profile_sec">
            <div className="container">
                <h1 className="title_profile">Profile</h1>
                <div className="form">
                    <input type="text" 
                    placeholder="Search" 
                    className="input_search" 
                    onChange={handleInputChange}
                    value={search}
                    />
                </div>
                {
                    userProfile.filter((value)=>{
                        if(search === ""){
                            return value;
                        }else if(value.nombre.toLowerCase().includes(search.toLocaleLowerCase())){
                            return value;
                        }
                    }).map((profile) =>{
                        return(
                            <div className="profile" key={profile.id}>
                                <img src={profile.img} alt="img" />
                                <div className="desc">
                                    <h3>Nombre: {profile.nombre}</h3>
                                    <p>Job: {profile.job}</p>
                                </div>
                                <FaTrashAlt size={18} className="icon" onClick={() => removeProfile(profile.id)}/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Profile;