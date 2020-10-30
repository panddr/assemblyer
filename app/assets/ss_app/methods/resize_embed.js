document.addEventListener('DOMContentLoaded', () => {
  const resizeEmbed = function () {
    const embeds = document.querySelectorAll(".embed");

    Array.from(embeds).slice().map((embed) => {
      const embedContent = embed.childNodes[0];
      const defaultHeight = embedContent.getAttribute("height");
      const defaultWidth = embedContent.getAttribute("width");
      let height;

      if (defaultWidth && defaultHeight && !defaultWidth.match(/\%/)) {
        const ratio = parseFloat(defaultWidth) / parseFloat(defaultHeight);
        height = embed.clientWidth / ratio;
        embedContent.style.height = height + "px";
      }
    })
  }

  resizeEmbed();

  window.addEventListener("resize", resizeEmbed);
});
