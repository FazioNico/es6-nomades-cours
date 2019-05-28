export const skeleton = (data) => {
  if (!data.email) return alert('no email provided');
  return `
    <div id="timer">13h</div>
    <h1>Hello ${data.email}</h1>
  `;
}