import './styles.css';

import ProfileCard from 'components/ProfileCard';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  user: string;
};

type Profile = {
  avatar_url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
};

const Gitfinder = () => {
  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="main-container">
      <div className="git-search-container">
        <h1>Encontre um perfil GitHub</h1>
        <div className="container search-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="user"
                className="search-input"
                placeholder="Informe o usuário (user login)"
                value={formData.user}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </div>

      {profile && (
        <>
          <div className="result-search-container align-items-center">
            <ProfileCard avatar_url={profile.avatar_url}
                            html_url={profile.html_url}
                            followers={profile.followers}
                            location={profile.location}
                            name={profile.name} />
          </div>
        </>
      )}
    </div>
  );
};

export default Gitfinder;
