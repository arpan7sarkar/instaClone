# Instagram Clone

A full-stack Instagram clone built with modern web technologies.

## Features

- User Authentication (Register, Login)
- JWT-based session management
- Password hashing with bcrypt
- User profiles with bio and profile image
- Create posts with image uploads
- Image hosting via ImageKit
- Follow/Unfollow users
- RESTful API architecture

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js 5** - Web framework
- **MongoDB** with **Mongoose** - Database & ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **ImageKit** - Image storage & optimization
- **Multer** - File uploads

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB
- ImageKit account

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/instagram-clone.git
cd instagram-clone
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Create `.env` file in `backend/`
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
PORT=3000
```

4. Start the development server
```bash
npm run dev
```

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | Login user |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/post` | Create new post |
| GET | `/api/v1/post` | Get user's posts |
| GET | `/api/v1/post/:id` | Get post details |

## Project Structure

```
instagram/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   └── routes/
│   ├── server.js
│   └── package.json
└── frontend/
```

## Status

This is just the beginning. I will complete this one as time follows. Right now just built a few backend features. In the future, I plan to complete the whole project.

## TODO

### Backend
- [ ] User profile update/delete
- [ ] Follow/Unfollow functionality
- [ ] Feed algorithm (following posts)
- [ ] Like/Unlike posts
- [ ] Comments on posts
- [ ] Save posts
- [ ] Search users
- [ ] Explore page (trending posts)
- [ ] Direct messaging
- [ ] Notifications
- [ ] Stories feature
- [ ] Reels feature
- [ ] Block/Report users
- [ ] Email verification
- [ ] Password reset
- [ ] Pagination for posts

### Frontend
- [ ] Setup React/Vue/Next.js
- [ ] Authentication pages (Login, Register)
- [ ] Home feed
- [ ] User profile page
- [ ] Create post UI
- [ ] Explore page
- [ ] Notifications panel
- [ ] Direct messages UI
- [ ] Stories UI
- [ ] Responsive design
- [ ] Dark/Light mode

## License

MIT
