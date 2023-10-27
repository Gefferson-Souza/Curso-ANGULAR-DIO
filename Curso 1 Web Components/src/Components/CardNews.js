class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.className = "card";

    const cardLeft = document.createElement("div");
    cardLeft.className = "card-left";

    const author = document.createElement("span");
    author.className = "author";
    author.textContent = `By ${this.getAttribute("author") || "Anonymous"}`;

    const linkTitle = document.createElement("a");
    linkTitle.href = `${this.getAttribute("link-title")}`;
    linkTitle.textContent = `${this.getAttribute("title") || "No title"}`;

    const newsContent = document.createElement("p");
    newsContent.textContent = `${
      this.getAttribute("news-content") || "Has no content"
    }`;

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.className = "card-right";

    const img = document.createElement("img");
    img.src = `${this.getAttribute("photo") || "src/assets/images.jpeg"}`;

    cardRight.appendChild(img);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    
    .card {
        grid-column: 1;
    }
    
    .card-left {
        grid-column: 2;
    }
    `
    return style;
  }
}

customElements.define("card-news", CardNews);
