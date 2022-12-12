import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  const  [post, setPost] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const {id} = useParams();

  const postId = location.pathname.split("/")[4];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${id}`);
        setPost(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${id}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
        <img src={`${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img
            src={post.userImg}
            alt=""
          />}
          <div className="info">
            <span></span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.id == post.uid && (
            <div className="edit">
              <Link to={`/write?edit=${post.id}`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{getText(post.title)}</h1>
        <p>{getText(post.desc)}</p>
        
        </div>
        
      <Menu cat={post.cat}/>
    </div>
  );
};

export default Single;
