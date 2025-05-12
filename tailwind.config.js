module.exports = {
    content: [
        "./index.html", // Quét file index.html ở thư mục gốc
        "./src/**/*.{html,js}", // Nếu sau này bạn thêm file HTML hoặc JS trong src, Tailwind sẽ quét
        "./node_modules/tw-elements/js/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: 'red',   // cấu hình màu primary
            100: '#990000'     // có thể cấu hình sâu hơn về màu sắc của primary
          },
         
        },
      },
    },
    plugins: [require("tw-elements/plugin.cjs")],
    darkMode: "class"
  };