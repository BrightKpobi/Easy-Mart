// schema.prisma

generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "postgresql"
    url = env("DATABASE_URL")
}

// -----------------------------
// Users & Roles
// -----------------------------
model User {
  id        String @id @default (uuid())
  name      String
  email     String @unique
  password  String
  createdAt DateTime @default (now())
  updatedAt DateTime @updatedAt

  roles     UserRole[]  @relation("UserRoles")
  cartItems CartItem[]
  orders    Order[]
  favorites Favorite[]
  products  Product[]   // if user is a seller
}

model Role {
  id    String @id @default (uuid())
  name  String @unique     // "USER", "SELLER", "ADMIN"
  users User[]   @relation("UserRoles")
}

// -----------------------------
// Categories & Products
// -----------------------------
model Category {
  id       String @id @default (uuid())
  name     String
  slug     String @unique
  products Product[]
}

model Product {
  id          String @id @default (uuid())
  name        String
  slug        String @unique
  description String
  price       Float
  rating      Float @default (0)
  image       String
  categoryId  String
  sellerId    String
  createdAt   DateTime @default (now())
  updatedAt   DateTime @updatedAt

  category    Category @relation(fields: [categoryId], references: [id])
  seller      User @relation(fields: [sellerId], references: [id])
  cartItems   CartItem[]
  orderItems  OrderItem[]
  favorites   Favorite[]
}

// -----------------------------
// Cart
// -----------------------------
model CartItem {
  id        String @id @default (uuid())
  userId    String
  productId String
  quantity  Int @default (1)
  createdAt DateTime @default (now())
  updatedAt DateTime @updatedAt

  user     User @relation(fields: [userId], references: [id])
  product  Product @relation(fields: [productId], references: [id])
}

// -----------------------------
// Orders
// -----------------------------
model Order {
  id         String @id @default (uuid())
  userId     String
  total      Float
  status     String @default ("pending") // pending, completed, canceled
  createdAt  DateTime @default (now())
  updatedAt  DateTime @updatedAt

  user       User @relation(fields: [userId], references: [id])
  orderItems OrderItem[]
}

model OrderItem {
  id        String @id @default (uuid())
  orderId   String
  productId String
  quantity  Int
  price     Float

  order     Order @relation(fields: [orderId], references: [id])
  product   Product @relation(fields: [productId], references: [id])
}

// -----------------------------
// Favorites (Heart button)
// -----------------------------
model Favorite {
  id        String @id @default (uuid())
  userId    String
  productId String
  createdAt DateTime @default (now())

  user      User @relation(fields: [userId], references: [id])
  product   Product @relation(fields: [productId], references: [id])

    @@unique([userId, productId]) // prevent duplicate favorites
}
