import { number, shape, string } from 'prop-types';

const promoPropTypes = {
  id: string.isRequired,
  headlines: shape({
    headline: string.isRequired,
    shortHeadline: string,
  }),
  locators: shape({
    cpsUrn: string.isRequired,
  }),
  summary: string,
  timestamp: number,
};

export default promoPropTypes;
