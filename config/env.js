import { ANOTHER_CONFIG, API_KEY } from '@env';

const devEnviromentsVariable = {
  API_KEY,
};
const prodEnviromentsVariable = {
  ANOTHER_CONFIG,
};

export default __DEV__ ? devEnviromentsVariable : prodEnviromentsVariable;
