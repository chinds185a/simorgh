import React from 'react';
import { objectOf, arrayOf, func, shape, string } from 'prop-types';
import nanoid from 'nanoid';

// Inlined as this is a temporary component
const BlockString = props => {
  const stringProps = JSON.stringify(props);
  return <p>{stringProps}</p>;
};

const Blocks = ({ blocks, componentsToRender }) =>
  blocks.map((block, index) => {
    const { type } = block;

    const { type: typeOfPreviousBlock } = blocks[index - 1] || {};

    let Block = null;

    switch (type) {
      case 'crosshead':
        Block = componentsToRender.Headings || BlockString;
        break;
      case 'media':
        Block = componentsToRender.video || BlockString;
        break;
      case 'social_embed':
        Block = componentsToRender.socialEmbed || BlockString;
        break;
      default:
        Block = componentsToRender[type] || BlockString;
    }

    return (
      <Block
        key={nanoid()}
        type={type}
        typeOfPreviousBlock={typeOfPreviousBlock}
        {...block}
      />
    );
  });

Blocks.propTypes = {
  blocks: arrayOf(
    shape({
      type: string.isRequired,
    }),
  ).isRequired,
  componentsToRender: objectOf(func).isRequired,
};

export default Blocks;
