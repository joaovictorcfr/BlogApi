import Nav from "../../Components/Layout/Nav/Nav";
import Footer from "../../Components/Layout/Footer/Footer";
import styles from "./IdPosts.module.css";
import Api from "../../Services/Api/Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function IdPosts() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await Api.get(`/posts/${id}`);
      console.log(id);

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container_id}>
      <Nav />
      <div className={styles.post_id}>
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className={styles.post}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
}

export default IdPosts;
