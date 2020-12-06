import React, { Component } from "react";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure,
  Panel
} from "react-instantsearch-dom";
import "./App.css";
import Stats from "./Stats.js";
import RangeSlider from "./RangeSlider.js";
import Content from "./Content";
import Facet from "./Facet";

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="45MY93DYFP"
        apiKey="c55fff8b800dae71574904455c1f3ef1"
        indexName="dev_mall"
      >
        <header>
          <h1>Dubai Mall</h1>
        </header>
        <main className="search-container">
          <Configure
            hitsPerPage={5}
            attributesToSnippet={["description:24"]}
            snippetEllipsisText=" [...]"
          />
          <div className="right-panel">
            <div id="hits">
              <Content />
            </div>
            <div id="searchbox">
              <SearchBox
                translations={{ placeholder: "Search for products" }}
              />
            </div>
            <div id="stats">
              <Stats />
            </div>
            <div id="pagination">
              <Pagination />
            </div>
          </div>
          <div className="left-panel">
            <div id="categories">
              <Panel header="Categories">
                <Facet attribute="categories" />
              </Panel>
            </div>
            <div id="brands">
              <Panel header="Origins">
                <Facet
                  attribute="origin"
                  searchable={true}
                  translations={{ placeholder: "Search for other..." }}
                />
              </Panel>
            </div>
            <div id="price">
              <Panel header="Price">
                <RangeSlider attribute="currentPrice" />
              </Panel>
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
