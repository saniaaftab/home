import React from "react";
import "./style.css";
import {
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Reach Out</p>
    </div>
  );
};
