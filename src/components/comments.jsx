import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { addComment } from "../api";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

    addComment(articleId, newComment).then((data) => {
      setComments([...comments, data]);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setNewComment("");
    });
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {comments.map((comment) => {
              return <li key={comment.comment_id}>{comment.body}</li>;
            })}
          </ul>
          <form onSubmit={handleSubmit}>
            <label>
              Comment:
              <textarea value={newComment} onChange={handleChange} />
            </label>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {submitSuccess && <p>Your comment has been successfully posted!</p>}
          </form>
        </>
      )}
    </>
  );
}

export default Comments;
