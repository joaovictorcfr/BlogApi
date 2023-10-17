import styles from "./EditPost.module.css";
import Nav from "../../Components/Layout/Nav/Nav";
import Footer from "../../Components/Layout/Footer/Footer";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../Services/Api/Api";

function EditPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  const { id } = useParams();

  const getPost = async () => {
    const response = await Api.get(`/posts/${id}`);
    const data = response.data;
    setTitle(data.title);
    setBody(data.body);
  };

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await Api.put(`/posts/${id}`, {
      body: post,
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className={styles.edit_post}>
      <Nav />
      <div className={styles.container_edit}>
        <h2>Editando: {title}</h2>
      </div>
      <form className={styles.formin} onSubmit={(e) => editPost(e)}>
        <div className={styles.form_control}>
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
            placeholder="Digite o titulo"
          />
          <label htmlFor="body">Conteudo:</label>
          <textarea
            name="body"
            placeholder="Digite o conteudo"
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
          ></textarea>
          <div className={styles.btn}>
          <input type="submit" value="Concluir"/>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default EditPost;
