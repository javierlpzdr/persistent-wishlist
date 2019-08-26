import React from "react";

const WishlistList = ({ state, actions }) => {
  return (
    <ul>
      {state.wishlists &&
        state.wishlists.map((wishlist, i) => (
          <li key={i}>
            <Wishlist
              wishlist={wishlist}
              onSubmit={data => {
                actions.updateWishlistAsync(data, i);
              }}
            />
          </li>
        ))}
    </ul>
  );
};

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      name: "",
      products: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getState = this.getState.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.wishlist);
  }

  componentWillReceiveProps(prevProps) {
    this.setState(this.props.wishlist);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  getState() {
    return this.state;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.getState);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input hidden name="id" value={this.state.id} />
        <label>
          name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default WishlistList;
