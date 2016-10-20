export default ({ body }) => {
  return `
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root">${body}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `;
};
