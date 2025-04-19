import React from "react";
import { Container } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import "./_TestimonyItem.scss";

export default function TestimonyItem({userImgUrl, userName, userCommentText} ) {
  return (
    <Container className="testimony-container">
      <div className="photo-container">
        <img src={`${userImgUrl}`} alt="" className="customer-img" />
        <div className="qoute-icon">
          <FormatQuoteIcon className="icon" />
        </div>
      </div>

      <div className="body">
      <div className="testimony-txt">{userCommentText}</div>
      </div>

      <div className="name">{userName}</div>
    </Container>
  );
}
