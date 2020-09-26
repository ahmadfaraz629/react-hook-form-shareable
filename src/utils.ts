import ReactDOM from "react-dom";

export const batch = (cb: any) => {
  Promise.resolve().then(() => {
    ReactDOM.unstable_batchedUpdates(cb);
  });
};

export const warning = (message: string) => {
  if (console && console.warn) {
    console.warn(message);
  }
};
