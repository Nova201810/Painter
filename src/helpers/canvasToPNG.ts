const canvasToPNG = (canvas: HTMLCanvasElement) => {
  return canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
};
export { canvasToPNG, canvasToPNG as default };