# ��� To-Do List Backend - NestJS + MongoDB

Backend API cho ứng dụng To-Do List được xây dựng bằng NestJS và MongoDB.

## ��� Yêu cầu hệ thống

- Node.js (phiên bản 18 trở lên)
- MongoDB (đã cài đặt và đang chạy)
- npm hoặc yarn

## ���️ Cài đặt

### 1. Đảm bảo MongoDB đang chạy

Mở Command Prompt và chạy:
```bash
mongod
```

Hoặc nếu đã cài MongoDB như một service, MongoDB sẽ tự động chạy.

### 2. Cài đặt dependencies

```bash
npm install
```

## ���‍♂️ Chạy ứng dụng

### Chế độ Development (có hot-reload)
```bash
npm run start:dev
```

### Chế độ Production
```bash
npm run build
npm run start:prod
```

Backend sẽ chạy tại: **http://localhost:3000**

## ��� API Endpoints

### 1. Tạo To-Do mới
- **Method**: `POST`
- **URL**: `http://localhost:3000/todos`
- **Body** (JSON):
```json
{
  "title": "Học NestJS"
}
```
- **Response**:
```json
{
  "_id": "65abc123...",
  "title": "Học NestJS",
  "completed": false,
  "createdAt": "2024-01-12T...",
  "updatedAt": "2024-01-12T..."
}
```

### 2. Lấy danh sách To-Do
- **Method**: `GET`
- **URL**: `http://localhost:3000/todos`
- **Response**:
```json
[
  {
    "_id": "65abc123...",
    "title": "Học NestJS",
    "completed": false,
    "createdAt": "2024-01-12T...",
    "updatedAt": "2024-01-12T..."
  }
]
```

### 3. Cập nhật trạng thái To-Do
- **Method**: `PATCH`
- **URL**: `http://localhost:3000/todos/:id`
- **Body** (JSON):
```json
{
  "completed": true
}
```
- **Response**: Trả về todo đã được cập nhật

### 4. Xóa To-Do
- **Method**: `DELETE`
- **URL**: `http://localhost:3000/todos/:id`
- **Response**: Trả về todo đã bị xóa

## ��� Test API với Thunder Client / Postman

### Cài đặt Thunder Client (Extension trong VS Code)
1. Mở VS Code
2. Vào Extensions (Ctrl + Shift + X)
3. Tìm "Thunder Client"
4. Click Install

### Ví dụ test API:

#### 1. Tạo To-Do mới
- Mở Thunder Client
- Tạo New Request
- Chọn method: `POST`
- URL: `http://localhost:3000/todos`
- Vào tab "Body" → chọn "JSON"
- Nhập:
```json
{
  "title": "Học MongoDB"
}
```
- Click "Send"

#### 2. Lấy danh sách
- Method: `GET`
- URL: `http://localhost:3000/todos`
- Click "Send"

#### 3. Cập nhật
- Method: `PATCH`
- URL: `http://localhost:3000/todos/65abc123...` (thay ID thực tế)
- Body:
```json
{
  "completed": true
}
```
- Click "Send"

#### 4. Xóa
- Method: `DELETE`
- URL: `http://localhost:3000/todos/65abc123...` (thay ID thực tế)
- Click "Send"

## ��� Cấu trúc thư mục

```
todo-backend/
├── src/
│   ├── todos/
│   │   ├── dto.ts              # Data Transfer Objects
│   │   ├── todo.schema.ts      # MongoDB Schema
│   │   ├── todos.controller.ts # API Endpoints
│   │   ├── todos.service.ts    # Business Logic
│   │   └── todos.module.ts     # Module Configuration
│   ├── app.module.ts           # Root Module
│   └── main.ts                 # Entry Point
├── package.json
└── README.md
```

## ��� Cấu hình

### Thay đổi MongoDB URL
Mở file `src/app.module.ts` và sửa connection string:
```typescript
MongooseModule.forRoot('mongodb://localhost:27017/todo-app')
```

### Thay đổi Port
Mở file `src/main.ts` và sửa port:
```typescript
await app.listen(3000); // Đổi thành port khác nếu cần
```

## ❗ Xử lý lỗi thường gặp

### 1. Lỗi: "MongooseError: operation buffering timed out"
- **Nguyên nhân**: MongoDB chưa được khởi động
- **Giải pháp**: Mở Command Prompt và chạy `mongod`

### 2. Lỗi: "Port 3000 is already in use"
- **Nguyên nhân**: Cổng 3000 đã được sử dụng
- **Giải pháp**: Tắt ứng dụng đang dùng cổng 3000 hoặc đổi port trong `main.ts`

### 3. Lỗi CORS khi gọi từ frontend
- **Nguyên nhân**: CORS chưa được cấu hình đúng
- **Giải pháp**: Đã được cấu hình sẵn trong `main.ts`, đảm bảo frontend chạy ở `http://localhost:3001`

## ��� Tài liệu tham khảo

- [NestJS Documentation](https://docs.nestjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
