User.create!(username: "Bob", email: "bob@gmail.com", password: "password", avatar: "https://www.singers.com/people/images/Bob_Chilcott.jpg")
User.create!(username: "Mrs. O'Leary", email: "cat@oleary.com", password: "password", avatar: "http://vmbulletin.com/wp-content/uploads/2014/09/cow1.png")
User.create!(username: "Jeff Goldblum", email: "jeff@goldblum.com", password: "password", avatar: "http://www.movpins.com/big/MV5BMjI5NzUwMjcyNF5BMl5BanBnXkFtZTcwMjg4MTY3Ng/still-of-jeff-goldblum-in-the-lost-world:-jurassic-park-(1997)-large-picture.jpg")
User.create!(username: "Nicolas Cage", email: "nic@cage.com", password: "password", avatar: "http://www.tasteofcinema.com/wp-content/uploads/2014/12/best-nicholas-cage-movies.jpg")
User.create!(username: "Jeff Bridges", email: "jeff@bridges.com", password: "password", avatar: "https://www.berlinale.de/media/60_jubilaeum_1/starportraits/2011_4/2011-02-10-9358-0662_Jeff_Bridges_IMG_x900.jpg")
User.create!(username: "Frank Sinatra", email: "frank@sinatra.com", password: "password", avatar: "http://i.huffpost.com/gen/1342317/images/o-FRANK-SINATRA-facebook.jpg")
ellen = User.create!(username: "Ellen Degeneres", email: "ellen@degeneres.com", password: "password", avatar: "http://i3.kym-cdn.com/entries/icons/original/000/016/750/Ellen-Degeneres.jpg")
grace = User.create!(username: "Grace Hopper", email: "grace@hopper.com", password: "password", avatar: "http://i.telegraph.co.uk/multimedia/archive/02759/grace-hopper_2759716k.jpg")

