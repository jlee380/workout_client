import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Icon, Divider } from "semantic-ui-react";
import { openModalAction, closeModalAction } from "store/actions/signupAction";
import styled from "styled-components";

import image from "./matthew.png";

class UserProfileCard extends Component {
  componentDidMount() {
    this.props.openModalAction();
  }

  formatGymName = gymName => {
    return console.log(gymName);
  };

  render() {
    const { modal, closeModalAction, selectedUser, users } = this.props;

    const IconWrapper = styled.div`
      display: flex;
      justify-content: flex-end;
    `;

    const Header = styled.div`
      display: flex;
      justify-content: space-between;
    `;

    const DetailWrapper = styled.div`
      display: flex;
      height: 600px;
      padding: 20px;
    `;

    const DetailLeft = styled.div`
      flex: 33%;
      position: relative;
      margin-right: 0;
      /* border: solid 3px red; */
    `;

    const DetailRight = styled.div`
      flex: 66%;
      position: relative;
      margin-right: 0;
      /* border: solid 3px red; */
    `;

    const VerticalLine = styled.div`
      position: relative;
      margin-left: 20px;
      width: 0px; /* Use only border style */
      height: 100%;
      float: left;
      border: 1px inset;
    `;

    return (
      <>
        {console.log(users)}
        <Modal open={modal}>
          <div className="HeaderWrapper">
            <IconWrapper>
              <Icon
                style={{
                  cursor: "pointer",
                  position: "relative",
                  padding: "15px",
                  marginRight: "15px"
                }}
                onClick={() => {
                  closeModalAction();
                  this.props.history.push("/partner");
                }}
                name="cancel"
              />
            </IconWrapper>
            <Header>
              <h3 style={{ padding: "20px" }}>User Profile</h3>
              <ul
                style={{
                  display: "flex",
                  listStyle: "none",
                  padding: "20px"
                }}
              >
                <li>
                  <h3>1</h3>
                </li>
                <li>
                  <h3>2</h3>
                </li>
                <li>
                  <h3>3</h3>
                </li>
              </ul>
            </Header>
          </div>
          <hr />
          <DetailWrapper>
            <DetailLeft>
              <img
                style={{ width: "100%", height: "250px" }}
                src={image}
                alt={selectedUser.lastName}
              />
              <hr style={{ marginTop: "22px" }} />
              <p>{`Workout Locations: `}</p>
              <div>
                <ul style={{ paddingLeft: "0" }}>
                  {selectedUser.gym.map(gymInfo => {
                    return (
                      <WorkoutLocations key={gymInfo._id} gymInfo={gymInfo} />
                    );
                  })}
                </ul>
              </div>
            </DetailLeft>
            <VerticalLine />
            <DetailRight>
              <h2>{`${selectedUser.firstName} ${selectedUser.lastName}`}</h2>
              <p>Body building, Power lifting</p>
            </DetailRight>
          </DetailWrapper>
        </Modal>
      </>
    );
  }
}

const WorkoutLocations = ({ gymInfo }) => (
  <>
    <h5>{gymInfo.name}</h5>
    <p>{gymInfo.formattedAddress}</p>
  </>
);

const mapStateToProps = state => ({
  modal: state.signupReducer.modal,
  users: state.userReducer.users,
  error: state.error,
  pending: state.pending,
  selectedUser: state.selectedUser.selectedUser
});

const mapDispatchToProps = dispatch => {
  return {
    openModalAction: () => dispatch(openModalAction()),
    closeModalAction: () => dispatch(closeModalAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileCard);
