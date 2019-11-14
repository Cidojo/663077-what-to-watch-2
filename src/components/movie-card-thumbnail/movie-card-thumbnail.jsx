import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ThumbnailPlayer} from '../thumbnail-player/thumbnail-player.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

class MovieCardThumbnail extends React.PureComponent {
  constructor(props) {
    super(props);

    const {card, onThumbnailMouseEnter} = props;

    this.mouseEnterSubscriptions = [onThumbnailMouseEnter.bind(null, card)];
    this.mouseLeaveSubscriptions = [];

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.subscribeMouseEnter = this.subscribeMouseEnter.bind(this);
    this.subscribeMouseLeave = this.subscribeMouseLeave.bind(this);
  }

  subscribeMouseEnter(cb) {
    this.mouseEnterSubscriptions.push(cb);
  }

  subscribeMouseLeave(cb) {
    this.mouseLeaveSubscriptions.push(cb);
  }

  handleMouseEnter() {
    this.mouseEnterSubscriptions.forEach((cb) => {
      cb();
    });
  }

  handleMouseLeave() {
    this.mouseLeaveSubscriptions.forEach((cb) => {
      cb();
    });
  }

  render() {
    const {card, onThumbnailClick} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="small-movie-card__image">
          <ThumbnailPlayer
            src={card.src}
            posterSrc={card.posterSrc}
            subscribeMouseLeave={this.subscribeMouseLeave}
            subscribeMouseEnter={this.subscribeMouseEnter}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href={card.link}
            onClick={onThumbnailClick}
          >
            {card.title}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCardThumbnail.propTypes = {
  card: movieCardPropTypes,
  onThumbnailClick: PropTypes.func,
  onThumbnailMouseEnter: PropTypes.func
};

export {MovieCardThumbnail};
