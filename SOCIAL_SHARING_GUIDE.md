# Hướng Dẫn Chia Sẻ Mạng Xã Hội

## Tổng Quan
Dự án này đã được tối ưu hóa để hiển thị banner đẹp khi chia sẻ link trên các nền tảng mạng xã hội.

## Các Tính Năng Đã Thêm

### 1. Open Graph Meta Tags
- **Facebook, LinkedIn**: Hiển thị title, description, image và thông tin sự kiện
- **Image**: Sử dụng logo PeaSoft Vietnam làm banner
- **Locale**: Được thiết lập cho tiếng Việt (vi_VN)

### 2. Twitter Cards
- **Card Type**: `summary_large_image` - Hiển thị ảnh lớn
- **Tối ưu**: Cho Twitter và các nền tảng tương tự

### 3. PWA Support
- **Manifest**: File `manifest.json` cho Progressive Web App
- **Icons**: Sử dụng logo làm icon
- **Theme**: Màu sắc phù hợp với thiết kế

### 4. SEO Optimization
- **Structured Data**: JSON-LD cho Google
- **Keywords**: Từ khóa liên quan đến sự kiện
- **Canonical URL**: Tránh duplicate content

## Cách Kiểm Tra

### 1. Facebook Debugger
```
https://developers.facebook.com/tools/debug/
```
Nhập URL của website để xem preview

### 2. Twitter Card Validator
```
https://cards-dev.twitter.com/validator
```
Kiểm tra Twitter Card

### 3. LinkedIn Post Inspector
```
https://www.linkedin.com/post-inspector/
```
Kiểm tra LinkedIn preview

## Cấu Trúc File

```
├── components/
│   └── SEOHead.tsx          # Component quản lý meta tags
├── public/
│   ├── PeaSoft Vietnam.webp # Logo chính
│   └── manifest.json        # PWA manifest
└── pages/
    └── index.tsx           # Trang chính sử dụng SEOHead
```

## Tùy Chỉnh

### Thay Đổi URL
Trong `components/SEOHead.tsx`, cập nhật:
```typescript
url = "https://your-domain.com/your-path"
```

### Thay Đổi Logo
1. Thay thế file `/public/PeaSoft Vietnam.webp`
2. Cập nhật đường dẫn trong `SEOHead.tsx`

### Thay Đổi Nội Dung
Cập nhật các props trong `SEOHead` component:
```typescript
<SEOHead 
  title="Tiêu đề mới"
  description="Mô tả mới"
  image="/path-to-new-image.webp"
/>
```

## Lưu Ý Quan Trọng

1. **Kích thước ảnh**: Khuyến nghị 1200x630px cho Open Graph
2. **Format**: Sử dụng WebP cho hiệu suất tốt nhất
3. **Alt text**: Luôn có alt text cho accessibility
4. **Testing**: Luôn test trên các nền tảng thực tế

## Kết Quả Mong Đợi

Khi chia sẻ link, người dùng sẽ thấy:
- ✅ Logo PeaSoft Vietnam
- ✅ Tiêu đề sự kiện
- ✅ Mô tả chi tiết
- ✅ Thông tin sự kiện (ngày, giờ, địa điểm)
- ✅ Màu sắc và theme phù hợp
