
function Board({squares, onClick}) {

  return (
    <div className="game_wrap">
      <ul className="main_gbox">
      {squares.map((value, index) => (
        <li className="tile" key={index} onClick={() => onClick(index)} >{value}</li>
      ))}
      </ul>
    </div>
  );
};

export default Board;