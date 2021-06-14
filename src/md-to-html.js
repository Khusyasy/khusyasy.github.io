const marked = require("marked");
const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");
const src_path = "./src/";
const folder = "projects";

const layout = fs.readFileSync(path.join(src_path, folder, "layout.html"), 'utf8');

fs.readdirSync(path.join(src_path, folder)).forEach(file => {
  let [name, ext] = file.split(".");
  if(ext !== "md") return;

  let file_to_create = name + ".html";

  try {
    const data = fs.readFileSync(path.join(src_path, folder, file), 'utf8');

    let gm = matter(data);
    let html = layout;
    for(d of Object.entries(gm.data)){
      html = html.replace(RegExp(`{[ ]*${d[0]}[ ]*}`), d[1]);
    }
    html = html.replace(RegExp(`{[ ]*content[ ]*}`), marked(gm.content));

    const write = fs.writeFileSync(path.join(src_path, folder, file_to_create), html);
    
  } catch (err) {
    console.error(err)
  }
  
});