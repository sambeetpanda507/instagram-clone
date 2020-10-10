import React, { useState } from "react";
import "./navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/Send";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Avatar from "@material-ui/core/Avatar";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import axios from "axios";
import { storage } from "../../firebase";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    list: {
        width: "auto",
    },
    fullList: {
        width: "auto",
    },
}));

export default function NavBar({ postdata }) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [caption, setCaption] = useState("");

    const [file, setFile] = useState(null);

    const [progressBar, setProgressBar] = useState(0);

    const handleFile = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const uploadHandler = () => {
        if (caption.trim().length > 0 && file) {
            const storageRef = storage.ref(`images/${file.name}`).put(file);
            storageRef.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgressBar(progress);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(file.name)
                        .getDownloadURL()
                        .then((imgUrl) => {
                            if (imgUrl) {
                                const formData = new FormData();
                                formData.append("username", "Dexter");
                                formData.append("caption", caption);
                                formData.append("isLiked", false);
                                formData.append("likeCounter", 0);
                                formData.append("postImageURL", imgUrl);
                                axios({
                                    url: "http://localhost:8080/api/addposts",
                                    method: "POST",
                                    data: formData,
                                })
                                    .then((result) => {
                                        postdata(result.data.result);
                                    })
                                    .catch((err) => console.log(err));
                            }
                        });
                }
            );
        } else {
            window.alert("caption is empty or no file choosen");
        }
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div className="upload__post container pt-2 pb-1 pr-5 pl-5">
            <div className="progress" style={{ height: "4px" }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progressBar}%` }}
                    aria-valuenow={progressBar}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
            <form
                noValidate
                autoComplete="off"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div className="form-group">
                    <TextField
                        id="standard-textarea"
                        label="Caption"
                        multiline
                        fullWidth
                        name="caption"
                        value={caption}
                        onChange={(e) => {
                            setCaption(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        name="postImageURL"
                        onChange={handleFile}
                    />
                </div>
                <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    className="btn-block"
                    onClick={uploadHandler}
                >
                    Upload
                </Button>
            </form>
        </div>
    );

    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
                <div className="container">
                    <span className="navbar-brand">Instagram</span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <form
                            className={`ml-auto ${classes.root} d-sm-none d-lg-block d-md-block d-none`}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="input-with-icon-textfield"
                                variant="outlined"
                                size="small"
                                placeholder="search"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </form>
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <IconButton className="nav__icon__btn">
                                    <HomeIcon />
                                </IconButton>
                            </li>
                            <li>
                                <React.Fragment key={"bottom"}>
                                    <IconButton
                                        className="nav__icon__btn"
                                        onClick={toggleDrawer("bottom", true)}
                                    >
                                        <AddCircleIcon />
                                    </IconButton>
                                    <Drawer
                                        anchor={"bottom"}
                                        open={state["bottom"]}
                                        onClose={toggleDrawer("bottom", false)}
                                    >
                                        {list("bottom")}
                                    </Drawer>
                                </React.Fragment>
                            </li>
                            <li>
                                <IconButton className="nav__icon__btn">
                                    <SendIcon />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton className="nav__icon__btn">
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton className="nav__icon__btn">
                                    <Avatar
                                        alt="test"
                                        src="/static/images/avatar/1.jpg"
                                        className={classes.small}
                                    />
                                </IconButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
