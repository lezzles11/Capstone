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

class DeliverableTable extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
            Editable table
          </h3>
          <div className="card-body">
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
                    <th className="text-center">
                      Person Name
                    </th>
                    <th className="text-center">Age</th>
                    <th className="text-center">
                      Company Name
                    </th>
                    <th className="text-center">Country</th>
                    <th className="text-center">City</th>
                    <th className="text-center">Sort</th>
                    <th className="text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Aurelia Vega
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      30
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Deepends
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Spain
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Madrid
                    </td>
                    <td className="pt-3-half">
                      <span className="table-up">
                        <a
                          href="#!"
                          className="indigo-text"
                        >
                          <i
                            className="fas fa-long-arrow-alt-up"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </span>
                      <span className="table-down">
                        <a
                          href="#!"
                          className="indigo-text"
                        >
                          <i
                            className="fas fa-long-arrow-alt-down"
                            aria-hidden="true"
                          ></i>
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
                  <tr>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Guerra Cortez
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      45
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Insectus
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      USA
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      San Francisco
                    </td>
                    <td className="pt-3-half">
                      <span className="table-up">
                        <a
                          href="#!"
                          className="indigo-text"
                        >
                          <i
                            className="fas fa-long-arrow-alt-up"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </span>
                      <span className="table-down">
                        <a
                          href="#!"
                          className="indigo-text"
                        >
                          <i
                            className="fas fa-long-arrow-alt-down"
                            aria-hidden="true"
                          ></i>
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
                  <tr>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Guadalupe House
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      26
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Isotronic
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Germany
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Frankfurt am Main
                    </td>
                    <td className="pt-3-half">
                      <span className="table-up">
                        <a
                          href="#!"
                          className="indigo-text"
                        >
                          <i
                            className="fas fa-long-arrow-alt-up"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </span>
                      <span className="table-down">
                        <a
                          href="#!"
                          className="indigo-text"
                        >
                          <i
                            className="fas fa-long-arrow-alt-down"
                            aria-hidden="true"
                          ></i>
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
                  <tr className="hide">
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Elisa Gallagher
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      31
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      Portica
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      United Kingdom
                    </td>
                    <td
                      className="pt-3-half"
                      contenteditable="true"
                    >
                      London
                    </td>
                    <td className="pt-3-half">
                      <span className="table-up">
                        <a
                          href="#!"
                          className="indigo-text"
                        >
                          <i
                            className="fas fa-long-arrow-alt-up"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </span>
                      <span className="table-down">
                        <a
                          href="#!"
                          className="indigo-text"
                        >
                          <i
                            className="fas fa-long-arrow-alt-down"
                            aria-hidden="true"
                          ></i>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function DeliverableModal({ name }) {
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
