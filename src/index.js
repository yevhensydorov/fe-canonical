import moment from "moment";
import "./styles.css";

const URL_TO_FETCH =
  "https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?per_page=3&page=1&_embed=True";

function getFromAPI(url, callback) {
  var obj;
  fetch(url)
    .then(res => res.json())
    .then(data => (obj = data))
    .then(() => callback(obj));
}

getFromAPI(URL_TO_FETCH, generateHtml);

function generateHtml(arrOfObjs) {
  const rootElement = document.getElementById("app");

  //Create section with classnames articles and append to app class
  var articleSection = document.createElement("section");
  articleSection.className = "articles";
  rootElement.appendChild(articleSection);

  //Create a row, append row to the articleSection
  var row = document.createElement("div");
  row.className = "row";
  articleSection.appendChild(row);

  //Create 3 columns with vanilla framework classes
  arrOfObjs.forEach(el => {
    //Create an article tag with col-4 classes
    var article = document.createElement("article");
    article.className = "col-4 u-equal-height";

    //Create a container inside an article
    var articleContainer = document.createElement("div");
    articleContainer.className = "article-container";
    article.appendChild(articleContainer);

    //Create a header, content and footer parts of article card
    var articleHeader = document.createElement("div");
    var articleContent = document.createElement("div");
    var articleFooter = document.createElement("div");

    articleHeader.className = "article-header";
    articleContent.className = "article-content";
    articleFooter.className = "article-footer";

    articleContainer.appendChild(articleHeader);
    articleContainer.appendChild(articleContent);
    articleContainer.appendChild(articleFooter);

    //Fill articleHeader with content
    var articleHeaderTitle = document.createElement("h2");
    var titleText = document.createTextNode("Cloud and server");
    articleHeaderTitle.appendChild(titleText);
    articleHeader.appendChild(articleHeaderTitle);

    //FILL articleContent WITH CONTENT

    // Create a wrapper for image
    var imageWrapper = document.createElement("div");
    imageWrapper.className = "image-wrapper";
    articleContent.appendChild(imageWrapper);

    //image content
    var imageLink = el._embedded["wp:featuredmedia"][0].source_url;
    var altText = el._embedded["wp:featuredmedia"][0].alt_text;
    var articleContentImage = document.createElement("img");
    articleContentImage.setAttribute("src", imageLink);
    articleContentImage.setAttribute("alt", altText);
    imageWrapper.appendChild(articleContentImage);

    //title content
    var articleContentTitle = document.createElement("h3");
    var articleContentTitleText = document.createTextNode(el.title.rendered);
    articleContentTitle.appendChild(articleContentTitleText);
    articleContent.appendChild(articleContentTitle);

    //author content
    var articleContentDescription = document.createElement("p");

    var articleAuthorNameText = document.createTextNode(
      el._embedded.author[0].name
    );
    var articleDateText = document.createTextNode(
      moment(el.date).format("D MMMM YYYY")
    );

    var articleContentAuthorNameTag = document.createElement("a");
    articleContentAuthorNameTag.setAttribute("href", "#");

    var articleContentAuthorDateTag = document.createElement("span");

    articleContentAuthorNameTag.appendChild(articleAuthorNameText);
    articleContentAuthorDateTag.appendChild(articleDateText);

    articleContentDescription.appendChild(document.createTextNode("By "));
    articleContentDescription.appendChild(articleContentAuthorNameTag);
    articleContentDescription.appendChild(document.createTextNode(" on "));
    articleContentDescription.appendChild(articleContentAuthorDateTag);

    articleContent.appendChild(articleContentDescription);

    //Fill articleHeader with content
    var articleFooterTitle = document.createElement("p");
    var footerText = document.createTextNode("Article");
    articleFooterTitle.appendChild(footerText);
    articleFooter.appendChild(articleFooterTitle);

    row.appendChild(article);
  });
}
