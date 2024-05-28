// const loggedInHTML = `<img
// class="header-social-img"
// src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAzpJREFUaEPtmFuIjVEUx39/PEhSPElMeJkHt8iDB/KINDQu0WiQDJOncckDuZXLg1seeHApIbcUUTxIkjxIaRLlWlJKKKNMlFi+Xd+MM99835y9z3eOaXL24zlr/df/v9bea6/9iT6+1Mf5UxXQ2xWsVqBagZwZqG6hnAnM7f7/VcDMRgAtwFRgYpzCVuAxcEDSx9xpDQAIqoCZrQYOR0QHZ8T4CqyVdCmAQy5TbwFmtgnY7xmtUdI5T9tcZl4CzGws8BLo7xntO1Aj6bOnfclmvgKOAusCo2yTtDvQJ9jcV8A7YFQg+kNJ0wJ9gs19BVgwMnyRNKwEvy4uZjZT0r0sHF8B7cCgQDLtkrK6lReUma0CTgL7JG1Nc/IV8Byo9Yr61+iZpPGBPp3mMflTBf4bJR1K4vkKcI7rA8nszcpaMRwzawTOpNjVSnLdsHP5CqgB3gADigWP//8BjJH0wdO+MPOLAHcR9ivwdWdwpaRuorwEOCAz2wAc9CS0TNJ5T9sk+YuJ+yaTvHP0FhCLaI5FZB3oNqAp2vtXeiJvZjMk3S+0MbOFQJrfcklnc3WhRKCRgKvGlHiY+wk8AR65OUnSpyLk3TjixpIlki7HiZkPXEvxa5B0oSe8oAqEbomkvZltAfYU/D4r3us3EufrF7BY0tViMf+ZADMbBzxNEHKHfWAKyQU+5IPOgJk1ALOBScBoYEgisBul3wLubXArbaQ2sybgeJGs1ktK206pbkUrYGZzgGMx6WIVLfz/NdAs6U7iDK2IsE5nAM2T5LaT9+pRgJntjDroDm+07oa/gc2SurRfM1sKuPdCx3juGsFcSbdDY2UKMLNdwPZQwAz7FklHEpWoB1wXcge2rhTymWfAzOqiNnm9TOQ7YKZLepAQ4eJ8k3S31FjdKmBmboJ8BQwvFTTD7wUwIZqP3HYp20oT4F5e7gVWiRXUYXwIpAm4CbjOU4l1QtKacgKnCXgf9Wr37acSq1XS5HICpwlwXxTSbsdyxG2LutHQcgB1YKQJKOX9681JUtHL0xssbZy26PYKAQi1rbiAUEK9bV/WcvaGmKqA3sh6YcxqBaoVyJmB6hbKmcDc7n2+An8AkWDpMUvsiqoAAAAASUVORK5CYII="
// />`;
const loggedInHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
const loggedOutHTML =
  '<a href="./login.html"><i class="fa-regular fa-user"></i></a>';
// const cartHTML = `<a href="./cart.html">
// <img
//   id="cart-icon"
//   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA81JREFUaEPtml2ITVEUx/9/UsjDiDFJHpQ8iAfNNCFfSV4YKUUzJOHVw0QKTT4ilDJ58UBpkq/yIIM3GV9NE0Z58aCRfGZGyseDByx3ZV/dtn3vuedjnzNz792vZ++11m//V3vts84hqmywynhRA650xWsK1xSusB2opXSFCfofTk1h3RIRkRGu9ACAXSSv2RxOhSsAWDl/A6gj+a0QupKBlXMayffVAjxEcko1pfQFkpvKAnYdWCJSD+ADgNHW8+Uk72R1yImIxvMVwHgrho0kL0YGNqf3DQCrLCPnSG7NEHgZAHvDtcpMJPklLvAGAJctI98B1JP8kQW0iBwHsNvy3UdyviueUBcPERkLYAjABMtYK0l7I1LhF5FnAOZazvaTPBQb2KT1WQDbLGO3SNqp7h3YnCuDDkfNuXgeJQW8FECPZewXgKkkVf3UhojoxqsAhUNjaCDpvC2GSmmjsK55o0XdctROsjM12r9X4KsA1lk+z5PcXCyO0MAG+giAvZbRfpKNaQGXKEdtJC8lDTwDwEuH0dkkn6cBLSKLAdyzfBUtR/l5kRQ2Kuuh0GQ5PEZyT0rArizrJbmwlP84wDsAnLKMvwMwvdiBkeRGiEg/gHmWzQ6Sh30B1wH4lMVVs0Q5aiL5xAuwSetuAKstBw8A3E5STYetWQBa7XLkejuy10ZOaQO8HsAVz3Dlmu8iuSVoclzgMQA+O66aQX59PF9BMjCzYgEblc8A2O6DIITN+ySXlDM/CWB1dLccZ57maMNuQbnX2tjARuXXWo4soMcAbnqCzJv9SPJ0GB9JAWvt22c5HiA5M0wwacxNCrjYVTOwLqYBWegjEWCT1n0Ami2AzlybpT1tKG8Xj0LDIuK6av4E0EhSuxLDYiSp8KRceXoLQNtA9tDu4QsPxD0k7WZESTeJAZu0PgFgpwewYiYPkjwQxl/SwJMBaIkaFyaIGHOzBTYqrwSgX+3SgM4e2EBr2/Soo2kfQ0zn0uEBnA8t12SbY3rG2vCze9lJwGd7aCVB4NtGooeW72CTsO8dWEROAmgDoCd4b65Oa6NPP8oFjjhrixn3Ciwi1wG0OJy3BEHHWVtqJ70Bi4j2urTn5RoPSS4qFlictUFp4xO4A4DzC57+cELS/rD+L1YRibw2S2DXy0Q+nsHci3tDCYUjr80SWDsgr3Iqj3IEUfK1UUQir80M2Ny49KeSLgu6m+SaoMBEJPLaTA6tgtuWqrVWfxID8DTodC4M1igdaW0mZSlIxSyeezuls4Apx2cNuJxdGslzagqPZPXKib3qFP4DPc5DTOx+iUAAAAAASUVORK5CYII="
//   alt="icono cart"
// >
// </a>`;
const loginSelector = document.getElementById("login");
const cartSelector = document.getElementById("cart-icon");

export default function updateLoginIcon(onlineStatus) {
  if (onlineStatus) {
    loginSelector.innerHTML = loggedInHTML;
    cartSelector.style.display = "list-item";
  } else {
    loginSelector.innerHTML = loggedOutHTML;
    cartSelector.style.display = "none";
  }
}
