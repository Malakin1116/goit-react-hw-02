import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
    return (
      <ul className={css.list}>
        {friends.map((friend, index) => (
          <li key={index}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    );
  }
