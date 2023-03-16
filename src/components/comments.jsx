import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { addComment } from "../api";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);

  useEffect(() => {
    getArticleComments(articleId).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [articleId]);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    addComment(articleId, newComment)
      .then((data) => {
        setComments([...comments, data]);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setNewComment("");
      })
      .catch(() => {
        setSubmitFail(true);
        setSubmitSuccess(false);
        setIsSubmitting(false);
      });
  };

  const isCommentEmpty = () => {
    return newComment.trim() === "";
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <p>
                    {comment.author}: {comment.body}
                  </p>
                </li>
              );
            })}
          </ul>
          <form onSubmit={handleSubmit}>
            <label>
              Comment:
              <textarea value={newComment} onChange={handleChange} />
            </label>
            <button type="submit" disabled={isSubmitting || isCommentEmpty()}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {submitSuccess && <p>Your comment has been successfully posted!</p>}
            {submitFail && (
              <p>Your comment has not been posted! Please try again.</p>
            )}
          </form>
        </>
      )}
    </>
  );
}

export default Comments;
