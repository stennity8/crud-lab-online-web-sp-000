import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const { addReview, restaurant, deleteReview, reviews } = this.props
    console.log(this.props)
    return (
      < div >
        {/* <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews deleteReview={this.props.deleteReview} reviews={this.props.reviews} restaurantId={this.props.restaurant.id} /> */}
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews deleteReview={deleteReview} reviews={reviews} restaurantId={restaurant.id} />
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: "ADD_REVIEW", review }),
    deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
