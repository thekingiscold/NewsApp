import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "cbc-news",
        name: "CBC News",
      },
      author: "CBC News",
      title:
        "Canadian play uses VR to make climate change 'physically real' | CBC News",
      description:
        "Animate, a play by Chris Salter, uses the latest VR technology to bring to life a Canadian short story that explores the connections between people and the climate transformation now underway.",
      url: "http://www.cbc.ca/news/entertainment/animate-virtual-reality-climate-change-1.6940400",
      urlToImage:
        "https://i.cbc.ca/1.6940729.1692386670!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/vr-mode-of-theatrical-production-animate.jpg",
      publishedAt: "2023-08-20T08:07:21.5827594Z",
      content:
        "In an abandoned tobacco warehouse on the edge of the ancient Italian town of Paestum, south of Naples, a dozen or so spectators sit on upturned logs on what looks like a typical Canadian campsite.\r\nT… [+6689 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Lorenzo Franceschi-Bicchierai",
      title:
        "Cellebrite asks cops to keep its phone hacking tech ‘hush hush’ | TechCrunch",
      description:
        "For years, cops and other government authorities all over the world have been using phone hacking technology provided by Cellebrite to unlock phones and In a leaked video, a Cellebrite employee urges law enforcement customers to keep their use of its phone ha…",
      url: "https://techcrunch.com/2023/08/19/cellebrite-asks-cops-to-keep-its-phone-hacking-tech-hush-hush/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/08/cellebrite.jpg?resize=1200,800",
      publishedAt: "2023-08-18T16:36:27Z",
      content:
        "For years, cops and other government authorities all over the world have been using phone hacking technology provided by Cellebrite to unlock phones and obtain the data within. And the company has be… [+9905 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Wired",
      title:
        "A Letter Prompted Talk of AI Doomsday. Many Who Signed Weren't Actually AI Doomers",
      description:
        "In March a viral letter called for a pause on AI development, warning that algorithms could outsmart humanity—but many experts who signed on did not believe the technology poses an existential risk.",
      url: "https://www.wired.com/story/letter-prompted-talk-of-ai-doomsday-many-who-signed-werent-actually-doomers",
      urlToImage:
        "https://media.wired.com/photos/64dd7458984161b7583de55c/191:100/w_1280,c_limit/Pause-AI-Signatories-Weren't-Actually-AI-Doomsdayers-Business-1437113509.jpg",
      publishedAt: "2023-08-17T16:00:00Z",
      content:
        "This March, nearly 35,000 AI researchers, technologists, entrepreneurs, and concerned citizens signed an open letter from the nonprofit Future of Life Institute that called for a pause on AI developm… [+2508 chars]",
    },
    {
      source: {
        id: "recode",
        name: "Recode",
      },
      author: "Peter Kafka",
      title: "Black Mirror creator Charlie Brooker on AI, tech, and creativity",
      description:
        "An interview with Black Mirror creator Charlie Brooker about his relationship with Silicon Valley, consumer technology, and his fears about AI-written television.",
      url: "https://www.vox.com/technology/2023/8/4/23819299/black-mirror-charlie-brooker-interview-ai-peter-kafka-media-column",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/wxfR8oXT4g1BFUqLfjUERqQRoWw=/165x0:3819x1913/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24828765/Black_Mirror_n_S6_E1_00_34_36_03_copy.png",
      publishedAt: "2023-08-04T11:30:00Z",
      content:
        "Its tough to remember, but in 2011, lots of us felt pretty good about our Silicon Valley overlords. The iPhone was going fully mainstream, Facebook felt like a fun place to share ideas, and Twitter w… [+15553 chars]",
    },
    {
      source: {
        id: "newsweek",
        name: "Newsweek",
      },
      author: "Mark Davis",
      title: "Newsweek",
      description:
        "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
      url: "https://www.newsweek.com/",
      urlToImage:
        "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
      publishedAt: "2023-03-01T12:07:28.8517009Z",
      content: null,
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c6d28a85ae134683a77937ec78f863f8&page=1&pageSize=12";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c6d28a85ae134683a77937ec78f863f8&page=${
        this.state.page + 1
      }&pageSize=12`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c6d28a85ae134683a77937ec78f863f8&page=${
      this.state.page - 1
    }&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsTech - Top Headlines</h2>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between my-3">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              &rarr; Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
