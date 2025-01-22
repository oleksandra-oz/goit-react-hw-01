import React from 'react';
import clsx from 'clsx';
import css from '../FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p
        className={clsx(
          css.friendStatus,
          isOnline && css.isOnline,
          !isOnline && css.isOffline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
        </div>

    );

};

export default FriendListItem;