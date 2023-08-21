import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsTech - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="mytitle"
              description="My description"
              imageUrl="https://i.cbc.ca/1.6940729.1692386670!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/vr-mode-of-theatrical-production-animate.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="My description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="My description" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
