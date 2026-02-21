Features
==========

### Authentication

*   Login
*   Logout (token blacklisting)
*   Signup
*   OTP-based registration

### Post

*   Create
*   Feed
*   Like posts (collection types)
*   Save post

### User

*   Follow
*   Followers
*   Following



#### UserSchema
user = {
    username : String ,
    email: String , unique,
    password : String ,
    bio:String ,
    profileImage:String ,
    followers
}

#### PostSchema
post = {
    caption:String,
    imageUrl:String,
    user:userId,
    createdAt:Date-time
}
