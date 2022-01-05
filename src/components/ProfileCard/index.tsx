import './styles.css';

type Props = {
  avatar_url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
};

const ProfileCard = ({
  avatar_url,
  html_url,
  followers,
  location,
  name,
}: Props) => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src={avatar_url} alt="avatar" />
      </div>

      <div className="profile-container">
        <h4>Informações</h4>
        <div className="profile-github-link">
          <h6>Perfil:</h6>
          <a
            href={html_url}
            className="link-primary"
            target="_blank"
            rel="noreferrer"
          >
            {html_url}
          </a>
        </div>
        <div className="profile-item">
          <h6>Seguidores:</h6>
          <p>{followers}</p>
        </div>
        <div className="profile-item">
          <h6>Localidade:</h6>
          <p>{location}</p>
        </div>
        <div className="profile-item">
          <h6>Nome:</h6>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
