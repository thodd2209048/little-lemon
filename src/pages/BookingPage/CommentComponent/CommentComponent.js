import React from "react";
import PropTypes from "prop-types";

import styles from "./CommentComponent.module.scss";
import clsx from "clsx";
import Text from "~/components/Text/Text";

CommentComponent.propTypes = {};

function CommentComponent({ request, setRequest }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <label>
        <Text>Special Requests (optional)</Text>
      </label>
      <textarea
        type="text"
        placeholder="Enter comment..."
        value={request}
        onChange={(e) => {
          setRequest(e.target.value);
        }}
      />
    </div>
  );
}

export default CommentComponent;
