import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  VKShareButton,
  PinterestShareButton
} from 'react-share';

export default class ReactShare extends React.Component {
  render() {
    return (
      <div className="share-buttons">
        <h4>{window.locale == "ru" ? "Поделиться: ": "Share: "}</h4>
        <TelegramShareButton url={location.origin + location.pathname}>TG</TelegramShareButton>
        <VKShareButton url={location.origin + location.pathname}>VK</VKShareButton>
        <FacebookShareButton url={location.origin + location.pathname}>FB</FacebookShareButton>
        <TwitterShareButton url={location.origin + location.pathname}>TW</TwitterShareButton>
      </div>
    );
  }
}
