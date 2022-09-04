import React, { useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentActivity } from "../actions/activityPage";
import ActivityPublished from "./ActivityPublished";

const ActivityPage = ({
  activity: { activityPage, loading },
  getCurrentActivity,
}) => {
  useEffect(() => {
    getCurrentActivity();
  }, []);
  return (
    <div>
    {loading?<h1>Loading</h1>:<h1>react</h1>}
    </div>
  );
};
ActivityPage.propTypes = {
  activity: propTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  activity: state.activityPage,
});

export default connect(mapStateToProps, { getCurrentActivity })(ActivityPage);
