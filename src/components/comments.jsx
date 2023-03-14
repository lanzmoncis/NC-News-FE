function Comments({ comments }) {
  return (
    <>
      <ul>
        {comments.map((comment) => {
          return <li key={comment.comment_id}>{comment.body}</li>;
        })}
      </ul>
    </>
  );
}

export default Comments;
