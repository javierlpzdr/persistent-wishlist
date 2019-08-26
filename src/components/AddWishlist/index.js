import AddWishlistContainer from "./AddWishlist";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as wishlistActions from "../../actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(wishlistActions, dispatch)
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddWishlistContainer);
