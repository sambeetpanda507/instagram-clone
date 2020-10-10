import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Avatar,
    MenuItem,
    Menu,
    TextField,
    InputAdornment,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./post.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const ITEM_HEIGHT = 48;

const options = [
    "Report Inappropriate",
    "Unfollow",
    "Go to post",
    "Share",
    "Copy link",
    "Embed",
    "Cancel",
];

const Post = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const [comment, setComment] = useState("");

    const [fullComment, setFullComment] = useState([
        {
            username: "",
            comment: "",
        },
    ]);

    const [isLiked, setIsLiked] = useState(false);

    const [likeCounter, setLikeCounter] = useState(null);

    useEffect(() => {
        if (props.comments.length > 0) {
            setFullComment(props.comments);
        }
        if (props.isLiked) {
            setIsLiked(props.isLiked);
        }
        if (props.likeCounter >= 0) {
            setLikeCounter(props.likeCounter);
        }
    }, []);

    const updateLikes = (liked, likes, postId) => {
        axios({
            url: `http://localhost:8080/api/likes?postId=${postId}`,
            method: "PATCH",
            data: { likes: likes, liked: !liked },
        })
            .then((result) => {
                console.log(result);
            })
            .catch((err) => console.log(err));
    };

    const likeHandler = (e) => {
        if (isLiked === false) {
            setIsLiked(true);
            setLikeCounter(likeCounter + 1);
            updateLikes(isLiked, likeCounter + 1, props.postId);
        }
        if (isLiked === true && likeCounter !== 0) {
            setIsLiked(false);
            setLikeCounter(likeCounter - 1);
            updateLikes(isLiked, likeCounter - 1, props.postId);
        }
    };

    const commentHandler = (e) => {
        setComment(e.target.value);
    };

    const postClickHandler = (e) => {
        if (comment.trim().length !== 0) {
            setFullComment([
                ...fullComment,
                {
                    _id: Math.random(),
                    username: props.username,
                    comment: comment,
                },
            ]);
            axios({
                url: `http://localhost:8080/api/updatecomment?postId=${props.postId}`,
                method: "PATCH",
                data: { username: props.username, comments: comment },
            })
                .then((result) => console.log(result))
                .catch((err) => console.log(err));
        }
        setComment("");
    };

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
        <div className="post">
            <div className="post__header">
                <div className={`post__header__username ${classes.root}`}>
                    {/* avatar */}
                    <Avatar
                        alt={props.username}
                        src="/static/images/avatar/1.jpg"
                        className={classes.large}
                    />
                    {/* username */}
                    <h6 className="font-weight-bold">{props.username}</h6>
                </div>
                <div>
                    {/* options */}
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        className="post__header__icon__btn"
                    >
                        <MoreHorizIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 6,
                                width: "25ch",
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem
                                className="text-center"
                                key={option}
                                selected={option === "Pyxis"}
                                onClick={handleClose}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
            <div className="post__img">
                <img
                    src={props.postImage}
                    alt="postImage"
                    className="img-fluid"
                />
            </div>
            <div className="post__action">
                <div className="post__action__lsm">
                    <IconButton
                        id={props.postId}
                        onClick={likeHandler}
                        className="post__action__lsm__icon__btn"
                    >
                        {isLiked ? (
                            <FavoriteIcon color="secondary" />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </IconButton>
                    <IconButton className="post__action__lsm__icon__btn">
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton className="post__action__lsm__icon__btn">
                        <SendIcon />
                    </IconButton>
                </div>
                <div className="post__action__bookmark">
                    <IconButton className="post__action__lsm__icon__btn">
                        <BookmarkBorderIcon />
                    </IconButton>
                </div>
            </div>
            <div className="post__like__counter">
                <h6 className="font-weight-bolder">{likeCounter}</h6>
            </div>
            <div className="post__caption">
                <p>
                    <b>{props.username}</b> {props.caption}
                </p>
            </div>
            <div className="post__comments">
                {fullComment.map((value, index, arr) => {
                    return (
                        <p key={index}>
                            <b>{value.username}</b> {value.comment}
                        </p>
                    );
                })}
            </div>
            <div className="post__comment">
                <TextField
                    id="outlined-basic"
                    onChange={commentHandler}
                    label="comment"
                    variant="outlined"
                    size="small"
                    value={comment}
                    fullWidth
                    className="post__comment__textfield"
                    multiline
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    id={props.postId}
                                    onClick={postClickHandler}
                                    className="post__comment__btn"
                                >
                                    <small>POST</small>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export default Post;
