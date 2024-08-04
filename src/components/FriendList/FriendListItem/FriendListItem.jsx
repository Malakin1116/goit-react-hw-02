
import css from "./FriendListItem.module.css"; 

export default function FriendListItem({ friend }) {
    const { avatar, name, isOnline } = friend;
    return (
        <div className={css.friendCard}>
            <img src={avatar} alt="Avatar" className={css.friendAvatar} />
            <p className={css.friendName}>{name}</p>
            <p className={`${css.friendStatus} ${isOnline ? '' : css.offline}`}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}
