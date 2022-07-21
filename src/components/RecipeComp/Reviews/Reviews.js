import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Commentsection({ headline,comment, rating }) {

    const numStars = Array( rating).fill(0);

  const date1 = new Date().toLocaleString();
  return (
    <div className="commentSection">
      <div className="card">
        <div className="card-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          You
        </div>
        <div className="card-body">
          <div className="card-title d-flex">
            <div className="p-2">
              <h5 className="me-2">{headline}</h5>
            </div>
            <div className="p-2">

              
              {numStars.map((_, index) => {
                return <i key={index} className="bi bi-star-fill" />;
              })}
            </div>
            <div className="ms-auto p-2">
              Posted: <strong>{date1}</strong> {rating}
            </div>
          </div>
          {/* <h5 className="card-title">I LOVE IT!</h5> */}
          <p className="card-text">
            {" "}
            {comment}
          </p>
          <span className="mx-2 me-4"> Reply (0)</span>
          <button type="button" className="btn btn-outline-primary ">
            <i className="bi bi-hand-thumbs-up-fill"></i>
          </button>
          <span className="me-2">
            <strong className="mx-2 me-4">0</strong>
          </span>
          <button type="button" className="btn btn-outline-danger">
            <i className="bi bi-hand-thumbs-down-fill"></i>
          </button>
          <span className="mx-2 me-4">0</span>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  const { t } = useTranslation(["recipesPage"]);
  const [comment, setComment] = useState("");
  const [headline, setHeadline] = useState("");
  const [rating, setRating] = useState(0);
  const [commentList, setCommentList] = useState([]);
  // const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const addComment = () => {
    setCommentList([...commentList, { headline:headline, comment: comment, rating: rating }]);
    setComment("");
    setRating("");
    setHeadline("");
  };
  return (
    <>
      <div className="my-5 pt-0 pt-md-3">
        <div className="reviewsect">
          <div className="border-bottom mb-4 pb-3">
            <h2 id="reviewtitle" className="d-inline-block">
              Reviews
            </h2>
            <span className="f-size-24">(25)</span>
          </div>
          <div className="card">
            <div className="card-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              Jane Doe
            </div>
            <div className="card-body">
              <div className="card-title d-flex">
                <div className="p-2">
                  <h5 className="me-2">I LOVE IT!</h5>
                </div>
                <div className="p-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i
                    style={{ color: "#f3da35" }}
                    className="bi bi-star-fill"
                  ></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <div className="ms-auto p-2">
                  Posted: <strong>4/12/2022, 3:45:12 PM</strong>
                </div>
              </div>
              {/* <h5 className="card-title">I LOVE IT!</h5> */}
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                error veniam sit expedita est illo maiores neque quos nesciunt,
                reprehenderit autem odio commodi labore praesentium voluptate
                repellat in id quisquam.
              </p>
              <span className="mx-2 me-4">Reply (21)</span>
              <button className="btn btn-outline-primary">
                <i className="bi bi-hand-thumbs-up-fill"></i>
              </button>
              <span className="me-2">
                <strong className="mx-2 me-4">42</strong>
              </span>
              <button className="btn btn-outline-danger">
                <i className="bi bi-hand-thumbs-down-fill"></i>
              </button>
              <span className="mx-2 me-4">15</span>
            </div>
          </div>
          {commentList.map((commentOpt) => {
            return (
              <Commentsection
              headline={commentOpt.headline}
                comment={commentOpt.comment}
                rating={commentOpt.rating}
              />
            );
          })}

          <div
            href="#0"
            className="btn btn-outline-secondary d-grid col-6 mx-auto my-2 py-1 py-md-3"
          >
            Load 10 more Reviews
          </div>
        </div>

        <div className=" fs-4 write-comment align-items-center mb-3 mx-3 ">
          <div>
            {" "}
            <h4>Create a Review</h4>{" "}
            <span className="ms-3">{stars.map((_, index) => {
              return (
                <i
                  key={index}
                  onClick={() => setRating(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  className={`${
                    (hoverValue || rating) > index
                      ? "bi bi-star-fill"
                      : "bi bi-star"
                  }`}
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
            </span>
          </div>
<div className="mb-1 mx-3">
            <label htmlFor="headliner" className="h5 form-label">
              Enter A Headliner
            </label>
            <input
              className="form-control"
              placeholder="Start with a headliner"
              id="headliner"
              rows="3"
              onChange={(e) => {
                setHeadline(e.target.value);
              }}
            />
          </div>
          <div className="mb-1 mx-3">
            <label htmlFor="commentVal1" className=" h5 form-label">
              Enter Comment
            </label>
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="commentVal1"
              rows="3"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 mx-3">
              <label htmlFor="formFileMultiple" className=" h5 form-label">Have Any Picture? Share Them!</label>
              <input className="form-control" type="file" id="formFileMultiple" multiple/>
          </div>

          <div className="mt-auto">
            <button
              type="button"
              className="btn btn-lg btn-stitch"
              onClick={addComment}
            >
              {t("postComment")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;

function Stars() {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  return (
    <div>
      Reviews
      {/* <textarea
              className="form-control"
              placeholder="Give a Rating out of 5"
              id="rating1"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            /> */}
    </div>
  );
}
