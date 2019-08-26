import WishlistListContainer from "./Wishlists";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as wishlistActions from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(wishlistActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishlistListContainer);
