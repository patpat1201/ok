<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liên hệ</title>
  <link rel="stylesheet" href="contact.css">
</head>
<body>
  <header>
    <h1>Liên hệ</h1>
  </header>

  <main>
    <div class="container">
      <section id="contact-info">
        <h2>Thông tin liên hệ</h2>
        <p>Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào, hãy liên hệ với chúng tôi qua thông tin sau:</p>
        <ul>
          <li>Email: info@example.com</li>
          <li>Số điện thoại: 123-456-7890</li>
          <li>Địa chỉ: 123 Đường ABC, Thành phố XYZ</li>
        </ul>
      </section>

      <section id="contact-form">
        <h2>Gửi tin nhắn</h2>
        <form action="submit-form.php" method="POST">
          <div class="form-group">
            <label for="name">Họ và tên:</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Tin nhắn:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Gửi</button>
        </form>
      </section>
    </div>
  </main>
</body>
</html>
