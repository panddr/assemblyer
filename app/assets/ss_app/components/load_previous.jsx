import React from 'react';

export default class LoadPrevious extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      itemsType: 'post',
      page: 1,
      itemtoScroll: null,
      isLoading: false,
      maxPerPage: 18,
      firstLoad: true,
    };
  }

  componentDidMount() {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const page = url.searchParams.get("page");
    if (page) {
      this.setState({
        page: parseInt(page)
      });
    }
  }

  getData(page) {
    const that = this;

    this.setState({
      isLoading: true,
    });

    let params = new URLSearchParams(document.location.search.substring(1));
    if (params.get("page")) {
      params.delete("page");
      params.set("page", page);
    } else {
      params.set("page", page);
    }


    return fetch(window.location.origin + window.location.pathname + ".json?" + params.toString())
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const { items, items_type } = myJson;
      history.pushState({}, '', window.location.origin + window.location.pathname + "?" + params.toString());
      that.setState({
        items: items.concat(that.state.items),
        itemsType: items_type,
        page: that.state.page - 1,
        itemtoScroll: items[items.length - 1].id - 1,
        isLoading: false,
      });
    })
    .then(() => {
      let itemLast;
      if (that.state.firstLoad) {
        itemLast = document.querySelectorAll('.grid-list')[1].querySelectorAll('.item')[0];
      } else {
        itemLast = document.querySelectorAll('#load-previous .grid-list .item')[that.state.maxPerPage];
      }
      scrollIt(itemLast, 600, "easeOutQuad", 60);
      console.log(itemLast, that.state.firstLoad)
      that.setState({
        firstLoad: false
      });
    });
  }

  render() {
    const { items, itemsType, page, isLoading } = this.state;
    return (
      <div>
        { page > 1
          ?
          <div className="load-previous-wrapper">
            <div
              onClick={() => this.getData(page - 1)}
              className="button-load-more button-load-previous button">
              {window.locale == "ru" ? "Показать предыдущие": "Load previous"}
            </div>
          </div>
          :
          null
        }
        <div className="grid-list">
        { items.length > 0
          ?
          <div className="wrapper">
            { items.map((item, i) =>
              <div className={item.cover_ratio && item.cover_ratio < 1 ? "item vertical" : "item"} id={item.id} key={i}>
                { itemsType == "post"
                  ?
                  <React.Fragment>
                    {window.locale == "ru" ? <a className="category" href={"/categories/" + item.category_id}>{item.category}</a> : <a className="category" href={"/en/categories/" + item.category_id}>{item.category}</a>}
                  </React.Fragment>
                  :
                  <div className="date">{item.date}</div>
                }
                <a className="info" href={window.locale == "ru" ? "/posts/" + item.id : "/en/posts/" + item.id}>
                  <div className="image-container">
                    <div className="image-wrapper" style={{paddingBottom: 1 / item.cover_ratio * 100 + "%"}}>
                      <div className="image">
                        <img src={item.cover_medium_url} />
                      </div>
                    </div>
                  </div>
                  {item.display_description
                    ?
                    <React.Fragment>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </React.Fragment>
                    :
                    <h2 className="description-hidden">{item.title}</h2>
                  }
                </a>
              </div>
            )}
          </div>
          :
          null
        }
        </div>
      </div>
    );
  }
}
