import React, { Component } from 'react'
import Slider from 'react-slick'
import ListCategory from './ListCategory'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
    return (
      <div>
        <Slider {...settings}>
          <ListCategory />
        </Slider>
      </div>
    )
  }
}
