# 📊 Dashboard API

هذا مشروع **Backend** لواجهة Dashboard، مبني بـ:
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 🚀 المميزات
- إدارة المستخدمين (CRUD)
- تصميم RESTful API
- قابل للتكامل مع أي واجهة Frontend

---

## 📂 هيكل المشروع
src/
├── app.js # ملف التشغيل الرئيسي
├── controllers/ # المنطق البرمجي
├── module/ # قواعد البيانات والنماذج
├── routers/ # مسارات API
├── .env # المتغيرات البيئية


---

## ⚙️ التشغيل
1. نسخ المشروع:
```bash
git clone https://github.com/MhmdEltoum22/Dashbord-Pro.git
cd Dashbord-Pro


تثبيت الحزم:

npm install
إنشاء ملف .env:

PORT=3000
DB_URL=mongodb://localhost:27017/Dashboard
تشغيل السيرفر:
npm run dev
📬 مسارات الـ API
طريقة	المسار	الوصف
GET	/api/users	عرض كل المستخدمين
GET	/api/users/:id	عرض مستخدم واحد
POST	/api/users	إضافة مستخدم
PUT	/api/users/:id	تعديل مستخدم
DELETE	/api/users/:id	حذف مستخدم

