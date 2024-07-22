import { render } from "preact";

(() => {
  import("@module/banner").then((module) => {
    const app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);
    render(module.default, app);
  });
})();
