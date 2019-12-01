import React from "react"

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStarEmpty: false};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            isStarEmpty: !state.isStarEmpty
        }))
    }

    render() {
        return <span style={{cursor: "pointer"}} onClick={this.handleClick}>
                {this.state.isStarEmpty ? <>&#x2606;</> : <>&#x2605;</>}
            </span>
    }
}

export default Rating
