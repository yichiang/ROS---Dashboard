import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

export class RatingBar extends React.Component {

  render() {
    let stars = [1,1,1,1,1];
    console.log("stars", stars);
    return (
        <p className={this.props.ratingP}>
        {
          stars.map((x,index)=>
          <span className={ (this.props.rating > index)? 'glyphicon glyphicon-star' :'glyphicon glyphicon-star-empty'}></span>
        )}
      </p>

    )
  }
}

export default RatingBar;
