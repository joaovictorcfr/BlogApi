import Footer from "../../Components/Layout/Footer/Footer";
import Nav from "../../Components/Layout/Nav/Nav";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../Services/Api/Api"

function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await Api.get("/posts");

      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.container_home}>
      <Nav />
      <h1>Home</h1>
      <div className={styles.container_title}>
        <h2>Ultimos posts</h2>
      </div>
      {posts.length === 0 ? (
        <p> Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className={styles.posts} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/idposts/${post.id}`} className={styles.btn}>
              {" "}
              Ler mais
            </Link>
          </div>
        ))
      )}
      <Footer/>
    </div>
  );
}

export default Home;