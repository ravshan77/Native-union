import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import { showModal, addCard } from "../../store/item/item-action";
import Button from "../Button/Button";
import CloseIcon from "@material-ui/icons/Close";
import "./Modal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    border: "none",
    width: "55%",
    height: "50%",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: "78%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "75%",
      height: "50%",
    },
  },
}));

const TransitionsModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.StoreData.modalInfo);
  const show = useSelector((state) => state.StoreData.modal);

  // Modal toggle
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    if (show) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [show]);

  const handleClose = () => {
    setOpen(false);
    dispatch(showModal(false));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <div className="modal_card">
              <div className="modal_card_img">
                <img src={data.img} />
              </div>
              <div className="modal_card_info">
                <div>
                  <div>
                    <h2 className="modal_card_name">{data.name}</h2>
                  </div>
                </div>
                <div className="b">
                  <p className="modal_info_text">{data.info}</p>
                </div>
                <div className="modal_btn_group">
                  <div className="btn_group_cost">
                    <p>
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(data.cost)} UZS
                    </p>
                  </div>
                  <div className="btn_group_calc">
                    <Button
                      buttonStyle={"btn--black"}
                      buttonSize={"btn--medium"}
                      buttonPosition={"btn--modal"}
                      onClick={() => dispatch(addCard({ ...data }))}
                    >
                      add to card
                    </Button>
                  </div>
                </div>
              </div>
              <div className="modal_close" onClick={handleClose}>
                <CloseIcon />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
