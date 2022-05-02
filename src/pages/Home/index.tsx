
import { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Wrapper } from "./styles";
import { getTopHeadlines } from "../../services/newsApi/noticias"


interface Article {
  title: string;
  url: string;
  description: string;
  urlToImage: string;
}

function Home() {

  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const getNoticias = async () => {
      const response = await getTopHeadlines();

      setArticles(response.articles);
    }

    getNoticias();
  },[]);

    return (
        <div>
            <Header />
            <Wrapper>
              {
                articles.map( (article, index) => {
                  return (
                  <Card
                    titulo={article.title}
                    resumo={article.description}
                    link={article.url}
                    image={article.urlToImage !== null ? article.urlToImage : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="}
                    key={index}
                  />)
                })
              }      
      </Wrapper>
        </div>
    );
}

export default Home;