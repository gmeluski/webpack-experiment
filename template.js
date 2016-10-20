export default ({ body }) => {
  return `
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