dog1 = Dog.create!(owner: User.find_by(username: "Bob"), name: "Spot", birthday: "January 5, 1999", breed: "Dalmation", avatar: "http://upload.wikimedia.org/wikipedia/commons/3/37/Female_dalmatian_head_shot.jpg")
dog2 = Dog.create!(owner: User.find_by(username: "Bob"), name: "Fido", birthday: "January 1, 1999", breed: "Terrier", avatar: "http://i284.photobucket.com/albums/ll2/clement20/Dog_0013.jpg")
dog3 = Dog.create!(owner: User.find_by(username: "Jeff Goldblum"), name: "Jalapeno", birthday: "October 10, 1871", breed: "Labrador", avatar: "https://s-media-cache-ak0.pinimg.com/736x/46/56/2c/46562c4d64ffa9b79b30abf3aa952779.jpg")
dog4 = Dog.create!(owner: User.find_by(username: "Jeff Goldblum"), name: "Max", birthday: "October 10, 1900", breed: "Ducktail Retriever", avatar: "http://www.puppyfind.com/breed/nova_scotia_duck_tolling_retriever/l_659068.jpg")
dog5 = Dog.create!(owner: User.find_by(username: "Nicolas Cage"), name: "Ruffis", birthday: "October 23, 1903", breed: "Yorkshire Terrier", avatar: "http://cdn-3.dooziedog.com/dog_breeds/yorkshire_terrier/images/full/Yorkshire-Terrier-Puppy-9.jpg")
dog6 = Dog.create!(owner: User.find_by(username: "Jeff Bridges"), name: "Rover", birthday: "October 23, 1927", breed: "Great Dane", avatar: "http://1.bp.blogspot.com/-8u0oNC1ghYk/TvOcHQ_9wCI/AAAAAAAAA2M/cm9TSLPx2AI/s1600/great-dane-black.jpg")
dog7 = Dog.create!(owner: User.find_by(username: "Frank Sinatra"), name: "Spike", birthday: "January 1, 1950", breed: "Sheltie", avatar: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBY5NWIEhimHZi8N0c0ycIXikrsSDuQFFCt12OqBKxgmXmrUyfGA")
dog8 = Dog.create!(owner: User.find_by(username: "Ellen Degeneres"), name: "Morty", birthday: "June 1, 1660", breed: "Irish Setter", avatar: "http://www.dogwatch.com/dogtails/wp-content/uploads/2012/03/4822696256_9457f33093_z.jpg")
dog9 = Dog.create!(owner: User.find_by(username: "Grace Hopper"), name: "Rex", birthday: "July 4, 2007", breed: "Pointer", avatar: "https://s-media-cache-ak0.pinimg.com/236x/eb/ec/f7/ebecf742a0bb2bb5d8e92e599a5617c7.jpg")


# DBC Walkabout
dog1.walks << Walk.create!(user_id: 1)
Mark.create!(walk_id: 1, coords:'POINT(-122.0312  37.3318)', accuracy: 20)
Mark.create!(walk_id: 1, coords:'POINT(-122.03285  37.33262)', accuracy: 20)
Mark.create!(walk_id: 1, coords:'POINT(-122.03419  37.3343)', accuracy: 20)
Mark.create!(walk_id: 1, coords:'POINT(-122.03082  37.33434)', accuracy: 20)
Mark.create!(walk_id: 1, coords:'POINT(-122.03076  37.3335)', accuracy: 20)
Mark.create!(walk_id: 1, coords:'POINT(-122.02929  37.3335)', accuracy: 20)
Mark.create!(walk_id: 1, coords:'POINT(-122.02926  37.33194)', accuracy: 20)
Mark.create!(walk_id: 1, coords:'POINT(-122.0312  37.3318)', accuracy: 20)

dog1.walks << Walk.create!(user_id: 1)
Mark.create!(walk_id: 2, coords:'POINT(-122.0312  37.3318)', accuracy: 20)
Mark.create!(walk_id: 2, coords:'POINT(-122.02618  37.33197)', accuracy: 20)
Mark.create!(walk_id: 2, coords:'POINT(-122.02618  37.32769)', accuracy: 20)
Mark.create!(walk_id: 2, coords:'POINT(-122.03059  37.32769)', accuracy: 20)
Mark.create!(walk_id: 2, coords:'POINT(-122.03034  37.3281)', accuracy: 20)
Mark.create!(walk_id: 2, coords:'POINT(-122.02905  37.32884)', accuracy: 20)
Mark.create!(walk_id: 2, coords:'POINT(-122.03054  37.3304)', accuracy: 20)
Mark.create!(walk_id: 2, coords:'POINT(-122.03071  37.33107)', accuracy: 20)
Mark.create!(walk_id: 2, coords:'POINT(-122.0312  37.3318)', accuracy: 20)

dog1.walks << Walk.create!(user_id: 1)
Mark.create!(walk_id: 3, coords:'POINT(-122.0312 37.3318)', accuracy: 20)
Mark.create!(walk_id: 3, coords:'POINT(-122.03227 37.33186)', accuracy: 20)
Mark.create!(walk_id: 3, coords:'POINT(-122.03178 37.33105)', accuracy: 20)
Mark.create!(walk_id: 3, coords:'POINT(-122.03383 37.33105)', accuracy: 20)
Mark.create!(walk_id: 3, coords:'POINT(-122.03542 37.33302)', accuracy: 20)
Mark.create!(walk_id: 3, coords:'POINT(-122.03521 37.33335)', accuracy: 20)
Mark.create!(walk_id: 3, coords:'POINT(-122.02626 37.33356)', accuracy: 20)
Mark.create!(walk_id: 3, coords:'POINT(-122.02626 37.33198)', accuracy: 20)
Mark.create!(walk_id: 3, coords:'POINT(-122.0312 37.3318)', accuracy: 20)

dog2.walks << Walk.create!(user_id: 2)
Mark.create!(walk_id: 4, coords:'POINT(-122.0312 37.3318)', accuracy: 20)
Mark.create!(walk_id: 4, coords:'POINT(-122.03285 37.33262)', accuracy: 20)
Mark.create!(walk_id: 4, coords:'POINT(-122.03419 37.3343)', accuracy: 20)
Mark.create!(walk_id: 4, coords:'POINT(-122.03082 37.33434)', accuracy: 20)
Mark.create!(walk_id: 4, coords:'POINT(-122.03076 37.3335)', accuracy: 20)
Mark.create!(walk_id: 4, coords:'POINT(-122.02929 37.3335)', accuracy: 20)
Mark.create!(walk_id: 4, coords:'POINT(-122.02926 37.33194)', accuracy: 20)
Mark.create!(walk_id: 4, coords:'POINT(-122.0312 37.3318)', accuracy: 20)

dog2.walks << Walk.create!(user_id: 2)
Mark.create!(walk_id: 5, coords:'POINT(-122.0312 37.3318)', accuracy: 20)
Mark.create!(walk_id: 5, coords:'POINT(-122.01443 37.33262)', accuracy: 20)
Mark.create!(walk_id: 5, coords:'POINT(-122.01451 37.32282)', accuracy: 20)
Mark.create!(walk_id: 5, coords:'POINT(-122.01821 37.32282)', accuracy: 20)
Mark.create!(walk_id: 5, coords:'POINT(-122.03076 37.3335)', accuracy: 20)
Mark.create!(walk_id: 5, coords:'POINT(-122.01821 37.32405)', accuracy: 20)
Mark.create!(walk_id: 5, coords:'POINT(-122.03079 37.32405)', accuracy: 20)
Mark.create!(walk_id: 5, coords:'POINT(-122.0312 37.3318)', accuracy: 20)

dog2.walks << Walk.create!(user_id: 2)
Mark.create!(walk_id: 6, coords:'POINT(-122.0312 37.3318)', accuracy: 20)
Mark.create!(walk_id: 6, coords:'POINT(-122.03052 37.32647)', accuracy: 20)
Mark.create!(walk_id: 6, coords:'POINT(-122.03793 37.32647)', accuracy: 20)
Mark.create!(walk_id: 6, coords:'POINT(-122.03811 37.33431)', accuracy: 20)

dog3.walks << Walk.create!(user_id: 3)
Mark.create!(walk_id: 7, coords:'POINT(-122.01817 37.32637)', accuracy: 20)
Mark.create!(walk_id: 7, coords:'POINT(-122.01784 37.30944)', accuracy: 20)
Mark.create!(walk_id: 7, coords:'POINT(-122.01418 37.30945)', accuracy: 20)
Mark.create!(walk_id: 7, coords:'POINT(-122.01439 37.32027)', accuracy: 20)
Mark.create!(walk_id: 7, coords:'POINT(-122.01104 37.32032)', accuracy: 20)
Mark.create!(walk_id: 7, coords:'POINT(-122.01119 37.32284)', accuracy: 20)
Mark.create!(walk_id: 7, coords:'POINT(-122.01445 37.32284)', accuracy: 20)
Mark.create!(walk_id: 7, coords:'POINT(-122.01439 37.32621)', accuracy: 20)

dog4.walks << Walk.create!(user_id: 4)
Mark.create!(walk_id: 8, coords:'POINT(-122.01981 37.31891)', accuracy: 20)
Mark.create!(walk_id: 8, coords:'POINT(-122.01822 37.31891)', accuracy: 20)
Mark.create!(walk_id: 8, coords:'POINT(-122.01822 37.32016)', accuracy: 20)
Mark.create!(walk_id: 8, coords:'POINT(-122.01822 37.32148)', accuracy: 20)
Mark.create!(walk_id: 8, coords:'POINT(-122.02315 37.3227)', accuracy: 20)
Mark.create!(walk_id: 8, coords:'POINT(-122.02315 37.32016)', accuracy: 20)
dog5.walks << Walk.create!(user_id: 5)
Mark.create!(walk_id: 9, coords:'POINT(-122.02595 37.32005)', accuracy: 20)
Mark.create!(walk_id: 9, coords:'POINT(-122.03481 37.32002)', accuracy: 20)
Mark.create!(walk_id: 9, coords:'POINT(-122.03499 37.32373)', accuracy: 20)
Mark.create!(walk_id: 9, coords:'POINT(-122.03039 37.32373)', accuracy: 20)
Mark.create!(walk_id: 9, coords:'POINT(-122.02739 37.32312)', accuracy: 20)
Mark.create!(walk_id: 9, coords:'POINT(-122.02623 37.32312)', accuracy: 20)
Mark.create!(walk_id: 9, coords:'POINT(-122.0261 37.32002)', accuracy: 20)

dog6.walks << Walk.create!(user_id: 6)
Mark.create!(walk_id: 10, coords:'POINT(-122.0241 37.30921)', accuracy: 20)
Mark.create!(walk_id: 10, coords:'POINT(-122.02404 37.30472)', accuracy: 20)
Mark.create!(walk_id: 10, coords:'POINT(-122.02398 37.30385)', accuracy: 20)
Mark.create!(walk_id: 10, coords:'POINT(-122.02262 37.30385)', accuracy: 20)
Mark.create!(walk_id: 10, coords:'POINT(-122.02114 37.30389)', accuracy: 20)
Mark.create!(walk_id: 10, coords:'POINT(-122.02117 37.30601)', accuracy: 20)
Mark.create!(walk_id: 10, coords:'POINT(-122.02121 37.30922)', accuracy: 20)

dog7.walks << Walk.create!(user_id: 7)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02406 37.30385)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02406 37.30269)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02406 37.30091)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02402 37.29975)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02561 37.29978)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02833 37.29971)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02833 37.29954)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02649 37.29963)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02554 37.29963)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02398 37.29963)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02112 37.2997)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.0208 37.29975)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02082 37.30389)', accuracy: 20)
Mark.create!(walk_id: 11, coords: 'POINT(-122.02097 37.30615)', accuracy: 20)

