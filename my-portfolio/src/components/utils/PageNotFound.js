import React from "react";

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.message}>404 - Page Not Found :(</h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  message: {
    fontSize: "24px",
    textAlign: "center",
  },
};

export default PageNotFound;
