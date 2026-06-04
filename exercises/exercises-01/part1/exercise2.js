function showRandomRoomDimensions() {
  const width = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  const height = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  const area = width * height;
  const perimeter = 2 * (width + height);
  console.log(
    `width: ${width}, height: ${height}, area: ${area}, perimeter ${perimeter} `,
  );
}
showRandomRoomDimensions();
