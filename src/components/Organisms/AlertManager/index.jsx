import React, { useEffect } from "react";

import { useAlertHandlerContext } from "../../contexts/alert_handler";

import Alert from "../../Atoms/Alert/index.jsx";

const AlertManager = () => {
  const { visible, message, closeAlert } = useAlertHandlerContext();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        closeAlert();
      }, 500000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible, closeAlert]);

  return <Alert show={visible} message={message} />;
};

export default AlertManager;
