import profile_pic from "../assets/images/Profile_photo.png";
function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img src={profile_pic} alt="User Avatar" className="profile-avatar" />
        <h2>Your Name</h2>
        <p>Gender: Male</p>
        <p>Bio: I love meaningful chats ✨</p>
      </div>
    </div>
  );
}

export default Profile;
