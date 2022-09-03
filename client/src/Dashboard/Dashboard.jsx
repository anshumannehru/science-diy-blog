import React,{useEffect} from "react";
import { Button, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import LogoutIcon from "@mui/icons-material/Logout";
import PostAddIcon from "@mui/icons-material/PostAdd";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { logout,login,loadUser } from "../actions/auth";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import store from "../store";
const Dashboard = ({ auth: { admin,loading }, logout }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const currentTime = new Date();
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20, marginTop: 50 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ bgcolor: deepOrange[500] }}>{admin?.name[0]}</Avatar>
        <h4
          style={{
            marginLeft: 20,
            color: "white",
            marginTop: 10,
            fontWeight: "lighter",
          }}
        >
          {currentTime.getHours() < 12
            ? "Good Morning"
            : currentTime.getHours() < 17
            ? "Good Afternoon"
            : "Good Evening"}{" "}
          {admin && admin.name}
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 15,
          // flexWrap: "wrap",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <PostAddIcon style={{ color: "white" }} />
          <Button onClick={()=>navigate('/activity-page')}>Post Activity Content</Button>
        </div>
        <div>
          <LabelImportantIcon style={{ color: "white" }} />
          <Button>Your Published Activity</Button>
        </div>
        <div>
          <PostAddIcon style={{ color: "white" }} />
          <Button>Upload School Data</Button>
        </div>
        <div>
          <PostAddIcon style={{ color: "white" }} />
          <Button>Post Content For Community</Button>
        </div>
        <div>
          <LogoutIcon style={{ color: "white" }} />
          <Button onClick={() => logout()}>Logout</Button>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: 50,
              flexDirection: "column",
              padding: 20,
            }}
          >
            <h5 style={{ color: "white", textAlign: "center" }}>
              No Of Students Registered
            </h5>
            <CountUp
              end={100}
              duration={5}
              style={{ color: "darkblue", fontSize: 40, textAlign: "center" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 50,
              flexDirection: "column",
              padding: 20,
            }}
          >
            <h5 style={{ color: "white" }}>
              No Of Activity Page Published
            </h5>
            <CountUp
              end={100}
              duration={5}
              style={{ color: "darkblue", textAlign: "center", fontSize: 40 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Dashboard);
