import React from 'react';

type Props = {
  stats: any;
};

const StatsFromLink = (props: Props) => {
  return (
    <div>
      <header>Nazwa filmu</header>
      <p>Description</p>
      <p>Length</p>
      <pre>
        <code>{JSON.stringify(props.stats, null, 2)}</code>
      </pre>
    </div>
  );
};

export default StatsFromLink;
