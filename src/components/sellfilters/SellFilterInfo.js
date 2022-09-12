import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Store } from '../../Store';

const SellFilterInfo = ({ user }) => {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wish } = state;
  
  const existUser = localStorage.getItem("userInfo");

    const handlerFollow = () => {
      if (!existUser) {
        window.alert("Sorry! You must login.");
      } else {
        
        //If there is a user I am already following (loaclStorage), his is, from db
        const existItem = wish.wishItems.find((x) => x._id === user._id);
        const quantity = existItem ? existItem.quantity : 1;
        if (existItem) {
          window.alert("Sorry! You are already following this uder!");
          return;
        }
        ctxDispatch({
          type: "WISH_ADD_ITEM",
          payload: { ...user, quantity },
        });
      }
  };
  
  const handlerUnFollow = (user) => {
    ctxDispatch({
      type: "WISH_REMOVE_ITEM",
      payload: user ,
    });
  }

    //if exists seller
    const sellerExists = wish.wishItems.find((x) => x._id === user._id);

  return (
    <div className="sell-fill-group" key={user._id}>
      <div className="sell-fill-header">
        <img src={user.image} alt={user.name} />
      </div>
      <div className="sell-fill-body">
        <Link to={`../seller/${user._id}`}>
          {user.name} <FontAwesomeIcon icon={faEye} />
        </Link>
        {existUser && sellerExists ? (
          <span onClick={() =>handlerUnFollow(user)} className="unfollow">
            Unfollow
          </span>
        ) : (
          <span key={user._id} onClick={handlerFollow} className="follow">
            Follow
          </span>
        )}
        <span className="date">
          Member Since: {user.createdAt.slice(0, 10)}
        </span>
      </div>
    </div>
  );
};

export default SellFilterInfo
