import React from "react";
import styled from "./Blog.module.css";
import { blogs } from "./data";

export const Blog = () => {
  return (
    <div id="blog">
      <h1 className={styled.blog_text}>
        <span style={{ color: "orange" }}>Interview</span> Blog{" "}
      </h1>
      <div className={styled.blog_container}>
        {blogs.map((Val) => {
          const { image, heading, link } = Val;
          return (
            <>
              <div className={styled.blog_Card} id="card-img">
                <a href={`${link}`}>
                  <img
                    src={image}
                    alt={heading}
                    className={styled.blog_img}
                    id="card-img"
                  />
                </a>
                <h3 style={{ color: "orange" }}>{heading}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
