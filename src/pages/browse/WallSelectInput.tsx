import React from 'react';
import Btn from '../../lib/btn/Btn';

type Props = {
  wall: string;
  setWall: (wall: string) => void;
};

const mockWalls = ['memes', 'zdjęcia', 'do zapamiętania'];

const WallSelectInput = ({ wall, setWall }: Props) => {
  return (
    <nav>
      <header>Selected Wall: {wall}</header>
      <div style={{ display: 'flex', gap: 16, margin: '8px 0' }}>
        {mockWalls.map((_wall) => (
          <Btn
            key={_wall}
            onClick={() => setWall(_wall)}
            disabled={_wall === wall}
          >
            {_wall}
          </Btn>
        ))}
      </div>
    </nav>
  );
};

export default WallSelectInput;
