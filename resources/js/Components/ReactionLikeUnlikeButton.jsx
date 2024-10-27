import { Button } from "react-bootstrap";

export default function ReactionLikeUnlike({ isLike, count }) {
    const iconClass = isLike ? "fa-thumbs-up" : "fa-thumbs-down";
    return (
        <Button variant="light">
            <i className={`fa-regular ${iconClass} fa-lg`}></i> {count}
        </Button>
    );
}