import React from 'react';

export default class LoadMore extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      isLastPage: props.isLastPage,
      itemsType: 'post',
      page: 1,
      isLoading: false,
    };
  }

  componentDidMount() {
    document.lazyLoadInstance.update();
    const urlString = window.location.href;
    const url = new URL(urlString);
    const page = url.searchParams.get("page");
    if (page) {
      this.setState({
        page: parseInt(page)
      });
    }
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  getData(page) {
    const that = this;

    let params = new URLSearchParams(document.location.search.substring(1));
    if (params.get("page")) {
      params.delete("page");
      params.set("page", page);
    } else {
      params.set("page", page);
    }

    that.setState({
      isLoading: true
    });

    return fetch(window.location.origin + window.location.pathname + ".json?" + params.toString())
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const { items, items_type, is_last_page } = myJson;
      history.pushState({}, '', window.location.origin + window.location.pathname + "?" + params.toString());
      that.setState({
        items: that.state.items.concat(items),
        isLastPage: is_last_page,
        itemsType: items_type,
        page: that.state.page + 1,
        isLoading: false
      });
    });
  }

  render() {
    const { items, itemsType, isLastPage, page, isLoading } = this.state;
    return (
      <div className="grid-list">
        { items.length > 0 && page > 1
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
                        <img className="lz-img" src={item.cover_small_url} data-src={item.cover_medium_url}/>
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
        { !isLastPage
          ?
          <div className="load-more-wrapper">
            <div
              onClick={() => this.getData(page + 1)}
              className="button-load-more button">
              {window.locale == "ru" ? "Показать еще": "Load more"}
            </div>
          </div>
          :
          null
        }
      </div>
    );
  }
}
