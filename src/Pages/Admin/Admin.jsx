import styles from "./Admin.module.css";
import Api from "../../Services/Api/Api";
import { useEffect, useState } from "react";
import { Link, useFetcher } from "react-router-dom";
import Nav from "../../Components/Layout/Nav/Nav";
import Footer from "../../Components/Layout/Footer/Footer";

function Admin() {
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

  const deletePost = async (id) => {
    await Api.delete(`/posts/${id}`);

    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.container_admin}>
      <Nav />
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <h2>{post.title}</h2>
            <div className={styles.actions}>
              <Link className={styles.btn_edit} to={`/editpost/${post.id}`}>Editar</Link>
              <button
                className={styles.btn}
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
}

export default Admin;
