const capitalize = (str) =>
  str.slice(0, 1).toUpperCase() + str.slice(1, str.length);

export const greet = (name) => {
  const capitalizedName = capitalize(name);
  const hour = new Date().getHours();
  const greetMessage = hour >= 6 && hour < 12 ? 'Good morning' : 'Hello';
  return `${greetMessage} ${capitalizedName}`;
};
// 時刻によってGood morningとHelloに挨拶の文言が切り替わることから、単純に関数を実行する場合、テストを実行した時刻によって結果が変わってしまいます
// Date関数をモック化し、指定した時間を取得する必要がある
