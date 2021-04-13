import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import api, { apiAddr } from '../services/api';

interface Comment {
  id: number,
  text: string
}

export default function Home() {
  const [comments, setComments] = useState([]);
  const [textArea, setTextArea] = useState("");
  const [loader, setLoader] = useState(false);

  const handleChangeTextArea = (e) => {
    setTextArea(e.target.value);
  }

  const handlePronunciation = async (e) => {

    setLoader(true);
    var audio = new Audio(`${apiAddr}/pronunciation/${e.target.id}`);

    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        setLoader(false);
      })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }

  }

  const handleRegisterComment = async () => {
    if (textArea === "") return;

    setLoader(true);
    api.post("/comment", { text: textArea }).then(e => {
      setTextArea("");
      getComments();

      setLoader(false);
    })
  }

  const getComments = async () => {
    setLoader(true);

    const comments = await api.get('/comment');
    setComments(comments.data);

    setLoader(false);
  }

  useEffect(() => {
    getComments();
  }, [])

  return (
    <div className={`container ${loader ? "loading" : ""}`}>
      <div className="overlay">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 40 40">
          <path fill="#9855D4" d="M31.574.002h-12.69a.424.424 0 0 0-.424.424v10.201a5.535 5.535 0 0 0-2.206-.458H5.577A5.584 5.584 0 0 0 0 15.746v5.389a5.582 5.582 0 0 0 5.577 5.575h2.146l2.803 5.07a.416.416 0 0 0 .369.218.45.45 0 0 0 .206-.05.427.427 0 0 0 .168-.577L8.217 25.86H5.578a4.732 4.732 0 0 1-4.727-4.727v-5.382a4.732 4.732 0 0 1 4.727-4.727h10.677a4.732 4.732 0 0 1 4.727 4.727v5.389a4.731 4.731 0 0 1-4.727 4.727h-4.673a.423.423 0 1 0 0 .846h4.673a5.583 5.583 0 0 0 5.577-5.575v-4.717h9.745a.421.421 0 0 0 .422-.424V.427a.423.423 0 0 0-.425-.425zm-.42 15.568h-9.33a5.576 5.576 0 0 0-2.514-4.482V.85h11.844v14.72zm-1.355 5.832v.005a.423.423 0 0 0-.424.424 5.434 5.434 0 0 1-5.427 5.427h-1.442l1.237-1.237a.42.42 0 0 0 0-.6.42.42 0 0 0-.6 0l-1.961 1.958a.392.392 0 0 0-.117.267c0 .012-.007.023-.007.037 0 .012.007.022.007.034a.377.377 0 0 0 .119.267l1.961 1.958c.08.084.189.124.298.124s.218-.042.302-.124a.427.427 0 0 0 0-.6l-1.237-1.237h1.442a6.284 6.284 0 0 0 6.276-6.277.427.427 0 0 0-.427-.426z" />
          <circle fill="#9855D4" cx="15.273" cy="18.446" r="1.063" />
          <circle fill="#9855D4" cx="10.915" cy="18.446" r="1.063" />
          <circle fill="#9855D4" cx="6.557" cy="18.446" r="1.063" />
          <path stroke="1" fill="#9855D4" d="M21.405 12.56h8.084a.423.423 0 0 0 .424-.424.423.423 0 0 0-.424-.424h-8.084a.423.423 0 0 0-.424.424c0 .234.188.424.424.424zm0-3.926v.002h8.084a.423.423 0 0 0 .424-.424.423.423 0 0 0-.424-.424h-8.084a.423.423 0 1 0 0 .846zm0-3.922v.002h8.084c.235 0 .424-.189.424-.424s-.189-.424-.424-.424h-8.084a.423.423 0 1 0 0 .846z" />
        </svg>
        <span>Carregando...</span>
      </div>
      <Head>
        <title >Index | Teste prático de programação</title>
      </Head>

      <section className="">
        <span>Comentário</span>
        <textarea value={textArea} onChange={handleChangeTextArea} />
        <button type="button" onClick={handleRegisterComment}>Cadastrar</button>
      </section>
      <section className="">
        <span>Comentários</span>

        {Object.keys(comments).length > 0 && comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <button type="button" onClick={handlePronunciation} id={(comment.id).toString()}>Ouvir</button>
          </div>
        ))}


      </section>
    </div>
  )
}