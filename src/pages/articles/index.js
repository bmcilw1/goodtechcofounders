import React from "react";

import Layout from "../../components/Layout";
import ArticlesRoll from "../../components/ArticlesRoll";

export default class ArticleIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="title">Articles</div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <ArticlesRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
