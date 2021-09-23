import React, { Component } from "react";
import { Redirect } from "react-router";
import "../../App.css";
import CardItem from "../CardItem";
import "../Poster.css";
import { variables } from "../../Variables.js";
import Auth from "../../Auth";
export class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      modalTitle: "",
      ListingID: 0,
      Type: "",
      Price: "",
      Deposit: "",
      Area: "",
      Amenities: "",
      Link: "",
      Policy: "",
      Status: 0,
      City: "",
      Zipcode: 0,
      AvailableDate: "",
      PhotoFileName1: "default.jpg",
      PhotoFileName2: "default.jpg",
      PhotoFileName3: "default.jpg",
      PhotoFileName4: "default.jpg",
      PhotoFileName5: "default.jpg",
      PhotoPath: variables.PHOTO_URL,
      props,
    };
  }

  signOut = () => {
    Auth.logout();
    this.props.history.push("/");
  };

  refreshList() {
    fetch("api/Listings")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listings: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeType = (e) => {
    this.setState({ Type: e.target.value });
  };

  changePrice = (e) => {
    this.setState({ Price: e.target.value });
    };

  changeDeposit = (e) => {
    this.setState({ Deposit: e.target.value });
  };

  changeArea = (e) => {
    this.setState({ Area: e.target.value });
  };

  changeAmenities = (e) => {
    this.setState({ Amenities: e.target.value });
  };

  changeLink = (e) => {
    this.setState({ Link: e.target.value });
  };


  changeCity = (e) => {
    this.setState({ City: e.target.value });
  };

  changeZipcode = (e) => {
    this.setState({ Zipcode: e.target.value });
  };

  changePolicy = (e) => {
    this.setState({ Policy: e.target.value });
  };

  changeStatus = (e) => {
    this.setState({ Status: e.target.value });
  };

  changeAvailableDate = (e) => {
    this.setState({ AvailableDate: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add Listing",
      ListingID: 0,
      Type: "",
        Price: "",
        Deposit: "",
        Area: "",
      Amenities: "",
      Link: "",
      Policy: "",
      Status: 0,
      City: "",
      Zipcode: 0,
      AvailableDate: "",
      PhotoFileName1: "default.jpg",
      PhotoFileName2: "default.jpg",
      PhotoFileName3: "default.jpg",
      PhotoFileName4: "default.jpg",
      PhotoFileName5: "default.jpg",
    });
  }

  editClick(list) {
    this.setState({
      modalTitle: "Edit Listing",
      ListingID: list.ListingID,
      Type: list.Type,
      Price: list.Price,
      Deposit: list.Deposit,
      Area: list.Area,
      Amenities: list.Amenities,
      Link: list.Link,
      City: list.City,
      Zipcode: list.Zipcode,
      Policy: list.Policy,
      Status: list.Status,
      AvailableDate: list.AvailableDate,
      PhotoFileName1: list.PhotoFileName2,
      PhotoFileName2: list.PhotoFileName2,
      PhotoFileName3: list.PhotoFileName3,
      PhotoFileName4: list.PhotoFileName4,
      PhotoFileName5: list.PhotoFileName5,
    });
  }

  async createClick() {
      const res = await fetch("api/Listings", {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              Type: this.state.Type,
              Price: this.state.Price,
              Deposit: this.state.Deposit,
              Area: this.state.Area,
              Amenities: this.state.Amenities,
              Link: this.state.Link,
              City: this.state.City,
              Zipcode: this.state.Zipcode,
              Policy: this.state.Policy,
              Status: this.state.Status,
              AvailableDate: this.state.AvailableDate,
              PhotoFileName1: this.state.PhotoFileName1,
              PhotoFileName2: this.state.PhotoFileName2,
              PhotoFileName3: this.state.PhotoFileName3,
              PhotoFileName4: this.state.PhotoFileName4,
              PhotoFileName5: this.state.PhotoFileName5,
          }),
      });

      if (res.status == 400) {
          window.alert("Please fill out all fields! ");
      } else if (res.status == 200) {
          window.alert("Added Succesfully");
          this.refreshList();
      }
  }

  async updateClick() {
        const res = await fetch("api/Listings", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ListingID: this.state.ListingID,
                Type: this.state.Type,
                Price: this.state.Price,
                Deposit: this.state.Deposit,
                Area: this.state.Area,
                Amenities: this.state.Amenities,
                Link: this.state.Link,
                City: this.state.City,
                Zipcode: this.state.Zipcode,
                Policy: this.state.Policy,
                Status: this.state.Status,
                AvailableDate: this.state.AvailableDate,
                PhotoFileName1: this.state.PhotoFileName1,
                PhotoFileName2: this.state.PhotoFileName2,
                PhotoFileName3: this.state.PhotoFileName3,
                PhotoFileName4: this.state.PhotoFileName4,
                PhotoFileName5: this.state.PhotoFileName5,
            }),
        });
    
        if (res.status == 400) {
            window.alert("Please fill out all fields! ");
        } else if (res.status == 200) {
            window.alert("Updated Succesfully");
            this.refreshList();
        }
  }

  deleteClick(id) {
    if (window.confirm("Are you sure?")) {
      fetch("api/Listings/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            alert(result);
            this.refreshList();
          },
            (error) => {
            alert("Failed");
          }
       );
    }
  }

  //  async deleteClick(id) {
  //   // console.log("value: " + JSON.stringify(this.state.recipe));
  //   const res = await fetch(variables.API_URL + "Listings/" + id, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(res);
  //   if (res.status != 200) {
  //     window.alert("Please fill out all fields! ");
  //   } else {
  //     window.alert("Succesfully save new Recipe!");
  //   }
  //   console.log(id);
  // }

  imageUpload = (e, number) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", e.target.files[0], e.target.files[0].name);

    fetch("api/listings/savefile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ [`PhotoFileName${number}`]: data });
      });
  };

  render() {
    const {
      listings,
      modalTitle,
      ListingID,
      Type,
      Price,
      Deposit,
      Area,
      Amenities,
      City,
      Zipcode,
      Link,
      Policy,
      Status,
      AvailableDate,
      PhotoFileName1,
      PhotoFileName2,
      PhotoFileName3,
      PhotoFileName4,
      PhotoFileName5,
      PhotoPath,
    } = this.state;

    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <div className="listings">
          <h1>ADMIN</h1>
          <p>Update Listings Information</p>
        </div>

        <div>
          <div className="posters__container">
            {/* <Button
            type="button"
              className="btns"
              buttonStyle="btn--filled"
              buttonSize="btn--large"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => this.addClick()}
            >
              ADD <i class="fas fa-plus"></i>
            </Button> */}
            <button
              // type="button"
              className="btn btn-primary m-2 float-end"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => this.addClick()}
            >
              Add <i class="fas fa-plus"></i>
            </button>
            <button
              // type="button"
              className="btn btn-danger m-2 float-end"
              onClick={() => this.signOut()}
            >
              Sign Out <i class="fas fa-sign-out-alt"></i>
            </button>
            <div className="posters__wrapper">
              <ul className="posters__items">
                {listings.map((list) => (
                  <div className="poster__item" key={list.ListingID}>
                    <div className="poster__picture">
                      <CardItem
                        src={'Photos/'+ list.PhotoFileName1}
                        text={`${list.Type} in ${list.City}, AZ`}
                        label={list.Type}
                      />
                    </div>
                    <div className="poster__info">
                      <h3>
                        {list.Type} in {list.City}, AZ
                      </h3>
                      <p>Available date: {list.AvailableDate}</p>
                      <p>Price: {list.Price}</p>
                      <p>Deposit: {list.Deposit}</p>
                      <p>Area: {list.Area} sqft</p>
                      <p>Amenities: {list.Amenities}</p>
                      <div className="hero-btns">
                        <button
                          type="button"
                          className="btn btn-light mr-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => this.editClick(list)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>

                        <button
                          type="button"
                          className="btn btn-light mr-1"
                          onClick={() => this.deleteClick(list.ListingID)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="d-flex flex-row bd-highlight mb-3">
                  <div className="p-2 w-50 bd-highlight">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Property Type</span>
                      <input
                        type="text"
                        className="form-control"
                        value={Type}
                        onChange={this.changeType}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text">Price</span>
                      <input
                        type="text"
                        className="form-control"
                        value={Price}
                        onChange={this.changePrice}
                      />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">Deposit</span>
                        <input
                            type="text"
                            className="form-control"
                            value={Deposit}
                            onChange={this.changeDeposit}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">Area</span>
                        <input
                            type="text"
                            className="form-control"
                            value={Area}
                            onChange={this.changeArea}
                        />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text">Amenities</span>
                      <input
                        type="text"
                        className="form-control"
                        value={Amenities}
                        onChange={this.changeAmenities}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text">Link</span>
                      <input
                        type="text"
                        className="form-control"
                        value={Link}
                        onChange={this.changeLink}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text">City</span>
                      <input
                        type="text"
                        className="form-control"
                        value={City}
                        onChange={this.changeCity}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text">Zipcode</span>
                      <input
                        type="text"
                        className="form-control"
                        value={Zipcode}
                        onChange={this.changeZipcode}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text">Policy</span>
                      <input
                        type="text"
                        className="form-control"
                        value={Policy}
                        onChange={this.changePolicy}
                      />
                    </div>

                    {/*<div className="input-group mb-3">*/}
                    {/*  <span className="input-group-text">Status</span>*/}
                    {/*  <input*/}
                    {/*    type="text"*/}
                    {/*    className="form-control"*/}
                    {/*    value={Status}*/}
                    {/*    onChange={this.changeStatus}*/}
                    {/*  />*/}
                    {/*</div>*/}

                    

                    <div className="input-group mb-3">
                      <span className="input-group-text">Available Date</span>
                      <input
                        type="date"
                        className="form-control"
                        value={AvailableDate}
                        onChange={this.changeAvailableDate}
                      />
                    </div>

                    <div classname="input-group mb-3">
                        <label>Status</label>
                        <select value={Status} onChange={this.changeStatus}>
                            <option value="1">Available</option>
                            <option value="0">Unavailable</option>
                        </select>
                    </div>
                  </div>
                  <div className="p-2 w-50 bd-highlight">
                    <input
                      className="m-2"
                      type="file"
                      onChange={(e) => this.imageUpload(e, 1)}
                    />

                    <input
                      className="m-2"
                      type="file"
                      onChange={(e) => this.imageUpload(e, 2)}
                    />

                    <input
                      className="m-2"
                      type="file"
                      onChange={(e) => this.imageUpload(e, 3)}
                    />

                    <input
                      className="m-2"
                      type="file"
                      onChange={(e) => this.imageUpload(e, 4)}
                    />

                    <input
                      className="m-2"
                      type="file"
                      onChange={(e) => this.imageUpload(e, 5)}
                    />
                  </div>
                </div>

                {ListingID === 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.createClick()}
                  >
                    Create
                  </button>
                ) : null}

                {ListingID !== 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.updateClick()}
                  >
                    Update
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
