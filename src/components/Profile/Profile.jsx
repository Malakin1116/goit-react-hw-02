import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.profile}>
          <div className={css.avatarContainer}>
            <img src={image} alt="User avatar" className={css.profileAvatar}/>
          </div>
          <div className={css.profileInfo}>
            <h1 className={css.profileName}>{name}</h1>
            <p className={css.profileTag}>@{tag}</p>
            <p className={css.profileLocation}>{location}</p>
          </div>
          <ul className={css.profileStats}>
            <li className={css.statsItem}>
              <span>Followers</span>
              <span>{stats.followers}</span>
            </li>
            <li className={css.statsItem}>
              <span>Views</span>
              <span>{stats.views}</span>
            </li>
            <li className={css.statsItem}>
              <span>Likes</span>
              <span>{stats.likes}</span>
            </li>
          </ul>
        </div>
      );
    }