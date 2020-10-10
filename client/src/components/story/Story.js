import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./story.css";

const useStyles = makeStyles((theme) => ({
   large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
   },
}));

export default function Story() {
   const classes = useStyles();
   return (
      <React.Fragment>
         <div className="story container">
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/100/367/267.jpg?hmac=mNdSdA1Zh6w4qessdp5n207IFw3q_8FbbQ1gIr0jYBs"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1/367/267.jpg?hmac=jZdc5TviQPVhxLyvyU8siO-I5FMVXVZpBhsBYKbBJpM"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/100/367/267.jpg?hmac=mNdSdA1Zh6w4qessdp5n207IFw3q_8FbbQ1gIr0jYBs"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1000/367/267.jpg?hmac=uO9iQNujyGpqk0Ieytv_xfwbpy3ENW4PhnIZ1gsnldI"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1002/367/267.jpg?hmac=yLqY6breRyPZ3GcA3nJGtjgvCeRbKQZTFx8WC29OkZU"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1003/367/267.jpg?hmac=1VHS13exKZ5QWJdtDTu0iCUTBZKCE_clSpR-wc3PW3g"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1004/367/267.jpg?hmac=dNFSbCRe8enn3ikNS0FvmnagW4IzORvJuuTAJ_UUGf8"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1005/367/267.jpg?hmac=bl_eyI1wwd6n-Q120mDottBNmCDNBurz7Z-b5IOeJU0"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1006/367/267.jpg?hmac=xmzaRyrKqJTmb6ExuddltvgqSQ9pLopBEhiiIAofVwU"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1008/367/267.jpg?hmac=WLYhEYMqqDJehqv3iz6vmiMA439K1b68SvfTFg7z9ZY"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1011/367/267.jpg?hmac=DiajkYnQXUMcq-NjU4MUCAIielJRvpwQK4ZRtL_ycmE"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1012/367/267.jpg?hmac=KXF2aB3EVwgx_vyE1gsF6vrIRAOhP1Fl2zAKmtIvi6E"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
            <div className="text-center mr-3 d-flex justify-content-center flex-column align-items-center">
               <Avatar
                  size="large"
                  alt="Cindy Baker"
                  src="https://i.picsum.photos/id/1015/367/267.jpg?hmac=mjgo8WXn4uxkZ_GhSDNN7rUSzP9jgyPBsHrDF02oU-o"
                  className={`avatar__border ${classes.large}`}
               />
               <small>profile_name</small>
            </div>
         </div>
      </React.Fragment>
   );
}
