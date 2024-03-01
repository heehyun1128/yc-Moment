from flask import Blueprint, request
from app.models import Hashtag, db
from flask_login import login_required
from ..forms.hashtag_form import HashtagForm
from .auth_routes import validation_errors_to_error_messages

hashtag_routes = Blueprint("hashtags", __name__)

@hashtag_routes.route('/')
def get_hashtags():
    
    all_hashtags=Hashtag.query.all()
    hashtag_dict={}
    for hashtag in all_hashtags:
        data=hashtag.to_dict()
        hashtag_dict[str(hashtag.id)]=data
    return {"hashtags":hashtag_dict}

@hashtag_routes.route('/', methods=["POST"])
def add_hashtag():
    
    form = HashtagForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        hashtag = Hashtag(
            name = form.data["name"]
        )
        db.session.add(hashtag)
        db.session.commit()
        return hashtag.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400