dog8.walks << Walk.create!(user:ellen)
Mark.create!(walk_id: 12, coords: 'POINT(-122.03342 37.32384)', accuracy: 20)
Mark.create!(walk_id: 12, coords: 'POINT(-122.03282 37.32761)', accuracy: 20)
Mark.create!(walk_id: 12, coords: 'POINT(-122.03651 37.32761)', accuracy: 20)
Mark.create!(walk_id: 12, coords: 'POINT(-122.03797 37.32761)', accuracy: 20)
Mark.create!(walk_id: 12, coords: 'POINT(-122.03788 37.3264)', accuracy: 20)
Mark.create!(walk_id: 12, coords: 'POINT(-122.03788 37.32384)', accuracy: 20)
Mark.create!(walk_id: 12, coords: 'POINT(-122.03779 37.3225)', accuracy: 20)
Mark.create!(walk_id: 12, coords: 'POINT(-122.03496 37.32256)', accuracy: 20)

dog9.walks << Walk.create!(user:grace)
Mark.create!(walk_id: 13, coords: 'POINT(-122.03565 37.32761)', accuracy: 20)
Mark.create!(walk_id: 13, coords: 'POINT(-122.04114 37.32761)', accuracy: 20)
Mark.create!(walk_id: 13, coords: 'POINT(-122.04346 37.32621)', accuracy: 20)
Mark.create!(walk_id: 13, coords: 'POINT(-122.04355 37.32378)', accuracy: 20)
Mark.create!(walk_id: 13, coords: 'POINT(-122.03985 37.32359)', accuracy: 20)
Mark.create!(walk_id: 13, coords: 'POINT(-122.03565 37.32755)', accuracy: 20)

