import React from 'react'
import { useEffect, useState } from "react";
import ads from '../img/add.jpg'
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/posts${cat}`);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [cat]);

/*const posts = [
    {
        id: 1,
        titel: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi iusto pariatur dolorum fugiat repudiandae. Eaque non autem deserunt rem, inventore odio error odit illum assumenda sequi at! Vero asperiores consectetur ad neque quidem porro atque sequi debitis numquam sit tempora aut, unde eaque quae quas ab quos ipsam voluptatibus!",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
    },
    {
        id: 2,
        titel: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi iusto pariatur dolorum fugiat repudiandae. Eaque non autem deserunt rem, inventore odio error odit illum assumenda sequi at! Vero asperiores consectetur ad neque quidem porro atque sequi debitis numquam sit tempora aut, unde eaque quae quas ab quos ipsam voluptatibus!",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
    },
    {
        id: 3,
        titel: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi iusto pariatur dolorum fugiat repudiandae. Eaque non autem deserunt rem, inventore odio error odit illum assumenda sequi at! Vero asperiores consectetur ad neque quidem porro atque sequi debitis numquam sit tempora aut, unde eaque quae quas ab quos ipsam voluptatibus!",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
    },
    {
        id: 4,
        titel: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi iusto pariatur dolorum fugiat repudiandae. Eaque non autem deserunt rem, inventore odio error odit illum assumenda sequi at! Vero asperiores consectetur ad neque quidem porro atque sequi debitis numquam sit tempora aut, unde eaque quae quas ab quos ipsam voluptatibus!",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
    }
]*/

const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="home">
      <div className="ads">
        <img src={ads} alt="" />
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
