// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前时间（小时）
    const currentHour = new Date().getHours();

    // 获取 body 元素
    const body = document.body;

    // 根据当前小时来设置渐变背景
    let gradient = '';

    if (currentHour >= 6 && currentHour < 12) {
        // 白天：6AM - 12PM（早晨到中午）
        gradient = 'linear-gradient(to right, #ff7e5f, #feb47b)';
    } else if (currentHour >= 12 && currentHour < 18) {
        // 下午：12PM - 6PM
        gradient = 'linear-gradient(to right, #ff9a8b, #ff6a88)';
    } else if (currentHour >= 18 && currentHour < 21) {
        // 傍晚：6PM - 9PM
        gradient = 'linear-gradient(to right, #4facfe, #00f2fe)';
    } else {
        // 晚上：9PM - 6AM
        gradient = 'linear-gradient(to right, #2c3e50, #fd746c)';
    }

    // 设置 body 背景为动态渐变
    body.style.background = gradient;

    // 如果你想要渐变平滑过渡，可以添加过渡效果
    body.style.transition = 'background 1s ease-in-out';
});
