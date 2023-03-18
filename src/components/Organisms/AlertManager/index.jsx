import React, { useEffect } from "react";

import { useAlertHandlerContext } from "../../contexts/alert_handler";

import Alert from "../../Atoms/Alert/index.jsx";

const AlertManager = () => {
  // Context を取得
  const { visible, message, closeAlert } = useAlertHandlerContext();

  // アラートが表示されてから 5 秒後にアラートを消す処理
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        closeAlert();
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible, closeAlert]);

  return <div>{visible && <Alert show={visible} message={message} />}</div>;
};

export default AlertManager;
