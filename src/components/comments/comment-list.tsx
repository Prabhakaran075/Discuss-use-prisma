import CommentShow from "@/components/comments/comment-show";

interface Comment {
  id: string;
  parentId: string | null;
  content: string;
  postId: string;
  user: { name: string; image: string };
}

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  const topLevelComments = comments.filter((comment) => comment.parentId === null);

  const renderedComments = topLevelComments.map((comment) => (
    <CommentShow key={comment.id} commentId={comment.id} comments={comments} />
  ));

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
