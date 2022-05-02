
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
                articles.map( article => {
                  return (
                  <Card
                    titulo={article.title}
                    resumo={article.description}
                    link={article.url}
                    image={article.urlToImage}
                  />)
                })
              }
        <Card
          titulo="Teste"
          resumo="sfhjgbsyu usgbfuysgbfyu fusgbfuy"
          link="teste"
          image="https://rollingstone.uol.com.br/media/_versions/michael-scott-reprod-comedy-central_widelg.jpg"
        />
      </Wrapper>
        </div>
    );
}

export default Home;