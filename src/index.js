import React from "react";
import ReactDOM from "react-dom";

const image =
  "https://i1.wp.com/fantasy-hive.co.uk/wp-content/uploads/2019/12/Writing-Magic-Systems-Feature.jpg?resize=400%2C290&ssl=1";

// use picsum image
const image2 = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    {/* to style by adding class */}
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      {/* make it editable */}
      <li contentEditable="true">Bacon</li>
      {/* turn off the spellcheck */}
      <li contentEditable="true" spellCheck="false">
        Jamon
      </li>
      <li>Noodles</li>
    </ul>
    <div>
      <img
        src="https://cdn.vox-cdn.com/thumbor/EmNv6IOP4bxoFbdvkfT293dnGzM=/0x0:1000x750/920x613/filters:focal(420x295:580x455):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63709983/mobile-magic_chanpipatshutterstock.0.1509812513.0.jpg"
        alt=""
      />
      <img
        src="https://i1.wp.com/fantasy-hive.co.uk/wp-content/uploads/2019/12/Writing-Magic-Systems-Feature.jpg?resize=400%2C290&ssl=1"
        alt=""
      />
      <img src={image} alt=""></img>
      {/* chg to grayscale */}
      <img src={image2 + "?grayscale"} alt=""></img>
    </div>
  </div>,
  document.getElementById("root")
);
