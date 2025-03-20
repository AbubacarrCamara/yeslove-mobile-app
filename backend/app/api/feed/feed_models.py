from .feed_routes import api
from flask_restx import fields

FeedQuery = api.model("FeedQuery", {
        "feed_type": fields.String(
            required=False, 
            description="Type of feed: 'all', 'mentions', 'favorites', 'friends', 'groups'"
        )
    })

CreatePostRequest= api.model("CreatePostRequest", {
        "content": fields.String(required=True, description="Content of the post"),
    })

LikePostRequest = api.model("LikePostRequest", {
        "post_id": fields.Integer(required=True, description="ID of the post to like or unlike"),
    })

AddCommentRequest = api.model("AddCommentRequest", {
        "content": fields.String(required=True, description="Content of the comment"),
    })

FollowUserRequest = api.model("FollowUserRequest", {
        "action": fields.String(required=True, description="'follow' to follow, 'unfollow' to unfollow")
    })


ReactionRequest = api.model("ReactionRequest", {
        "reaction_type": fields.String(
            required=True,
            description="Reaction type: 'like', 'love', 'laugh', 'angry', etc."
        )
    })

GetProfileRequest = api.model("GetProfileRequest", {})

GetFollowersRequest = api.model("GetFollowersRequest", {})

GetFollowingRequest = api.model("GetFollowingRequest", {})
