const DOM_articles = document.querySelectorAll('.random_box_article');

const DOM_figures = document.querySelectorAll('.random_imgBox_figure');
const DOM_figuresText = document.querySelectorAll('.random_imgBox_figure_figcaption');
const DOM_exitCTA = document.querySelector('.cross');

for (let i = 0; i < DOM_articles.length; i++) {
  const article = DOM_articles[i];
  const figure = DOM_figures[i];
  const figureText = DOM_figuresText[i];
  article.addEventListener('click', () => {
    figure.classList.add('scaled');
    figureText.classList.add('tracking-in-contract');
    DOM_exitCTA.classList.add('loader_active');
  });
  DOM_exitCTA.addEventListener('click', () => {
    figure.classList.remove('scaled');
    figureText.classList.remove('tracking-in-contract');
    DOM_exitCTA.classList.remove('loader_active');
  });
}
