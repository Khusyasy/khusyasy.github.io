const marked = require("marked");
const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");
const src_path = "./src/";
const folder = "projects";

const layout = fs.readFileSync(path.join(src_path, folder, "layout.src"), 'utf8');

let projects_file = [];

fs.readdirSync(path.join(src_path, folder)).forEach(file => {
  let [name, ext] = file.split(".");
  if(ext !== "src") return;

  let file_to_create = name + ".html";

  try {
    const data = fs.readFileSync(path.join(src_path, folder, file), 'utf8');

    let gm = matter(data);
    let html = layout;
    let content = gm.content;
    for(d of Object.entries(gm.data)){
      html = html.replace(RegExp(`{[ ]*${d[0]}[ ]*}`, "g"), d[1]);
      content = content.replace(RegExp(`{[ ]*${d[0]}[ ]*}`, "g"), d[1]);
    }
    html = html.replace(RegExp(`{[ ]*content[ ]*}`), marked(content));

    fs.writeFileSync(path.join(src_path, folder, file_to_create), html);

    projects_file.push({file: file_to_create, ...gm.data});
    
  } catch (err) {
    console.error(err)
  }
});

const card_layout = fs.readFileSync(path.join(src_path, "project-card.src"), 'utf8');
let cards = "";

projects_file = projects_file.filter(e=>e.order>0);
projects_file.sort((a,b) => a.order-b.order);

projects_file.forEach(project => {
  let card = card_layout;
  for(d of Object.entries(project)){
    card = card.replace(RegExp(`{[ ]*${d[0]}[ ]*}`, "g"), d[1]);
  }
  cards += card + "\n";
});

let index = fs.readFileSync(path.join(src_path, "index.src"), 'utf8');
index = index.replace(RegExp(`{[ ]*project-card[ ]*}`, "g"), cards);

fs.writeFileSync(path.join(src_path, "index.html"), index);