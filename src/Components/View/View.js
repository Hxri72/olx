import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../Store/firebaseContext';
import { postContext } from '../../Store/postContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(postContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
      const {userId} = postDetails
      console.log(userId)
      firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
        res.forEach(doc => {
            setUserDetails(doc.data())
        })
      })
  })

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt="photo"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller Details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
