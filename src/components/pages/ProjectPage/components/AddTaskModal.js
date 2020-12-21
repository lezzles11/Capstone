import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import PropTypes from "prop-types";
// web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    in: open,
    children,
    onEnter,
    onExited,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function AddProjectForm() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-12">
        <form className="text-center" action="#!">
          <p className="h4 mb-4">Add Bite Sized Task</p>
          {/* id: projectName */}
          {/* id: purpose */}
          <input
            type="text"
            id="taskInput"
            className="form-control"
            placeholder="Bite-sized Task"
            aria-describedby="taskInput"
          />
          <small
            id="taskInput"
            className="form-text text-muted mb-4"
          >
            What will be done in 25 minutes?
          </small>

          <button
            className="btn btn-info my-4 btn-block"
            type="submit"
          >
            Let's Execute
          </button>
        </form>
      </div>
    </div>
  );
}
export default function AddTaskModal({ name }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-dark waves-effect"
        onClick={handleOpen}
      >
        {name}
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AddProjectForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
