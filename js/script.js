$(document).ready(function () {
  const startDate = new Date("1956-05-12T18:00:00");

  function updateElapsedTime() {
    const now = new Date();
    const diffInMilliseconds = now - startDate;
    const diffInSeconds = (diffInMilliseconds / 1000).toFixed(2); // 소수 둘째 자리까지 나타내기

    document.getElementById(
      "elapsed-time"
    ).textContent = `${diffInSeconds} Seconds`;
  }

  updateElapsedTime();
  setInterval(updateElapsedTime, 100); // 매 0.1초마다 업데이트하여 부드러운 값 변화

  $(window).on("scroll", function () {
    $(".fade-in").each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < windowBottom - 100) {
        $(this).addClass("visible");
      }
    });
  });
});
