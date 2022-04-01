import { BT_BRIK } from './fontTypes';
export default ({
  canvas,
  canvasImage,
  textAlign = 'center',
  fillStyle = 'white',
  shadowColor = 'black',
  fontWeight = 'normal',
  fontFamily = BT_BRIK,
  shadowOffsetY = 5,
  shadowOffsetX = null,
  shadowBlur = 5,
  rankImg = null,
  rankText = null,
  fullname = null,
  badge = null,
  firstInput = null,
  secondInput = null,
}) => {
  const ctx = canvas.getContext('2d');
  // Canvas dimensions
  canvas.width = canvasImage.naturalWidth;
  canvas.height = canvasImage.naturalHeight;
  // Canvas background image
  ctx.drawImage(canvasImage, 0, 0);
  // Canvas rank image
  if (rankImg) {
    ctx.drawImage(rankImg.img, rankImg.xAxis, rankImg.yAxis);
  }

  // Canvas font properties
  if (shadowOffsetX) ctx.shadowOffsetX = shadowOffsetX;
  ctx.shadowOffsetY = shadowOffsetY;
  ctx.shadowBlur = shadowBlur;
  ctx.fontWeight = fontWeight;
  ctx.textAlign = textAlign;
  ctx.fillStyle = fillStyle;
  ctx.shadowColor = shadowColor;

  if (badge) setProperties(ctx, badge, fontFamily);
  if (rankText) setProperties(ctx, rankText, fontFamily);
  if (fullname) setProperties(ctx, fullname, fontFamily);
  if (firstInput) setProperties(ctx, firstInput, fontFamily);
  if (secondInput) setProperties(ctx, secondInput, fontFamily);
};

const setProperties = (ctx, { fontSize, value, xAxis, yAxis }, fontFamily) => {
  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.fillText(value.toUpperCase().trim(), xAxis, yAxis);
};

/*
rankImg = { img: null },
rankText = {
  fontSize: 34,
  fontFamily: 'Source Sans Pro',
},
fullname = {
  fontSize: 60,
  fontFamily: 'Source Sans Pro',
},
badge = {
  fontSize: 46,
  fontFamily: 'Source Sans Pro',
},
firstInput = {
  fontSize: 72,
  fontFamily: 'BTBrikRegular',
},
secondInput = {
  fontSize: 52,
  fontFamily: 'BTBrikRegular',
},
*/
