const ArticleDeatils = ({ article }) => {
  return (
    <section className="single_article">
      <p>{article.title}</p>
      <img src={article.article_img_url} alt="article" />
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <p>Posted on: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
    </section>
  );
};

export default ArticleDeatils;
