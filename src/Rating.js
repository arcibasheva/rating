import React from "react"
const R = require("ramda")

class Rating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 2
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(rate) {
        if (this.state.rating === rate) {
            rate = rate - 1
        }
        this.setState({
                rating: rate
            }
        )
    }

    render() {
        const emptyStar = <>&#x2606;</>
        const filledStar = <>&#x2605;</>
        const stars = R.repeat(emptyStar, 3)
        let rating = stars.map((star, idx) => <span key={idx} style={{cursor: "pointer"}} onClick={() => this.handleClick(idx + 1)}>{this.state.rating > idx ? filledStar : star}</span>)
        return <div>{rating}</div>
    }
}

export default Rating
