import { useState } from "react";
import "../style/ProfilePage.css";

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [profileImage, setProfileImage] = useState("/default-profile.png");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <h1>Profile Settings</h1>
      </header>

      {/* Main Content */}
      <main className="profile-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />
            <label htmlFor="profile-image-upload" className="image-upload-btn">
              Change Image
            </label>
            <input
              type="file"
              id="profile-image-upload"
              className="image-upload-input"
              onChange={handleImageUpload}
            />
          </div>
          <div className="profile-info">
            <label htmlFor="profile-name" className="profile-label">
              Name:
            </label>
            <input
              type="text"
              id="profile-name"
              className="profile-input"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <button className="save-button">Save Changes</button>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
