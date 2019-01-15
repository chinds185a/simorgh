import { arrayOf, number, shape, string } from 'prop-types';

const metadataPropTypes = {
  id: string.isRequired,
  type: string.isRequired,
  createdBy: string,
  created: number,
  firstPublished: number.isRequired,
  lastPublished: number.isRequired,
  lastUpdated: number.isRequired,
  language: string.isRequired,
  locators: shape({
    cpsUrn: string.isRequired,
  }),
  passport: shape({
    category: shape({
      categoryId: string,
      categoryName: string,
    }),
    genre: string,
  }),
  tags: shape({
    about: arrayOf(
      shape({
        thingUri: string,
        topicId: string,
        topicName: string,
        curationType: arrayOf(string),
        thingId: string,
        thingLabel: string,
        thingType: arrayOf(string),
      }),
    ),
    mentions: arrayOf(shape({})),
  }),
  version: string,
  blockTypes: arrayOf(string),
};

export default metadataPropTypes;
