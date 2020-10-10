import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./suggestion.css";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const Suggestion = () => {
    const classes = useStyles();

    return (
        <div className="suggestion">
            <div className="suggestion__profile">
                <div className="suggestion__profile__avatar">
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        className={classes.large}
                    />
                </div>
                <div className="suggestion__profile__username">
                    <h5>Username</h5>
                    <small className="text-secondary">full name</small>
                </div>
            </div>
            <div className="suggestion__profiles">
                <div className="d-flex align-align-items-center justify-content-between pl-3 pr-3">
                    <h6 className="text-secondary font-weight-bolder">
                        Suggestions for you
                    </h6>
                    <p className="suggestion__profiles__seeall">See All</p>
                </div>
            </div>
            <div className="suggestion__profile__details pl-2 pr-4">
                <div className="suggestion__profile">
                    <div className="suggestion__profile__avatar">
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            className={classes.small}
                        />
                    </div>
                    <div className="suggestion__profile__username">
                        <p>Username</p>
                        <small className="text-secondary">full name</small>
                    </div>
                </div>
                <p className="suggestion__profiles__seeall text-primary pt-4">
                    Follow
                </p>
            </div>

            <div className="suggestion__profile__details pl-2 pr-4">
                <div className="suggestion__profile">
                    <div className="suggestion__profile__avatar">
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            className={classes.small}
                        />
                    </div>
                    <div className="suggestion__profile__username">
                        <p>Username</p>
                        <small className="text-secondary">full name</small>
                    </div>
                </div>
                <p className="suggestion__profiles__seeall text-primary pt-4">
                    Follow
                </p>
            </div>
            <div className="suggestion__profile__details pl-2 pr-4">
                <div className="suggestion__profile">
                    <div className="suggestion__profile__avatar">
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            className={classes.small}
                        />
                    </div>
                    <div className="suggestion__profile__username">
                        <p>Username</p>
                        <small className="text-secondary">full name</small>
                    </div>
                </div>
                <p className="suggestion__profiles__seeall text-primary pt-4">
                    Follow
                </p>
            </div>
            <div className="suggestion__policies">
                <span className="text-secondary">About</span>{" "}
                <span className="text-secondary">Help</span>{" "}
                <span className="text-secondary">Press</span>{" "}
                <span className="text-secondary">API</span>{" "}
                <span className="text-secondary">Jobs</span>{" "}
                <span className="text-secondary">Privacy</span>{" "}
                <span className="text-secondary">Terms</span>{" "}
                <span className="text-secondary">Location</span>{" "}
                <span className="text-secondary">Top Accounts</span>{" "}
                <span className="text-secondary">Hashtags</span>{" "}
                <span className="text-secondary">Language</span> <br />
                <small>
                    <CopyrightIcon fontSize="small" />{" "}
                    {new Date().getFullYear()} INSTAGRAM FROM FACEBOOK
                </small>
            </div>
        </div>
    );
};

export default Suggestion;
