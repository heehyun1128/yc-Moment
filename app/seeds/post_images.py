# https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg


from ..models import db, PostImage, environment, SCHEMA
from datetime import datetime
from sqlalchemy.sql import text

curr_date = datetime.now()


def seed_postimages():
  post_images=[
# post-1
    PostImage(
    preview=True,
    post_image_url='	https://images.pexels.com/photos/1907071/pexels-photo-1907071.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=1,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg',
    post_id=1,
    created_at=curr_date,
    updated_at=curr_date
    ),
    # post-2
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/164769/pexels-photo-164769.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=2,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=2,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyegnZASn8QiNSuJZsCYtf8fGLdnewj5cRQ&usqp=CAU',
    post_id=2,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://t4.ftcdn.net/jpg/06/20/14/25/240_F_620142554_R1xbcjpihHeX33sdF1Bhhz8GONMAyrMR.jpg',
    post_id=2,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://t3.ftcdn.net/jpg/05/69/36/82/240_F_569368264_EfL3uEgVfamQR0MNh0MNlEhjE9N02nSZ.jpg',
    post_id=2,
    created_at=curr_date,
    updated_at=curr_date
    ),
    # post-3
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=3,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/3584437/pexels-photo-3584437.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=3,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/1119075/pexels-photo-1119075.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=3,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=3,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/2401665/pexels-photo-2401665.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=3,
    created_at=curr_date,
    updated_at=curr_date
    ),
    # post-4
    PostImage(
    preview=False,
    post_image_url='https://s3-media0.fl.yelpcdn.com/bphoto/92mcXsjz7jBq8afhkI76oA/o.jpg',
    post_id=4,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='https://media-cdn.tripadvisor.com/media/photo-w/1a/7c/8b/73/photo1jpg.jpg',
    post_id=4,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://media-cdn.tripadvisor.com/media/photo-p/19/73/34/e8/photo0jpg.jpg',
    post_id=4,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://media-cdn.tripadvisor.com/media/photo-w/11/37/ee/8e/photo0jpg.jpg',
    post_id=4,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://media-cdn.tripadvisor.com/media/photo-w/14/ae/9d/c3/menu.jpg',
    post_id=4,
    created_at=curr_date,
    updated_at=curr_date
    ),
    # post-5
    PostImage(
    preview=True,
    post_image_url='https://media-cdn.tripadvisor.com/media/photo-w/19/ab/49/ce/yifang.jpg',
    post_id=5,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://media-cdn.tripadvisor.com/media/photo-p/19/ab/3f/83/yifang.jpg',
    post_id=5,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://media-cdn.tripadvisor.com/media/photo-p/18/cd/f5/4e/winter-melon-lemonade.jpg',
    post_id=5,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://media-cdn.tripadvisor.com/media/photo-p/18/cd/f5/33/fresh-milk-tea-with-grass.jpg',
    post_id=5,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://media-cdn.tripadvisor.com/media/photo-p/18/cd/f5/48/sugar-cane-ching.jpg',
    post_id=5,
    created_at=curr_date,
    updated_at=curr_date
    ),
    # post-6
    PostImage(
    preview=True,
    post_image_url='https://s3-media0.fl.yelpcdn.com/bphoto/6ujB-4l4GeiQ0PcXzuja6A/o.jpg',
    post_id=6,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://s3-media0.fl.yelpcdn.com/bphoto/sg4G3yHsYD31nkIz-BcLtw/o.jpg',
    post_id=6,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://s3-media0.fl.yelpcdn.com/bphoto/YujTZ_akKXLQ3bdF69lSQQ/o.jpg',
    post_id=6,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=7,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg',
    post_id=7,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUiy9Xpk28t1Ic4UkQrrtDXvbpewePN153Q&usqp=CAU',
    post_id=7,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    post_id=7,
    created_at=curr_date,
    updated_at=curr_date
    ),
    #8
    PostImage(
    preview=True,
    post_image_url='https://www.rollingstone.com/wp-content/uploads/2021/04/super-junior.jpg?w=1581&h=1054&crop=1',
    post_id=8,
    created_at=curr_date,
    updated_at=curr_date
    ),
    #9
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/11476525/pexels-photo-11476525.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=9,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/8152008/pexels-photo-8152008.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=9,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/11476522/pexels-photo-11476522.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=9,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/6623995/pexels-photo-6623995.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=9,
    created_at=curr_date,
    updated_at=curr_date
    ),
    #10
    PostImage(
    preview=True,
    post_image_url='	https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=10,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/977935/pexels-photo-977935.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=10,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/3643714/pexels-photo-3643714.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=10,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://catinaflat.blog/wp-content/uploads/2022/05/what-is-a-tabby-cat-copy.jpg',
    post_id=10,
    created_at=curr_date,
    updated_at=curr_date
    ),
    #11
   
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=11,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/662417/pexels-photo-662417.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=11,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=11,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=11,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/14666143/pexels-photo-14666143.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=11,
    created_at=curr_date,
    updated_at=curr_date
    ),
    #12
    PostImage(
    preview=True,
    post_image_url='	https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=12,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/3411135/pexels-photo-3411135.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=12,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/16005384/pexels-p…ia-adventure.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=12,
    created_at=curr_date,
    updated_at=curr_date
    ),
    #13
    PostImage(
    preview=True,
    post_image_url='	https://images.pexels.com/photos/925263/pexels-photo-925263.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=13,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/6113860/pexels-photo-6113860.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=13,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/1365428/pexels-photo-1365428.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=13,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/1194235/pexels-photo-1194235.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=13,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/2878712/pexels-photo-2878712.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=14,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/3230010/pexels-photo-3230010.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=14,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/3491211/pexels-photo-3491211.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=14,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=14,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='		https://images.pexels.com/photos/8823444/pexels-photo-8823444.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=15,
    created_at=curr_date,
    updated_at=curr_date
    ),
    
    PostImage(
    preview=False,
    post_image_url='https://images.pexels.com/photos/17063197/pexels-p…-de-la-creme.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=15,
    created_at=curr_date,
    updated_at=curr_date
    ),
    
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/16308667/pexels-p…top-of-a-bed.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=15,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='	https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=16,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='	https://images.pexels.com/photos/13865277/pexels-photo-13865277.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=16,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=False,
    post_image_url='		https://images.pexels.com/photos/18757269/pexels-p…e-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=16,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='	https://images.pexels.com/photos/13811359/pexels-photo-13811359.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=17,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/14043102/pexels-photo-14043102.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=18,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=19,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/4281747/pexels-photo-4281747.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=20,
    created_at=curr_date,
    updated_at=curr_date
    ),
    PostImage(
    preview=True,
    post_image_url='https://images.pexels.com/photos/10577002/pexels-photo-10577002.jpeg?auto=compress&cs=tinysrgb&w=800',
    post_id=21,
    created_at=curr_date,
    updated_at=curr_date
    ),
    
    
   
   
  ]
  db.session.add_all(post_images)
  db.session.commit()

def undo_postimages():
  if environment == 'production':
    db.session.execute(
      f"TRUNCATE table {SCHEMA}.post_images RESTART IDENTITY CASCADE;")
  else:
    db.session.execute(text("DELETE FROM post_images"))
  db.session.commit()