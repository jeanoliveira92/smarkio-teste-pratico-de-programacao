import { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import api from '../services/api';

interface HomeProps {
  comments: [{
    id: number,
    text: string,
  }]
}

export default function Home(props: HomeProps) {
  const [comments, setComments] = useState(props.comments);

  const handlePronunciation = async (e) => {
    var audio = new Audio(`http://localhost:4000/pronunciation/${e.target.id}`);
    audio.play();
  }

  //useEffect(() => {

  //  }), []

  return (
    <div className="container">
      <Head>
        <title >Index | Teste prático de programação</title>
      </Head>

      <section className="">
        <span>Comentário</span>
        <textarea>
          { }
        </textarea>
        <button type="button">Cadastrar</button>
      </section>
      <section className="">
        <span>Comentários</span>

        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <button type="button" onClick={handlePronunciation} id={(comment.id).toString()}>Ouvir</button>
          </div>
        ))}


      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await api.get('/comment');

  return {
    props: {
      comments: data.data,
    }
  }
}