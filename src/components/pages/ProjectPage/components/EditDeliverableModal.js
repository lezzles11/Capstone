import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import PropTypes from "prop-types";
import ArrowUp from "../../components/icons/ArrowUp";
import ArrowDown from "../../components/icons/ArrowDown";
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

function DeliverableItem({
  item,
  duedate,
  timespent,
  done,
}) {
  return (
    <tr>
      <td className="pt-3-half" contenteditable="true">
        {item}
      </td>
      <td className="pt-3-half" contenteditable="true">
        {duedate}
      </td>
      <td className="pt-3-half" contenteditable="true">
        {done}
      </td>
      <td className="pt-3-half" contenteditable="true">
        {timespent}
      </td>
      <td className="pt-3-half">
        <span className="table-up">
          <a href="#!" className="indigo-text">
            <ArrowUp />
          </a>
        </span>
        <span className="table-down">
          <a href="#!" className="indigo-text">
            <ArrowDown />
          </a>
        </span>
      </td>
      <td>
        <span className="table-remove">
          <button
            type="button"
            className="btn btn-danger btn-rounded btn-sm my-0"
          >
            Remove
          </button>
        </span>
      </td>
    </tr>
  );
}
class DeliverableTable extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <h3 className="card-header text-center font-weight-bold py-4">
            Deliverables
          </h3>
          <div className="card-body container">
            <div id="table" className="table-editable">
              <span className="table-add float-right mb-3 mr-2">
                <a href="#!" className="text-success">
                  <i
                    className="fas fa-plus fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>
              </span>
              <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th className="text-center">Item</th>
                    <th className="text-center">
                      Due Date
                    </th>
                    <th className="text-center">Done</th>

                    <th className="text-center">
                      Time Spent
                    </th>
                    <th className="text-center">Sort</th>
                    <th className="text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <DeliverableItem
                    item="Finish User Interface"
                    duedate="Dec 20"
                    timespent="11 Hours"
                    done="False"
                  />
                  <DeliverableItem
                    item="Finish Writing Tests"
                    duedate="Dec 20"
                    timespent="10 hours"
                    done="False"
                  />
                  <DeliverableItem
                    item="Finish Database"
                    duedate="Dec 20"
                    timespent="10 hours"
                    done="False"
                  />
                  <DeliverableItem
                    item="Finish API"
                    duedate="Dec 20"
                    timespent="20 hours"
                    done="False"
                  />
                  <DeliverableItem
                    item="Finish Redux"
                    duedate="Dec 20"
                    timespent="10 hours"
                    done="False"
                  />
                  <DeliverableItem
                    item="Finish Authentication"
                    duedate="Dec 20"
                    timespent="5 hours"
                    done="False"
                  />
                  <DeliverableItem
                    item="Finish Payment"
                    duedate="Dec 20"
                    timespent="10 hours"
                    done="False"
                  />
                  <DeliverableItem
                    item="Deployment"
                    duedate="Dec 20"
                    timespent="5 hours"
                    done="False"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function EditDeliverableModal({ name }) {
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
            <DeliverableTable />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
